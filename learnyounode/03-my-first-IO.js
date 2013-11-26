// count number of new lines in a file

var fs = require('fs');

var file = process.argv[2];

file = fs.readFileSync(file).toString(); // readFileSync returns a Buffer

var newLines = file.split('\n');

newLines = newLines.length - 1; // has one more than # of new lines

console.log(newLines);


/* ******************
 * OFFICIAL SOLUTION
 * ******************

  var fs = require('fs')
  
  var contents = fs.readFileSync(process.argv[2])
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
  
  // note you can avoid the .toString() by passing 'utf8' as the
  // second argument to readFileSync, then you'll get a String!
  //
  // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

  *
  */

