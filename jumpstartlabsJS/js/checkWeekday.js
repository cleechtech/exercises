// Write a function that determines if it is a weekend day (Saturday/Sunday). If it is, output "Relaxation time!" else, "Aww Work!"

function checkWeekday(){
	var today = new Date().getDay(); // returns 0 - 6
	
	if ( today == 6 || today == 0)
		console.log('Relaxation time!');
	else
		console.log('Aww Work!');
}

checkWeekday();
