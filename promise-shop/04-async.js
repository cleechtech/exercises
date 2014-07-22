// promises must be resolved or reject on same
// turn of the event loop that they're created on.
// The resolve/reject functions get called on the
// following cycle of the event loop

var q = require('q'),
	dfd = q.defer();

dfd.promise.then(console.log)

dfd.resolve('SECOND')

// executed on first turn of event loop
// (same loop where promise is defined and resolved)
console.log('FIRST')