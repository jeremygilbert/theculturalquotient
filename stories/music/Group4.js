var $preview = $(".thumber");
$preview.hover(fadeOut,fadeIn);
function fadeOut () {
	$(this).fadeTo("fast",0.25);
}
function fadeIn () {
	$(this).fadeTo("fast",1);
}
var photo = document.getElementById("photo");
var thumb1 = document.getElementById("Ultra");
var thumb2 = document.getElementById("EDCDJ");
var thumb3 = document.getElementById("SpringAwakening");
var thumb4 = document.getElementById("UltraPeople");
var thumb5 = document.getElementById("Bracelets");

var nextButton = document.getElementById("forward");
var prevButton = document.getElementById("backward");


var $photo = $("#photo");

nextButton.addEventListener("click",fadePhoto);
prevButton.addEventListener("click",fadePhoto);
thumb1.addEventListener("click",showPhoto1);
thumb2.addEventListener("click",showPhoto2);
thumb3.addEventListener("click",showPhoto3);
thumb4.addEventListener("click",showPhoto4);
thumb5.addEventListener("click",showPhoto5);



function fadePhoto(){
    if(this.id==="forward"){
		$photo.fadeTo("slow",0, changePhoto);}
	else{
		$photo.fadeTo("slow",0, backPhoto);	}
	}

function showPhoto1(){
	photo.setAttribute("src","http://b-i.forbesimg.com/darrenheitner/files/2013/04/ultra-music-festival.jpg");
	}
	
function showPhoto2(){
	photo.setAttribute("src","http://breathecast.christianpost.com/data/images/full/8168/electric-daisy-carnival.jpg");
	}

function showPhoto3(){
	photo.setAttribute("src","http://www.springawakeningfestival.com/images/img/2013/main_image_2.jpg");
	}
	
function showPhoto4(){
	photo.setAttribute("src","http://farm9.staticflickr.com/8110/8568198449_413e9ee21c_b.jpg");
	}
	
function showPhoto5(){
	photo.setAttribute("src","http://blogs.miaminewtimes.com/cultist/StreetFashion%C2%A9%20WFK08_034.JPG");
	}
	
	

function changePhoto(){
	var source = photo.getAttribute("src");
	$photo.fadeTo("slow",1);
	if (source==="http://b-i.forbesimg.com/darrenheitner/files/2013/04/ultra-music-festival.jpg") {
		photo.setAttribute("src","http://breathecast.christianpost.com/data/images/full/8168/electric-daisy-carnival.jpg"); 
		}
	else if (source==="http://breathecast.christianpost.com/data/images/full/8168/electric-daisy-carnival.jpg") {
	photo.setAttribute("src","http://www.springawakeningfestival.com/images/img/2013/main_image_2.jpg");
	}
	else if (source==="http://www.springawakeningfestival.com/images/img/2013/main_image_2.jpg") {
	photo.setAttribute("src","http://farm9.staticflickr.com/8110/8568198449_413e9ee21c_b.jpg");
	}
	else if (source==="http://farm9.staticflickr.com/8110/8568198449_413e9ee21c_b.jpg") {
	photo.setAttribute("src","http://blogs.miaminewtimes.com/cultist/StreetFashion%C2%A9%20WFK08_034.JPG");
	}
	}
	
	
function backPhoto(){
	var source = photo.getAttribute("src");
	$photo.fadeTo("slow",1);
	if (source==="http://blogs.miaminewtimes.com/cultist/StreetFashion%C2%A9%20WFK08_034.JPG") {
		photo.setAttribute("src","http://farm9.staticflickr.com/8110/8568198449_413e9ee21c_b.jpg"); 
		}
	else if (source==="http://farm9.staticflickr.com/8110/8568198449_413e9ee21c_b.jpg") {
		photo.setAttribute("src","http://www.springawakeningfestival.com/images/img/2013/main_image_2.jpg"); 
		}
	else if (source==="http://www.springawakeningfestival.com/images/img/2013/main_image_2.jpg") {
	photo.setAttribute("src","http://breathecast.christianpost.com/data/images/full/8168/electric-daisy-carnival.jpg");
	}
	else if (source==="http://breathecast.christianpost.com/data/images/full/8168/electric-daisy-carnival.jpg") {
	photo.setAttribute("src","http://b-i.forbesimg.com/darrenheitner/files/2013/04/ultra-music-festival.jpg");
	}
	}
var JSdiv = document.getElementById("hidden");
var outerDiv = document.getElementById("hidden");
$magicalDiv = $("#hidden");
$outerDiv = $("#hidden");
$magicalDiv.click(function(){
	$magicalDiv.show();
});
