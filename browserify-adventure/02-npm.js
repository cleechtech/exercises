// `require('uniq')` returns a `uniq(xs)` function that removes duplicate
// items from an array input `xs`.

// For this level, use `prompt()` to fetch a string. Split the string that
// `prompt()` returns by commas (`str.split(',')` returns a separated array of
// strings) and run this array through `uniq()` to discard repeated items.
// Use `console.log()` to print the resulting uniq array.

// Compile your program with `browserify` and pipe the bundle into
// `browserify-adventure verify` like this:
//   browserify main.js | browserify-adventure verify
// or run it like this:
// browserify main.js | browserify-adventure run

var uniq = require('uniq');
var input = prompt('Enter a list separated by commas');

var splitted = input.split(',');

console.log(uniq(splitted))