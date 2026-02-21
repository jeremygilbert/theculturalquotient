/////////////////VARIABLE DEFINITIONS////////////////

//this is for navigation
var $container = $("#nav-container");
var $navPicture = $("#navBag");
var $navDiv = $(".nav1");
var aliciaName = document.getElementById("aliciawhite");
var zachName = document.getElementById("zachglasser");




/////////////////LISTENERS//////////////////////////

$container.hover(expand,collapse);
$('.no-decoration').hover(changeColor,returnColor);
$('.highlight').hover(turnGray,turnBlack);
aliciaName.addEventListener("click",playAudio);
zachName.addEventListener('click',playAudio);



/////////////////FUNCTIONS//////////////////////////

function expand() {
	$navPicture.animate({marginLeft: '+=150px'});
	$navDiv.animate({marginLeft: '+=240px'});
}

function collapse() {
	$navPicture.animate({marginLeft: '-=150px'});
	$navDiv.animate({marginLeft: '-=240px'});
}

function changeColor() {
	this.style.color='rgba(46,28,13,1)';
	this.style.fontWeight='900';
}

function returnColor() {
	this.style.color='rgba(46,28,13,.8)';
	this.style.fontWeight='400';
}

function turnGray() {
	this.style.color='rgba(0,0,0,0.5)';
	var playerBoxy = document.getElementById(this.id + "Player");
	playerBoxy.style.backgroundColor='rgba(97,235,0,0.5)';
}

function turnBlack() {
	this.style.color='rgb(0,0,0)';
	var playerBoxy = document.getElementById(this.id + "Player");
	playerBoxy.style.backgroundColor='transparent';
}

function playAudio() {
	var playerBoxy = document.getElementById(this.id + "Player");
	playerBoxy.style.backgroundColor='rgba(97,235,0,0.5)';
}