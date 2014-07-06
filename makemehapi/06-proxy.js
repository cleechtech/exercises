// Create a server which takes any requests to the path /proxy and proxies them
// to http://localhost:65535/proxy.

var Hapi = require('hapi'),
	server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	method: 'GET',
	path: '/proxy',
	handler: function(req, res){
		res.proxy({
			host: '127.0.0.1',
			port: 65535
		})
	}
})

server.start()




// also valid:
// handler: {
// 	proxy: {
// 		host: '127.0.0.1',
// 		port: 65535
// 	}
// }