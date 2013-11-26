var http = require('http');
var bl = require('bl');

var s1 = process.argv[2];

var s2 = process.argv[3];

var s3 = process.argv[4];


// Welcome to Callback Hell

	http.get(s1, function(response){
		response.pipe(
			bl(function(error, data){
				if (error) return console.error(data);
				
				data = data.toString();
				console.log(data);
			})
		);
		response.on("end", function(){
			http.get(s2, function(response2){
				response2.pipe(bl(function(error, data2){
					if (error) return console.error(data2);
					
					data2 = data2.toString();
					console.log(data2);
					}));
				response2.on("end", function(){
					http.get(s3, function(response3){
						response3.pipe(bl(function(error, data3){
							if (error) return console.error(data3);
							
							data3 = data3.toString();
							console.log(data3);
						}));
					});
				});
			});
		});
	});

// end Callback Hell


// OFFICIAL SOLUTION
/*******************************************

  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0
  
  function printResults () {
    for (var i = 0; i < 3; i++)
      console.log(results[i])
  }
  
  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(data)
  
        results[index] = data.toString()
        count++
  
        if (count == 3) // yay! we are the last one!
          printResults()
      }))
    })
  }
  
  for (var i = 0; i < 3; i++)
    httpGet(i)
*******************************************/


