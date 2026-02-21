var data = {
	labels : ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
	datasets : [
		{
			fillColor : "#C2FC9C",
			strokeColor : "82FA32",
			pointColor : "82FA32",
			pointStrokeColor : "#fff",
			data : [20, 24, 28, 82, 89, 314, 339]
		},
	]
}

var options = {
	bezierCurve : true,
	scaleOverride : true,
	scaleSteps : 7,
	scaleStepWidth: 50,
	scaleStartValue: 0
}

var canvas = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(canvas).Line(data, options);