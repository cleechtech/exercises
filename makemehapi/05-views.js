// Create a server which responds to requests to /?name=Handling using a template
// located at templates/index.html

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), {
        views: {
            path: 'templates',	// path to where templates are stored
            engines: {
                html: require('handlebars')
            }
        }
    });

server.route({
	method: 'GET',
	path: '/',
	handler: {
		// render templates/index.html
		view: 'index.html'
	}
})

server.start()