// Write a program that will receive a single command line argument to a URL.
// Using async.whilst and http.get send GET
// requests to this url until the response body contains the string meerkat

// console.log the amount of GET requests needed to retrieve the meerkat string

// HINTS: String.prototype.trim() is your friend.

var async = require('async'),
	http = require('http'),
	url = process.argv[2];

var count = 0
var lastResponse = '';
//whilst(test, fn, callback)
// Repeatedly call fn, while test returns true. Calls callback when stopped, or an error occurs.
async.whilst(function(){ return lastResponse !== 'meerkat' }, function(done){
	
	// send request
	http.get(url, function(res){
		count += 1;
		varbody = '';
		res.on('data', function(chunk){
			body += chunk.toString()
		})
		res.on('end', function(){
			lastResponse = body.trim();
			console.log(lastResponse)
			done()
		})
	})
	done(null);
}, function(err){
	if(err) return console.log(err);
	// finished
	console.log('count is: ' + count)
})