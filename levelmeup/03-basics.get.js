// Write a program that opens a LevelDB data-store using `level`.

// The store will contain up to 10 entries with keys in the form:

//   keyX

// Where 'X' is an integer between 0 and 100.

// You must find those entries and print them out to the console, ordered
// by 'X', ascending. You should print them out with:

//   console.log(key + '=' + value)
//   // will output "key12=here is that random text"

var pathToDB = process.argv[2],
	level = require('level'),
	db = level(pathToDB),
	trialKeys = [];

// make keys
for (var i = 0; i <= 100; i++){
	trialKeys.push('key' + i.toString())	
}

checkKeys(0)

function checkKeys(keyToCheck){
	if(keyToCheck < 100){
		db.get(trialKeys[keyToCheck], function(err, value){
			if (!err) console.log(trialKeys[keyToCheck] + '=' + value)

			checkKeys(keyToCheck += 1)
		})
	}
}