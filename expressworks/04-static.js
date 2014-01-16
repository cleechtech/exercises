// Apply static middleware to serve index.html file without any routes. 
// The index.html file is provided and usable via process.argv[3]

var express = require('express')
var connect = require('path')
var app = express()

// exercise is broken, passes with below line commented out
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
