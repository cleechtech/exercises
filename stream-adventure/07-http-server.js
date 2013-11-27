var http = require('http'),
	through = require('through'),
	port = process.argv[2];
	
var server = http.createServer(function(req, res){
	
	var tr = through(function(buffer){
		var cap = buffer.toString().toUpperCase();
		this.queue(cap);
		});
		
	if (req.method === 'POST'){
		req.pipe(tr).pipe(res);
	}
});

server.listen(port);


// OFFICIAL SOLUTION
/*

    var http = require('http');
    var through = require('through');
    
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(function (buf) {
                this.queue(buf.toString().toUpperCase());
            })).pipe(res);
        }
        else res.end('send me a POST\n');
    });
    server.listen(parseInt(process.argv[2]));
    
*/
