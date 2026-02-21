var data = [
	{
		value: 28,
		color:"#994F34"
	},
	{
		value : 415,
		color : "#A4BA68"
	},
		
]

var options = {
	//Boolean - Whether we should show a stroke on each segment
	segmentShowStroke : true,
	
	//String - The colour of each segment stroke
	segmentStrokeColor : "#fff",
	
	//Number - The width of each segment stroke
	segmentStrokeWidth : 2,
	
	//Boolean - Whether we should animate the chart	
	animation : true,
	
	//Number - Amount of animation steps
	animationSteps : 100,
	
	//String - Animation easing effect
	animationEasing : "easeOutBounce",
	
	//Boolean - Whether we animate the rotation of the Pie
	animateRotate : true,

	//Boolean - Whether we animate scaling the Pie from the centre
	animateScale : false,
	
	//Function - Will fire on animation completion.
	onAnimationComplete : null
}

var canvas = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(canvas).Pie(data, options);

