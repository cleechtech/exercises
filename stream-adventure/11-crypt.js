var crypto = require('crypto');
var passphrase = process.argv[2];

var stream = crypto.createDecipher('aes256', passphrase);

process.stdin.pipe(stream).pipe(process.stdout);




// official solution
//~ var crypto = require('crypto');
    //~ process.stdin
        //~ .pipe(crypto.createDecipher('aes256', process.argv[2]))
        //~ .pipe(process.stdout)
    //~ ;
