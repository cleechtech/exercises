// site: http://tutorials.jumpstartlab.com/projects/javascript/introduction/6-object-oriented-javascript.html

// define classes
var Chart = function(context){
	this.context = context;
};

var BarChart = function(context, data){
	this.context = context;
	this.data = data;
}

Chart.prototype = {
	rectangle: function(color, x, y, width, height){
		this.context.fillStyle = color;
		this.context.fillRect(x, y, width, height);
	},
	text: function(message, color, x, y){
		this.context.font = '20px sans-serif';
		this.context.fillStyle = color;
		this.context.fillText(message, x, y);
	}
}

BarChart.prototype = {
	rectangle: Chart.prototype.rectangle,	// reference rectangle function
	bar: function(pos, value){
		this.rectangle('rgb(64, 64, 128)', 0, 20 + pos*12, value*10, 10);
	},
	draw: function(){
		for (i in this.data){
			this.bar(i, this.data[i]);
		}
	}
}

// main program
function ready(){
	var barData = [10, 15, 12, 6, 9, 25];
	var context = document.getElementById('mainCanvas').getContext('2d');
	var chart = new Chart(context);
	var barChart = new BarChart(context, barData);

	chart.rectangle('red', 10, 10, 150, 100);

	barChart.draw();

	chart.text('hello object oriented drawing', '#333333', 40, 60);
}

window.onload = ready();

//~ HOMEWORK:
//~ 
//~ On your own, convert your pie chart methods and line chart methods into classes. Once you have them set up, try some of the following challenges:
//~ 
//~ Add a color parameter to the bar chart constructor so you can set the color when you call new
//~ Next, if a color parameter is not passed in, default to black. (HINT: what is the value of color when it is not sent in to the constructor as a parameter?)
//~ Add a starting x and y to the constructor for your charts to tell it where to start drawing that chart on the screen. Then draw one of each chart on the canvas side by side.
//~ Add a setData function to one of your charts that overwrites its data attribute and re-draws itself.
//~ 
