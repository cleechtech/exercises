// The second command-line argument is a string containing a complete
// JSON-encoded object. Parse this object and put each property of
// the object into your data-store where the property name is the entry's
// key and the property value is the entry's value.

// Your solution will be verified by reading the data-store and checking
// against the object that was provided to you.

var pathToDB = process.argv[2],
	toParse = process.argv[3],
	level = require('level');
	db = level(pathToDB);

console.log(process.argv)
console.log(process.argv[3])

// for (var key in toParse){
// 	db.put(key, toParse[key])
// }