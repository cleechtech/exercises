var http = require('http');

var site = process.argv[2];

http.get(site, function(response){
	// response is node stream object (stream: 'objects that emit events')
	response.setEncoding('utf-8');
	response.on("data", function(data){
		console.log(data);
	});
});

// OFFICIAL
/****************
 
  var http = require('http')
  
  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  })
 
***********************/
