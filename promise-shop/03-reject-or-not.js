var q = require('q'),
	dfd = q.defer();

dfd.promise.then(console.log, console.log)

dfd.resolve('I FIRED')

// promises can only resolve once. 
// This code gets ignored
dfd.reject('I DID NOT FIRE')