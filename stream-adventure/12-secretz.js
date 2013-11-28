// An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
// challenge, for each file in the tar input, print a hex-encoded md5 hash of the
// file contents followed by a single space followed by the filename, then a
// newline.


var crypto = require('crypto'),
zlib = require('zlib'),
tar = require('tar'),
parser = tar.Parse(), // emits 'entry' events for each file in the tar input
					  // each entry object is a readable stream
name = process.argv[2],
passphrase = process.argv[3];

var unzip = zlib.createGunzip(); // returns stream for gunzipping
crypto.createHash('md5', { encoding: 'hex' }) // to generate a stream that outputs a hex md5 hash for the content written to it
parse.on('entry', function(e){
		
});

// `entry.type` is the kind of file ('File', 'Directory', etc)
// `entry.path` is the file path

process.stdin.pipe(unzip)
