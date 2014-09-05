// Calculates the total number of orders for each article.
// Sorts the resulting array so that the articles with the highest number of orders are on top

var orders = [ { "article": 2323,
  "quantity": 4 },
 { "article": 41,
  "quantity": 1 },
 { "article": 2323,
  "quantity": 10 },
 { "article": 655,
  "quantity": 2 },
 { "article": 655,
  "quantity": 4 }],
	_ = require('lodash');

var getTotal = function(orders){
	var orders = _.groupBy(orders, 'article');

	return _.map(orders, function(value, key){

		// get total_orders
		var total_orders = _.reduce(value, function(accum, value, index){
			accum += value['quantity'];
			return accum;

		}, 0);

		return {
			"article": parseInt(key),
			"total_orders": total_orders
		}
	}).reverse();

};

// console.log(getTotal(orders));


module.exports = getTotal;

//   _.reduce(collection, [callback=identity], [accumulator])

// reduce goes through collection, calls callback each time
// and takes a rolling accumulator that it will provide to each call.
// Each iteration, callback will be called as callback(accumulator,
// value, index|key, collection) (Finally, a different callback!).  

//   * `accumulator` is the rolling tally-keeping variable.
//   * `value` is the current item's value.
//   * `key` is the key of the current item in the Object.




// OFFICIAL SOLUTION
// =================
// var overview = function (orders) {
    
//     var overviewarray = [],
//         total = 0;

//     // Group by article
//     orders = _.groupBy(orders, 'article');

//     _.forEach(orders, function (item, key) {

//         key = parseInt(key);
//         total = 0;

//         // If only one article
//         if (item.length === 1) {
//             total = item[0].quantity;

//         // Else make sum of all orders
//         } else {
//             total = _.reduce(item, function(sum, item) {
//                 return sum + item.quantity;
//             }, 0);
//         }

//         overviewarray.push({
//             article: key,
//             total_orders: total
//         });

//     });

//     // Order
//     overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

//     return overviewarray;
// };
