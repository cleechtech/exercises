var fs = require('fs')
var fileObj = require('./youtube_to_slug_map.json')

fs.readdir('.', function(err, data){
	
	// data returns array of file names
	for (var i = 0; i < data.length; i++){
		// remove .avi extension
		var fileName = data[i].replace(/.avi/gm, '')
		
		// get keys of the json object
		var keys = Object.keys(fileObj)
		
		for (var j = 0; j < keys.length; j++){
			
			if (keys[j] == fileName){
				fs.rename('./' + fileName + '.avi', fileObj[fileName] + '.avi')
			}
		}
	}	
});
