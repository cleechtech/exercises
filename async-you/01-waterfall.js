// In this problem you will need to write a program that first reads the contents of a file.
// The path will be provided as the first command-line argument to your program.
// The file will contain a single URL. Using `http.get` create GET request to to this url and
// console.log the response body.
var http = require('http');
var fs = require('fs');
var path = process.argv[2];
var async = require('async')

async.waterfall([
	// read the file
	function(cb){
		fs.readFile(path, 'UTF-8', function(err, data){
			if (err) return cb(err);

			cb(null, data)	// data gets passed on as first arg of next function
		})
	},
	// send http request
	function(url, cb){
		var data = ''
		http.get(url, function(res){
			res.on('data', function(chunk){
				// chunk is raw data
				data += chunk.toString()
			});
			res.on('end', function(){
				cb(null, data)	// pass all the data that's been read to next function (results function)
			})
		}).on('error', function(err){
			// handle errors with the GET request
			cb(err)
		})
	}
], function(err, results){
	// if any of the task functions have error
	if(err) return err;

	console.log(results)
})