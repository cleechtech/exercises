// Style your HTML from previous example with some Stylus middleware
// The path to main.styl file is provided in process.argv[3]

var express = require('express')
var connect = require('jade')
var connect = require('path')
var app = express()

app.use(require('stylus').middleware(__dirname + '/public'));


app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])

