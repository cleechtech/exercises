// Create a hapi server that listens on port 8080 and outputs
// "Hello [name]" where [name] is replaced with the path parameter
// supplied to GET /{name}

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	path: '/{name}',
	method: 'GET',
	handler: function(req, res){
		res("Hello " + req.params.name)
	}
})

server.start();