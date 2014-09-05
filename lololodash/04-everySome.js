// We have a list of the daily average temperatures of different European towns.

var europe = { Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
      Munic:     [16,17,19,20,21,23,22,21,20,19,24,23],
      Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
      Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
      Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }

// We want to sort these towns into two groups: "warm" and "hot". "warm" should
// be towns that have at least one day with a temperature greater than 19. "hot"
// should be towns where the temperature is greater than 19 every day. The result
// should look like this:

//     {  hot: [ "Hottown" ],
//       warm: [ "Town1", "Town2", "Town3" ] }

var _ = require('lodash');

var groupTowns = function(towns){
	var grouped = { 'hot': [], 'warm': [] };

	_.forEach(towns, function(temps, town){
		var everyDay = _.every(temps, function(t){
			return t > 19;
		})
		if(everyDay){
			grouped['hot'].push(town)
		} else {
			var someDay = _.some(temps, function(t){
				return t > 19;
			})
			if(someDay){
				grouped['warm'].push(town);
			}
		}
	});

	return grouped;
};

// console.log(groupTowns(europe))

module.exports = groupTowns;



// OFFICIAL SOLUTION
// =================
// var tempsort = function (item) {
//     var result = {
//         hot: [],
//         warm: []
//     };

//     function check_temp (item) {
//         return item > 19;
//     }

//     _.forEach(item, function (town, townname) {

//         if (_.every(town, check_temp)) {
//             result.hot.push(townname);
//         } else if (_.some(town, check_temp)) {
//             result.warm.push(townname);
//         }

//     });

//     return result;
// };
