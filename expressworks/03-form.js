// Write a route ('/form') that processes HTML form input 
// (<form><input name="str"/></form>) and prints backwards the str value.
var express = require('express')
var connect = require('jade')
var app = express()

app.use(express.urlencoded())

app.get('/form', function(req,res){
	res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
