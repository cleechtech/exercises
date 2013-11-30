// An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
// challenge, for each file in the tar input, print a hex-encoded md5 hash of the
// file contents followed by a single space followed by the filename, then a
// newline.


var crypto = require('crypto'),
    zlib = require('zlib'),
    tar = require('tar'),
    through = require('through'),
    parser = tar.Parse();

function onEntry(entry) {
    if(entry.type !== 'File') {
        return;
    }

    function write(data) {
        this.queue(data.toString() + ' ' + entry.path + '\n');
    }

    entry
        .pipe(crypto.createHash('md5', { encoding : 'hex' }))
        .pipe(through(write))
        .pipe(process.stdout);
}

parser.on('entry', onEntry);

var cipher = process.argv[2],
    passphrase = process.argv[3];

process.stdin
    .pipe(crypto.createDecipher(cipher, passphrase))
    .pipe(zlib.createGunzip())
    .pipe(parser);
