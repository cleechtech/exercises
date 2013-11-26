var http = require('http');
var bl = require('bl'); // buffer list

var site = process.argv[2];

http.get(site, function(response){
	
	response.pipe(bl(function(error, data){
		if (error) throw error;
		
		// number of characters recieved from the server
		var c = data.length;
		
		// complete string sent by server
		data = data.toString();	
		
		console.log(c);
		console.log(data);
	}));
});


// OFFICIAL
/***********************************
  var http = require('http')
  var bl = require('bl')
  
  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(data)
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))  
  })
************************************/
