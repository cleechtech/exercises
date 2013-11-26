// Write a TCP time server!

var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket){
	
	var date = moment().format('YYYY-MM-DD HH:mm');
		
	socket.write(date + '\n');
	socket.end();
});

server.listen('8000');


// OFFICIAL SOLUTION
/*****************************
  var net = require('net')
  
  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }
  
  function now () {
    var d = new Date()
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
  }
  
  var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
  })
  server.listen(8001)

*****************************/

