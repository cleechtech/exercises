// program that prints a list of files in a given directory,
// filtered by the extension of the files

var fs = require('fs');

var dir = process.argv[2]; // directory to search
var ext = process.argv[3]; // file extension to filter by

fs.readdir(dir, function(error, list){
	// list is an array of filename strings
	if(error) throw err;
	
	for (var i = 0; i < list.length; i++){
		var extension = list[i].split('.').pop(); // get file's extension
		if (ext === extension){
			console.log(list[i]);
		}
	}
});


// OFFICIAL SOLUTION
/**************************
  var fs = require('fs')
  var regex = new RegExp('\\.' + process.argv[3] + '$')
  
  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (regex.test(file))
        console.log(file)
    })
  })
****************************/
