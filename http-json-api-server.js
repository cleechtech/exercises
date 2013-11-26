// JSON API server

// /api/parsetime?iso=2013-08-10T12:10:15.474Z
/*
 returns:
 {
    "hour": 14,
    "minute": 23,
    "second": 15
  }
*/

var http = require('http'),
	url = require('url'),
	moment = require('moment'),
	t2map = require('through2-map')
	fs = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, { 'Content-Type': 'application/json' }); // be a good web citizen and set the content-type properly
	
	var info = url.parse(request.url, true);
	var time = new moment(info.query.iso);
	
	if (info.pathname === '/api/parsetime'){
		response.write(JSON.stringify({
			'hour': time.get('hour'),
			'minute': time.get('minute'),
			'second': time.get('second')
		}));
		response.end();
	}
	else if (info.pathname === '/api/unixtime'){
		response.write(JSON.stringify({
			"unixtime": time._d.getTime()
		}));
		response.end()
	}
	else {
		response.writeHead(404);
		response.end();
	}

}).listen('8000');


// official solution:
/*

var http = require('http')
  var url = require('url')
  
  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
  function unixtime (time) {
    return { unixtime : time.getTime() }
  }
  
  var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result
  
    if (/^\/api\/parsetime/.test(req.url))
      result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
      result = unixtime(time)
  
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  server.listen(8001)
 
 */









