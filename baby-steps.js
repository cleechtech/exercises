// sum command line arguments

var sum = 0;

for (i = 2; i < process.argv.length; i++){
	sum += +process.argv[i]; // + turns string to number
}

console.log(sum);
