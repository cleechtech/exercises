var http = require('http');

// Creates a new stream with the results of calling a provided function 
// on every element in this stream
var t2map = require('through2-map');

var server = http.createServer(function(request, response){
	
	if (request.method == 'POST'){
		request
			.pipe(
				t2map(function(chunk){
					return chunk.toString().toUpperCase();
				}))
			.pipe(response);
	} else {
		return console.error('server only takes POST requests');
	}
});

server.listen('8000');


// OfFicial SOLUTION
/***********************

  var http = require('http')
  var map = require('through2-map')
  
  var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
      return res.end('send me a POST\n')
  
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  })
  
  server.listen(8001)


***************************/
