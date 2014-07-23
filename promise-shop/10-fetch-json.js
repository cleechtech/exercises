var http = require('q-io/http');

var contentsPromise = http.read("http://localhost:1337")

// resolve function
contentsPromise.then(function(data){
	console.log(JSON.parse(data))
})
