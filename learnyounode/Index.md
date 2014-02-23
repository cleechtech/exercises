learnyounode contents
================

1. Hello World - Write a program that prints the text "HELLO WORLD" to the console
(stdout).

2. Baby Steps - Write a program that accepts one or more numbers as command-line
arguments and prints the sum of those numbers to the console

3. My first async I/O - Write a program that uses a single asynchronous filesystem operation
to read a file and print the number of newlines it contains to the
console (stdout), similar to running `cat file | wc -l`

4. Filtered ls - Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a
directory name as the first argument to your program (e.g.
'/path/to/dir/') and a file extension to filter by as the second
argument

5. Make it modular - same as previous but using modules. The module
must export a single function that takes three arguments: the
directory name, the filter string and a callback function

6. HTTP Client - Write a program that performs an HTTP GET request to a URL provided to
you as the first command-line argument. Write the String contents of
each "data" event from the response to a new line on the console

7. HTTP Collect - Write a program that performs an HTTP GET request to a URL provided to
you as the first command-line argument. Collect all data from the
server (not just the first "data" event) and then write two lines to
the console (stdout).

The first line you write should just be an integer representing the
number of characters received from the server and the second line
should contain the complete String of characters sent by the server

8. Juggling async - you will be
provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the
URLs and print it to the console 

9. Time server - Write a TCP time server!

Your server should listen to TCP connections on port 8000. For each
connection you must write the current date & time in the format:

  YYYY-MM-DD hh:mm

10. HTTP File Server - Write an HTTP server that serves the same text file for each request
it receives

11. HTTP Uppercase - Write an HTTP server that receives only POST requests and converts
incoming POST body characters to upper-case and returns it to the
client

12. HTTP JSON API Server - Write an HTTP server that serves JSON data when it receives a GET
request to the path '/api/parsetime'

