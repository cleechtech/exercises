var q = require('q'),
	dfd = q.defer();

var rejectReason = function(err){
	console.log(err.message)
}

dfd.promise.then(null, rejectReason)

// parameter could be: new Error('REJECTED!')
setTimeout(dfd.reject, 300, {message:'REJECTED!'})