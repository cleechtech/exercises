
var express = require('express')
var connect = require('path')
var app = express()

// exercise is broken, passes with below line commented out
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
