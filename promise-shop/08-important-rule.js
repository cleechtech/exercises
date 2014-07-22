var q = require('q');

var throwMyGod = function(){
	// trigger reject promise
	throw new Error('OH NOES')
}

var iterate = function(i){
	console.log(i)
	return i + 1
}

q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwMyGod)	// error will travel to first available rejection handler
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log)

// best practice to put a rejection 
// handler at end of promise chain