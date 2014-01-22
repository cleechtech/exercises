// Given two int values, a and b, return true if either one is 7. Or if their sum or difference is 7.

function checkSeven(a, b){
	if (a === 7 || b === 7)
		return true
	else if (a + b === 7 || a - b === 7 || b - a === 7)
		return true
	else
		return false
}

console.log(checkSeven(3,7));
