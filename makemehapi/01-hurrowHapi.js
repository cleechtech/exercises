// Create a hapi server that listens on a port passed from the command line and replies with
// "Hello Hapi" when an HTTP GET request is sent to /.

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	path: '/',
	method: 'GET',
	handler: function(req, res){
		res("Hello Hapi")
	}
})

server.start();