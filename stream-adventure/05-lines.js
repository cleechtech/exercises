var through = require('through');
var split = require('split');

var count = 1;
// defaults: through(write, end)
var transform = through(function(line){
	
	if (count % 2 == 0){
		var chunk = line.toString().toUpperCase();
	} else {
		var chunk = line.toString().toLowerCase();
	}
	this.queue(chunk + '\n');
	count++;
});

process.stdin
	.pipe(split())
	.pipe(transform) // capitalizes
	.pipe(process.stdout); // outputs

// OFFICIAL
/*****************
    var through = require('through');
    var split = require('split');
    
    var lineCount = 0;
    var tr = through(function (buf) {
        var line = buf.toString();
        this.queue(lineCount % 2 === 0
            ? line.toLowerCase() + '\n'
            : line.toUpperCase() + '\n'
        );
        lineCount ++;
    });
    process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

****************/
