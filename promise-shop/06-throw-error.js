// logs an error

var q = require('q'),
	invalidJSON = process.argv[2];

var parsePromised = function(){
	var dfd = q.defer();

	try {
		// throws error, will not resolve
		dfd.resolve(JSON.parse(invalidJSON))
	} catch(err){
		dfd.reject(err)
	}

	return dfd.promise;
}

parsePromised().then(null, console.log)