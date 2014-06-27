// run a series of asynchronous calls without caring about the return data
// Create a program that will receive two URLs as the first and second command-line arguments.
// Then using `http.get` create two GET requests to these URL's console.log any
// errors.

var async = require('async'),
	http = require('http'),
	firstUrl = process.argv[2],
	secondUrl = process.argv[3];

async.each([firstUrl, secondUrl], function(url, done){

	http.get(url, function(res){
		res.on('data', function(chunk){
			// make request, do nothing
		})
		res.on('end', function(){
			done(null)
		})
	}).on('error', function(err){
		// error with GET request
		done(err)
	})

}, function(err){
	// handle errors
	console.log(err)
})