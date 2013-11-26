var myFilter = require('./modular2');

var dir = process.argv[2]; // directory to search
var searchFor = process.argv[3]; // file extension to filter by

myFilter(dir, searchFor, function(err, files){
	if (err){
		return console.log("there's an error here: ", err); 
	}
	
	for (var j = 0; j < files.length; j++){
		console.log(files[j]);
	}

});

// solution.js:
/*
  var filterFn = require('./solution_filter.js')
  var dir = process.argv[2]
  var filterStr = process.argv[3]
  
  filterFn(dir, filterStr, function (err, list) {
    if (err)
      return console.error('There was an error:', err)
  
    list.forEach(function (file) {
      console.log(file)
    })
  })
*/
