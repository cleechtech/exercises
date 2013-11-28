// Your program will get some html written to stdin. Convert all the inner html to
// upper-case for elements with a class name of "loud".

//~ var through = require('through'),
	//~ trumpet = require('trumpet');
//~ 
//~ var upper = function(buf){
	//~ this.queue(buf.toString().toUpperCase());
//~ }
//~ 
//~ var stream = trumpet().select('.loud').createStream();
//~ 
//~ stream.pipe(through(upper)).pipe(stream);
//~ 
//~ process.stdin.pipe(trumpet).pipe(process.stdout);


var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through');

var p_fnc = function(buf){
  this.queue(buf.toString().toUpperCase());
}

var stream = tr.select('.loud').createStream();

stream.pipe(through(p_fnc)).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);

// OFFICIAL SOLUTION
/*********************
 
var trumpet = require('trumpet');
    var through = require('through');
    var tr = trumpet();
    
    var loud = tr.select('.loud').createStream();
    loud.pipe(through(function (buf) {
        this.queue(buf.toString().toUpperCase());
    })).pipe(loud);
    
    process.stdin.pipe(tr).pipe(process.stdout);

*************************/
