// console.logs DR. MANHATTAN

var q = require('q'),
	dfd = q.defer();

var attachTitle = function(name){
	return 'DR. ' +  name
}

// even though attachTitle returns a string it's cool.
// q will wrap that shii up in a promise
dfd.promise.then(attachTitle, null).then(console.log, null)

dfd.resolve('MANHATTAN')