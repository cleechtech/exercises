var fs = require('fs');

var file = 'filelist.txt'; // process.argv[1] reads first command line argument

fs.readFile(file, 'utf-8', function(err, data){
	if (err) throw err;
	
	console.log(typeof(data)); // string
	
	// todo: manipulate string using regular expression
	
});

// ==================================================

// readable stream
var read = fs.createReadStream(file).pipe(process.stdout);

// writeable stream
var writeableStream = fs.createWriteStream('filelist2.txt');
console.log('stream: ' + typeof(writeableStream));
