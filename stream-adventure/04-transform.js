var through = require('through');
var tr = through(write);

process.stdin.pipe(tr).pipe(process.stdout);

function write(buffer){
	var data = buffer.toString();
		data = data.toUpperCase();

	this.queue(data);
}

// OFFICIAL SOLUTION
/**********************
 
var through = require('through');
var tr = through(function (buf) {
       this.queue(buf.toString().toUpperCase());
    });
    process.stdin.pipe(tr).pipe(process.stdout);
    
***********************/
