var q = require('q'),
	dfd = q.defer()

// console.log is function to execute 
// when promise is resolved
dfd.promise.then(console.log)

// string is parameter 
setTimeout(dfd.resolve, 300, 'RESOLVED!')