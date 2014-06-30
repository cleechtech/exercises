// Write a program that will receive an URL as the first command line argument.
// To this URL send a GET request using http.get with a query
// parameter named number which should be set consecutively to one
// of the values in the following array

//     ['one', 'two', 'three']

// Convert the response body to a Number and add it to the previous value. 
// console.log the reduced value.

var async = require('async'),
	http = require('http'),
	url = process.argv[2];

var total = 0;
async.reduce(['one', 'two', 'three'], 0, function(memo, item, done){
	http.get(url + '?number=' + item, function(res){
		var numba;
		res.on('data', function(chunk){

			numba = parseInt(chunk)
		})
		res.on('end', function(){
			total += numba
			// done oly gets called at the very end of the array..., not the end of the request?
			done(null, total)
		})
	})
	
}, function(err, result){
	// result is the 'reduced' value
	console.log(result)
})
