var fs = require('fs');

module.exports = function(dirName, ext, callback){
	var regEx = new RegExp('\\.' + ext + '$'); // reg ex for matching a file extension
	
	fs.readdir(dirName, function(err, files){
		if(err) return callback(err);
		
			var files = files.filter(function(fileName){
				return regEx.test(fileName);
			});

		callback(null, files);
	});
}

// solution_filter.js:
/***************************
  var fs = require('fs')
  
  module.exports = function (dir, filterStr, callback) {
    var regex = new RegExp('\\.' + filterStr + '$')
  
    fs.readdir(dir, function (err, list) {
      if (err)
        return callback(err)
  
      list = list.filter(function (file) {
        return regex.test(file)
      })
  
      callback(null, list)
    })
  }
 *****************************/

