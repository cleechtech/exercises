// Create a server which routes requests to the path /foo/bar/baz/file.html to a
// file in a directory, e.g. public/file.html

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	path: '/foo/bar/baz/{file}',
	method: 'GET',
	handler: {
		directory: {
			path: './public'
		}
	}
})

server.start();
