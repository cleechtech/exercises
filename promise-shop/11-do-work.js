var qhttp = require('q-io/http');

// request to get id, returns promise
qhttp.read('http://localhost:7000')
	.then(function(id){
		// request to get user, returns promise
		return qhttp.read('http://localhost:7001/' + id)
	}).then(function(user){
		// resolve promise and print
		console.log(JSON.parse(user))
	})