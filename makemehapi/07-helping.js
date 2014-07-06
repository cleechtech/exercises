// Create a server which responds to requests to /?name=Helping&suffix=! using
// the template from the VIEWS exercise.

// Instead of placing the query parameter directly in the template, create a helper
// at helpers/helper.js and use this helper in the template to output the name
// query parameter.

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), {
        views: {
        	path: './templates',
        	engines: {
                html: require('handlebars')
            },
   			// You can define a helpers path in the server options. All .js files in this
			// directory will be loaded and the file name will be used as the helper name.
            helpersPath: './helpers'
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