// q.fcall creates a promise from a value
var q = require('q'),
	dfd = q.defer(),
	invalidJSON = process.argv[2];

q.fcall(function(){
	return JSON.parse(invalidJSON)
}).then(null, console.log)

// q.fcall(JSON.parse, invalidJSON) ..also works