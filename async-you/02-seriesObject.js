// async.series will collects all results as an array and pass
// it to the optional callback that runs once all of the task functions
// have completed
// async.series can use an object running
// each property and creating a result object with the same properties

var async = require('async'),
	http = require('http'),
	firstUrl = process.argv[2],
	secondUrl = process.argv[3];

// executes each request and returns an object once all requests have completed
async.series({
	requestOne: function(cb){
		var data = ''
		http.get(firstUrl, function(res){
			// pass the response body to the callback
			res.on('data', function(chunk){
				// chunk is raw data
				data += chunk.toString()
			});
			res.on('end', function(){
				cb(null, data)	// pass all the data that's been read to next function (results function)
			})
		})
	},
	requestTwo: function(cb){
		var data = ''
		http.get(secondUrl, function(res){
			// pass the response body to the callback
			res.on('data', function(chunk){
				// chunk is raw data
				data += chunk.toString()
			});
			res.on('end', function(){
				cb(null, data)	// pass all the data that's been read to next function (results function)
			})

		})
	}
}, function(err, results){
	console.log(results)	// { requestOne: 'one is smaller than 2', requestTwo: 'two greater than one' }
})