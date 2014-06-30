// Write a program that will receive two command line arguments containing
// the hostname and port. Using `http.request` send a POST request to
//     url + '/users/create'
// with the body containing a JSON.stringify'ed object;
//     {user_id : 1}
// Do this five times with each of the `user_id` property being incremented starting at 1.
// Once these requests are done send a GET request to 
//     url + '/users'
// and console.log the response body for the GET request.

// HINTS: In this problem, you will need to co-ordinate a few async operations.
// Use async.series for this and pass in an Object. One of the task functions will need to use async.times
// to send POST requests using http.request. The other will then do the GET request.


var async = require('async'),
	http = require('http'),
	user_id = 0,
	hostname = process.argv[2],
	port = process.argv[3],
	url = 'http://' +  hostname + ':' + port + '/users';

var sendPostRequests = function(done){
	async.times(5, function(n, next){
		var req = http.request({
			hostname: hostname,
			port: port,
			method: 'POST',
			path: "/users/create"
		}, function(res){
			res.on('data', function (chunk) {
	        });
	        res.on('end', function(){
	        	next(null)
	        })
		})

		req.write(JSON.stringify({ 'user_id': n + 1 }))
		req.end();
	}, function(err){
		if (err) return console.log(err);
		// finished sending post requests, move on to the next function
		done(null)
	})
};

var sendGetRequest = function(done){
	http.get(url, function(res){
		var body = '';

		res.on('data', function(chunk){
			body += chunk.toString();
		})

		res.on('end', function(){
			done(null, body)
		})
	})

}

// send requests
async.series({
	post: sendPostRequests, 
	get: sendGetRequest
	}, function(err, results){
		// log result of get request
		console.log(results.get)
	})