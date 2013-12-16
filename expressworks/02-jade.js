// Create an Express.js app with a home page (/home) 
// rendered by jade template engine, that shows current date (toDateString).

var express = require('express');
var jade = require('jade');
var app = express();



app.get('/home', function(req,res){
	app.set('view engine', 'jade');
    app.set('views', process.argv[3]);
	res.render('index', {date: new Date().toDateString()});
});




