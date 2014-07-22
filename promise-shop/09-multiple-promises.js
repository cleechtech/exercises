var q = require('q'),
	prom1 = q.defer(),
	prom2 = q.defer();

var all = function(one, two){
	var counter = 0,
		internal = q.defer(),
		val1, val2;

	one.then(function(resolveData){
		++counter;
		val1 = resolveData;
		if(counter === 2) internal.resolve([val1, val2]);
	}, function(){
		internal.reject()
	});

	two.then(function(resolveData){
		++counter;
		val2 = resolveData;
		if(counter === 2) internal.resolve([val1, val2]);
	}, function(){
		internal.reject()
	});

	return internal.promise;
};

all(prom1.promise, prom2.promise).then(console.log)

setTimeout(function(){
	prom1.resolve('PROMISES');
	prom2.resolve('FTW')
}, 200)