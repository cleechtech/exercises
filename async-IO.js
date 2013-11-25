var fs = require('fs');

var file = process.argv[2];

var read = fs.readFile(file, 'utf-8', function(error, data){
	if(error) throw err;
	
	countNewLines(data);
	});

function countNewLines(f){
	var count = f.split('\n').length - 1; // split string by \n and subtract 1
	console.log(count);
}

// OFFICIAL SOLUTION
/*********************
  var fs = require('fs')
  var file = process.argv[2]
  
  fs.readFile(file, function (err, contents) {
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
  })
************************/

