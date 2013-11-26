var http = require('http');
var fs = require('fs');

var file = process.argv[2];

var server = http.createServer(function(request, response){
	
	var readable = fs.createReadStream(file);
	
	// This method pulls all the data out of a readable stream
	// and writes it to the supplied destination
	readable.pipe(response);
});

server.listen('8000');


// OFFICIAL ANSWER
/************************

  var http = require('http')
  var fs = require('fs')
  
  var server = http.createServer(function (req, res) {
    fs.createReadStream(process.argv[2]).pipe(res)
  })
  server.listen(8001)

*************************/
