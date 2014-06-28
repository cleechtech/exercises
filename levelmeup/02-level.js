// Write a program that opens a LevelDB data-store using `level`.

// Fetch and print to the console the value associated with the key
// 'levelmeup'.

// The first command-line argument to your program will be the full path
// to the directory containing the LevelDB store.

var pathToDB = process.argv[2]
var level = require('level')
var db = level(pathToDB)

db.get('levelmeup', function(err, value){
	if (err) return console.log(err);
	console.log(value)
})