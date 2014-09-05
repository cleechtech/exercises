// We want a new size attribute added to every town where the value depends on
// the town's its population

// Use the following guidelines:

//   * All cities having a population over 1 million are "big".
//   * Cities having a population less than 1 million but more than 0.5 million are "med".
//   * All cities having a population less than 0.5 million are "small".

var _ = require('lodash'),
  europe = { 
    Hamburg:    { population: 1.698 },
    Strasbourg: { population: 0.272 },
    Rom:        { population: 2.753 },
    Dublin:     { population: 0.528 } 
  };

var addCitySize = function(cities){
  _.forEach(cities, function(value, key){
    if(value.population > 1){
      value.size = 'big';
    } else if (value.population < 1 && value.population > .5){
      value.size = 'med';
    } else if (value.population < .5){
      value.size = 'small';
    }
  });

  return cities;
};

// console.log(addCitySize(europe))

module.exports = addCitySize;