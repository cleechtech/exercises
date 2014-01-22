
function fizzBuzz(start, stop){
	if (parseInt(start) > parseInt(stop)){
		document.write("start must be less than stop");
		return;
	}
	
	var i = start - 1;
	while (i < stop)
	{
		i++;
		if (i % 3 == 0 && i % 5 == 0){
			document.write('FizzBuzz');
		} else if (i % 3 == 0){
			document.write('Fizz');
		} else if (i % 5 == 0){
			document.write('Buzz');
		} else {
			document.write(i);
		}
	}
}

fizzBuzz(1, 100);
