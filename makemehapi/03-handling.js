// Create a server which responds to requests to / with a static HTML file named
// index.html

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	path: '/',
	method: 'GET',
	handler: {
		file: "index.html" // OR path.join(__dirname + '/index.html')
	}
})

server.start();