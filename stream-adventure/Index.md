1. Beep Boop - output 'beep boop' to the console

2. Meet Pipe - You will get a file as the first argument to your program (process.argv[2]). Use `fs.createReadStream()` to pipe the given file to `process.stdout`.

3. Input Output - Take data from `process.stdin` and pipe it to `process.stdout`. With `.pipe()`. `process.stdin.pipe()` to be exact.

4. Transform - Convert data from `process.stdin` to upper-case data on `process.stdout` using the `through` module.

5. Lines - convert even-numbered lines to upper-case and odd-numbered lines to lower-case

6. Concat - You will be given text on process.stdin. Buffer the text and reverse it using the `concat-stream` module before writing it to stdout

7. HTTP Server - write an http server that uses a through stream to write back the request stream as upper-cased response data for POST requests

8. HTTP Client - Send an HTTP POST request to http://localhost:8000 and pipe process.stdin into it. Pipe the response stream to process.stdout

9. Websockets - write some browser code that uses the websocket-stream module to print the string "hello\n"

10. HTML Stream - Your program will get some html written to stdin. Convert all the inner html to upper-case for elements with a class name of "loud". You can use `trumpet` and `through` to solve this adventure

11. Crypt - Your module will be given a passphrase on `process.argv[2]` and 'aes256' encrypted data will be written to stdin. Simply decrypt the data and stream the result to process.stdout

12. Secretz - An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
challenge, for each file in the tar input, print a hex-encoded md5 hash of the
file contents followed by a single space followed by the filename, then a
newline.
