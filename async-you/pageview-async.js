var async = require('async'),
	https = require('https');

var toHit = []
for (var i = 0; i < 10000; i++){
	toHit[i] = 'https://coderwall.com/p/fn6v6a'
}
var j = 0

async.each(toHit, function(url, done){

	https.get(url, function(res){
		j += 1;
		console.log('request sent: ' + j);
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