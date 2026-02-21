var explanation = document.getElementById("explanation");
var digitize = document.getElementById("digitize");
var continue1 = document.getElementById("continue1");
var nutty = document.getElementById("nutty");
var hugo = document.getElementById("hugo");
var digitize2 = document.getElementById("digitize2");
var crater = document.getElementById("crater");
var closebuttonjive = document.getElementById("closebuttonjive");


digitize2.addEventListener("mouseover", showDigitize, false);
digitize2.addEventListener("mouseout", removeExplanation, false);
continue1.addEventListener("mouseover", showContinue1, false);
continue1.addEventListener("mouseout", removeExplanation, false);
hugo.addEventListener("mouseover", showHugo, false);
hugo.addEventListener("mouseout", removeExplanation, false);
nutty.addEventListener("mouseover", showNutty, false);
nutty.addEventListener("mouseout", removeExplanation, false);
crater.addEventListener("mouseover", showCrater, false);
crater.addEventListener("mouseout", removeExplanation, false);
closebuttonjive.addEventListener("mouseout", closeStory, false);



function showDigitize(){
	console.log("hover");
	explanation.innerHTML = "<p>THIS IS WHAT DIGITIZE DOES</p>";
};

function showContinue1(){
	console.log("hover");
	explanation.innerHTML = "<p>THIS IS WHAT CONTINUE DOES</p>";
};

function showHugo(){
	console.log("hover");
	explanation.innerHTML = "<p>THIS IS WHAT HUGO DOES</p>";
};


function showCrater(){
	console.log("hover");
	explanation.innerHTML = "<p>THIS IS WHAT CRATER DOES</p>";
};

function showNutty(){
	console.log("hover");
	explanation.innerHTML = "<p>THIS IS WHAT NUTTY DOES</p>";
};
function removeExplanation(){
	explanation.innerHTML = "";
};


function closeStory(){
console.log("close");
$storybox.empty();
storybox.setAttribute("class", "storyboxHidden");
}