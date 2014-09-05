// Write a function that will sort these items 
// by quantity from largest to smallest.

var _ = require('lodash'),
	items = [
		{ article: 41,   quantity: 24 },
    	{ article: 2323, quantity: 2  },
    	{ article: 655,  quantity: 23 }
	];

var sortDescending = function(p){
	return _.sortBy(p, 'quantity').reverse()
}

// console.log(sortDescending(items))

module.exports = sortDescending;