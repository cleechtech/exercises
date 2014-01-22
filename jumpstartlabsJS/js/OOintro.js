// site: http://tutorials.jumpstartlab.com/projects/javascript/introduction/6-object-oriented-javascript.html
// when classes are created they have a 'prototype' object that is copied for each instance created

// EXAMPLE:
// constructor (or initializer) --called when new Person is created
var Person = function(name){
	this.name = name;
	this.human = true;
}

// when new is called, the object will have a copy of the prototype attached to it
// any objects on the prototype are available on the object itself
Person.prototype = {
	sayHello: function(){
		alert('Hello my name is ' + this.name);
	},
	
	hairColor: 'default'
}

var joe = new Person('Joe');
var mary = new Person('Mary');

joe.hairColor = 'brown';
joe.human = false;

alert('joe\'s hair color: ' + joe.hairColor + '\n'
		+ 'humanity: ' + joe.human);
alert('Mary\'s hair color: ' + mary.hairColor + '\n'
		+ 'humanity: ' + mary.human);
