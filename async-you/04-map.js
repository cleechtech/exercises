// Using http.get create two GET requests to these URLs.
// You will need to use async.map and console.log the
// result array

var async = require('async'),
	http = require('http'),
	firstUrl = process.argv[2],
	secondUrl = process.argv[3];

// Produces a new array of values by mapping each value in arr 
// through the iterator function
async.map([firstUrl, secondUrl], function(url, done){
	var body = ''
	// for each url in the array
	http.get(url, function(res){
		res.on('data', function(chunk){
			// make request, do nothing
			body += chunk.toString()
		})
		res.on('end', function(){
			done(null, body)
		})
	}).on('error', function(err){
		// error with GET request
		done(err)
	})

}, function(err, results){
	if (err) return console.log(err)
		
	console.log(results)
})
