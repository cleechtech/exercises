// Create a Hapi server which responds to GET requests to / by streaming a ROT13'd version of a file that contains:

//     The Pursuit of Hapi-ness

// Output should look like:

//     Gur Chefhvg bs Uncv-arff

// sample code for ROT13 Stream: https://gist.github.com/thegoleffect/df70f2102f1b2e794550

var Hapi = require('hapi'),
	fs = require('fs'),
	ROT13Stream = require('./simple-rot13-stream.js'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	method: 'GET',
	path: '/',
	handler: function(req, reply){
		var inputStream = fs.createReadStream('./input.txt');
		
		// transformation..
		var rot13 = new ROT13Stream();

		// reply can take a stream as argument
		reply(inputStream.pipe(rot13))
	}
})

server.start()