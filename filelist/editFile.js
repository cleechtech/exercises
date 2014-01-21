//~ STREAMS
var fs = require('fs');
var fileList = 'filelist.txt'; // process.argv[1] reads first command line argument

fs.readFile(fileList, 'utf-8', function(err, data){
	if (err) throw err;
	
	// only removes '.png' from the first line..
	var newValue = data.replace(/^\./gm, 'www.youtube.com').replace(/.png/gm, '');
	
	fs.writeFile('filelist2.txt', newValue, function(err){
		if (err) throw err;
		
		console.log('async streaming with node.js');
	});
});
