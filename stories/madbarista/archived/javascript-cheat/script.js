/*This is a JavaScript file*/

//ensuring no code is read before the document is fully loaded and ready to go!
$(document).ready(function(){

//----=========VARIABLES=========----//
//----Establishing contact with HTML. Are you there, HTML?----//

	//JS variable
		var JSdiv = document.getElementById("magical-div");
		var outerDiv = document.getElementById("outer-div");
	//jQ variable
		$magicalDiv = $("#magical-div");
		$outerDiv = $("#outer-div");


//----=========MAGIC=========----//
//----uncomment these sections to see the magical div go!----//



//HIDE 
$magicalDiv.click(function(){
	$magicalDiv.hide();
});


/*
//SHOW 
$magicalDiv.click(function(){
	$magicalDiv.show();
	console.log("You see no change because the magical div is already visible. Try showing a hidden object!");
});
*/

/*
//FADES
$magicalDiv.click(function(){
	//$magicalDiv.fadeOut();
	//$magicalDiv.fadeIn();
	//$magicalDiv.fadeTo("slow", 0.5);
	//$magicalDiv.fadeTo("slow", 0.5, function(){
	//		console.log("Fading then calling a function!");
	//	});
	
});
*/


/*
//ADDING A CLASS
$magicalDiv.click(function(){
	$magicalDiv.addClass("red");
});
*/

/*
//TOGGLING A CLASS
$magicalDiv.click(function(){
	$magicalDiv.toggleClass("red");
	console.log("click me again! and again!");
});
*/


/*
//CREATING HTML
$magicalDiv.click(function(){
	$outerDiv.html("<p>I became a paragraph!</p>");
	//$magicalDiv.html("<p>I now contain a paragraph!</p>");
});
*/

/*
//MODIFYING CSS
$magicalDiv.click(function(){
	$magicalDiv.height("500");
	$magicalDiv.width("500");
	$magicalDiv.css("background-color","red");
	$magicalDiv.css("border-radius","50px");
	
});
*/


/*
//ANIMATION BY HAND
$magicalDiv.click(function(){
	$magicalDiv.animate({
		width: "500px",
		opacity: 0.4,
		marginLeft: "0.6in",
		}, 1500 );
});
*/

/*
//SLIDING, MOUSE ENTER EVENT
$outerDiv.mouseenter(function(){
	//$magicalDiv.hide();
	//$magicalDiv.slideDown();
	$magicalDiv.slideUp();
});
*/

/*
//APPENDING HTML
$magicalDiv.click(function(){
	$outerDiv.append("<h1>What's the difference between .append and .html? Hmm...</h1>");
	//making it clickable only once...
	//$magicalDiv.off();
});
*/




//closing the document.ready function
});