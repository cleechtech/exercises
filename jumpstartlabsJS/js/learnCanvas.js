var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var barData = [10, 15, 12, 6, 9, 25];
var pieData = [.1, .1, .5, .3]; // decimals as percentages
var lineData = [4, 7, 2, 4, 11];

window.onload = ready();


// function definitions

function ready(){
	drawRect('rgba(32, 64, 128, 0.5)', 50, 40, 100, 75);
	drawRect('#333333', 200, 10, 50, 110);
	
	// bar chart
	for (i in barData){
		drawBar(i, barData[i]);
	} 
	
	drawText('Hello canvas!', 'FF0000', 45, 30);
	
	// pie chart
	var progress = 0;
	for (i in pieData){
		drawSlice(progress, pieData[i]);
		progress += pieData[i];
	}
	
	// line graph
	for (i in lineData){
		drawLine(i, lineData[i]);
	}
}

function drawRect(color, x, y, width, height){
	context.fillStyle = color;
	context.fillRect(x, y, width, height);
}

function drawText(message, color, x, y){
	context.font = '30px sans-serif';
	context.fillStyle = color;
	context.fillText(message, x, y);
}

function drawBar(pos, value){
	drawRect('rgb(64, 64, 128)', 0, 20 + pos*12, value*10, 10);
}

function drawSlice(progress, value){
	var centerX = 100;
	var centerY = 100;
	context.beginPath();	// begin a series of commands, called a path
	
	context.fillStyle = 'hsl(' + (progress * 360) + ', 80%, 60%)';
	context.moveTo(centerX, centerY); 	// center chart
	
	// arc( center x, center y, radius from center, starting radians, ending radians )
	// radians measure progress around a circle. Instead of 0 to 360 it's 0 to 2*Math.PI
	context.arc(centerX, centerY, 40, progress * 2 * Math.PI, (progress + value) * 2 * Math.PI);
	
	context.fill();		// draw path
}

function drawLine(x, y){
	context.strokeStyle = 'hsl(40, 80%, 60%)'; // color
	context.lineWidth = 1.5; 				   // line width
	context.lineTo(x * 50, 100 - y * 10);	   // draws it all messed up .............
	context.stroke();
}





