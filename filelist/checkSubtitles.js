var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'utf-8', function(err, contents){
	if (err) throw err;
	
	var lines = contents.toString().split('\n');
	var offenders = [];
	
	// read each line
	for(var i = 0; i < lines.length; i++){
		var start = lines[i].substring(0,12);
		var end = lines[i].substring(17);
		// up to 10 min
		if (start[0] === '0'){
			if (start === end && i < 877){
				offenders.push(lines[i]);
			}
		
			// after 10 minutes the number format changes (line 878)
			if (i >= 877){
				start = lines[i].substring(0,13);
				end = lines[i].substring(18);
				if (start === end){
					offenders.push(lines[i]);
				}
			}
		}
	}

	console.log(offenders);
});

// OFFENDERS
/*
[ '00:00:12,000 --> 00:00:12,000',
  '00:02:39,000 --> 00:02:39,000',
  '00:06:48,000 --> 00:06:48,000',
  '00:08:26,000 --> 00:08:26,000',
  '00:09:13,000 --> 00:09:13,000',
  '00:012:16,000 --> 00:012:16,000' ]
*/

