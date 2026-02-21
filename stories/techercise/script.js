/*Main screen variables*/
$wearableTech = $("#wearableTech");
$apps = $("#apps");
$gamification = $("#gamification");
$lastpage = $("#lastpage");
$feature = $(".feature");
$homepage = $("#homepage");
$lakefillPicture = $(".lakefillPicture");
$startButton = $("#startbutton");
$nav = $("#nav");
$toAppsButton = $("#toAppsButton");
$toGamification = $("#toGamification");
$toConclusion = $("#toConclusion");
$bigvid = $(".bigvid");
$LV3 = $("#LV3");
$LV6 = $("#LV6");
$LV9 = $("#LV9");
$LV12 = $("#LV12");
$featureHome = $("#featureHome");
$arrow = $("#arrow");

/*Nav variables for jquery*/
$flag = $(".flag");
$navword = $(".navword");
$sidenav = $(".sidenav");
$wordnav = $("#wordnav");
$sideflagclass = $(".sideflagclass");

/*App Variables for jquery*/
$appIcon = $(".appIcon");
$appText = $(".appText");
$homeButton = $("#homeButton");

/*Video Variables for jquery*/
$myPlayer3 = videojs("#lakefillVid3");
$myPlayer6 = videojs("#lakefillVid6");
$myPlayer9 = videojs("#lakefillVid9");
$myPlayer12 = videojs("#lakefillVid12");

/*Gamification Video player*/
$thumb = $(".thumb");
var thumb1 = document.getElementById("thumb1");
var thumb2 = document.getElementById("thumb2");
var thumb3 = document.getElementById("thumb3");
$gamcaption = $(".gamcaption");

$(document).ready(function(){
	$appText.hide();
})

/*Main screen functions*/
$(document).ready(function(){
	$wearableTech.hide();
	$apps.hide();
	$gamification.hide();
	$lastpage.hide();
	$bigvid.hide();
	$featureHome.hide();
	$($gamcaption[1]).hide();
	$($gamcaption[2]).hide();
	$sidenav.hide();
	$($thumb[0]).toggleClass("thumbactive");

	console.log("all hidden");
})

/*Image Map*/
$(document).ready(function() {
	$("#shoes").on("mouseover", function(){
		$(".shoes").show();
	});
	$("#shoes").on("mouseout", function(){
		$(".shoes").hide();
	});

	$("#shuffle").on("mouseover", function(){
		$(".shuffle").show();
	});
	$("#shuffle").on("mouseout", function(){
		$(".shuffle").hide();
	});

	$("#shirt").on("mouseover", function(){
		$(".shirt").show();
	});
	$("#shirt").on("mouseout", function(){
		$(".shirt").hide();
	});

	$("#watch").on("mouseover", function(){
		$(".watch").show();
	});
	$("#watch").on("mouseout", function(){
		$(".watch").hide();
	});
}());

$(window).resize(function(){
   var height = $(this).height()
   $(".lakefillPicture").height(height);
   $("#allmarkers").height(height);
   $(window).resize(); //on page load
})

/*$navcircle = $(".navcircle");
var circlehome = document.getElementById("circlehome");
var circleone = document.getElementById("circleone");
var circletwo = document.getElementById("circletwo");
var circlethree = document.getElementById("circlethree");
var circlefour = document.getElementById("circlefour");

$sidenav.hover(pill,circle);

function pill(){
	$navcircle.animate({width:"130px"},"fast");
	document.getElementById("circlehome").innerHTML = "Techercise"
	document.getElementById("circleone").innerHTML = "Making Your Workouts Smarter"
	document.getElementById("circletwo").innerHTML = "Apps That Make You Move"
	document.getElementById("circlethree").innerHTML = "Exercise Turns Into a Game"
	document.getElementById("circlefour").innerHTML = "Technology & You: The Future"
}
function circle(){
	$navcircle.animate({width:"60px"},"fast");
	document.getElementById("circlehome").innerHTML = "Home"
	document.getElementById("circleone").innerHTML = "1"
	document.getElementById("circletwo").innerHTML = "2"
	document.getElementById("circlethree").innerHTML = "3"
	document.getElementById("circlefour").innerHTML = "4"
}*/

/*Nav functions*/
$flag.click(goToFeature);
$navword.click(goToFeature);
$startButton.click(goToWearableTech);
$toAppsButton.click(goToApps);
$toGamification.click(goToGamification);
$toConclusion.click(goToConclusion);
$sideflagclass.click(sideflagNav);

function sideflagNav(){
	var thisFlag = ($(this).index());
	if(thisFlag===0){
		goToWearableTech();
	}
	else if(thisFlag===1){
		goToApps();
	}
	else if(thisFlag===2){
		goToGamification();
	}
	else if(thisFlag===3){
		goToConclusion();
	}
}

$featureHome.click(goHome);
$featureHome.hover(redHome, blackHome);

function goHome() {
	$wearableTech.hide();
	$apps.hide();
	$gamification.hide();
	$lastpage.hide();
	$bigvid.hide();
	$featureHome.hide();
	$homepage.fadeTo("fast",1);
	$lakefillPicture.fadeTo("fast",1);
	$nav.animate({margin:"30% auto"},"fast").fadeTo("slow",1);
	$flag.fadeTo("fast",1);
	$($navword).css({"color":"black"});
	$sidenav.hide();
	$arrow.fadeTo("fast",1);
	$wordnav.fadeTo("fast",1);
}

function redHome(){
	$($featureHome).css({"color":"red"});
}

function blackHome(){
	$($featureHome).css({"color":"black"});
}

function goToWearableTech(){
	$homepage.hide();
	$feature.hide();
	$nav.hide();
	$featureHome.hide();
	$bigvid.hide();
	$lakefillPicture.hide();
	$LV3.fadeTo("fast",1);
	$myPlayer3.play();
	$flag.hide();
	$arrow.hide();
	$wordnav.hide();
	setTimeout(function(){
		$featureHome.fadeTo("fast",1);
		$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
		$wearableTech.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
		$($navword).css({"color":"black"});
		$sidenav.fadeTo("fast",1);
		$($navword[0]).css({"color":"red"});
	},3000);
}

function goToApps(){
	$homepage.hide();
	$feature.hide();
	$nav.hide();
	$featureHome.hide();
	$bigvid.hide();
	$lakefillPicture.hide();
	$LV6.fadeTo("fast",1);
	$myPlayer6.play();
	$flag.hide();
	$arrow.hide();
	$wordnav.hide();
	setTimeout(function(){
		$featureHome.fadeTo("fast",1);
		$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
		$apps.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
		$($navword).css({"color":"black"});
		$sidenav.fadeTo("fast",1);
		$($navword[1]).css({"color":"red"});
	},3000);
}

function goToGamification(){
	$homepage.hide();
	$feature.hide();
	$nav.hide();
	$featureHome.hide();
	$bigvid.hide();
	$lakefillPicture.hide();
	$LV9.fadeTo("fast",1);
	$myPlayer9.play();
	$flag.hide();
	$arrow.hide();
	$wordnav.hide();
	setTimeout(function(){
		$featureHome.fadeTo("fast",1);
		$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
		$gamification.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
		$($navword).css({"color":"black"});
		$sidenav.fadeTo("fast",1);
		$($navword[2]).css({"color":"red"});
	},3000);
}

function goToConclusion(){
	$homepage.hide();
	$feature.hide();
	$nav.hide();
	$featureHome.hide();
	$bigvid.hide();
	$lakefillPicture.hide();
	$LV12.fadeTo("fast",1);
	$myPlayer12.play();
	$flag.hide();
	$arrow.hide();
	$wordnav.hide();
	setTimeout(function(){
		$featureHome.fadeTo("fast",1);
		$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
		$lastpage.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
		$($navword).css({"color":"black"});
		$sidenav.fadeTo("fast",1);
		$($navword[3]).css({"color":"red"});
	},3000);
}

function goToFeature(){
	var thisFlag = ($(this).index());
	console.log(this);
	if(thisFlag===0){
		$homepage.hide();
		$feature.hide();
		$nav.hide();
		$featureHome.hide();
		$bigvid.hide();
		$lakefillPicture.hide();
		$LV3.fadeTo("fast",1);
		$myPlayer3.play();
		$flag.hide();
		$arrow.hide();
		$wordnav.hide();
		setTimeout(function(){
			$featureHome.fadeTo("fast",1);
			$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
			$wearableTech.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
			$($navword).css({"color":"black"});
			$sidenav.fadeTo("fast",1);
			$($navword[0]).css({"color":"red"});
		},3000);
	}
	else if(thisFlag===1){
		$homepage.hide();
		$feature.hide();
		$nav.hide();
		$featureHome.hide();
		$bigvid.hide();
		$lakefillPicture.hide();
		$LV6.fadeTo("fast",1);
		$myPlayer6.play();
		$flag.hide();
		$arrow.hide();
		$wordnav.hide();
		setTimeout(function(){
			$featureHome.fadeTo("fast",1);
			$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
			$apps.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
			$($navword).css({"color":"black"});
			$sidenav.fadeTo("fast",1);
			$($navword[1]).css({"color":"red"});
		},3000);
	}
	else if(thisFlag===2){
		$homepage.hide();
		$feature.hide();
		$nav.hide();
		$featureHome.hide();
		$bigvid.hide();
		$lakefillPicture.hide();
		$LV9.fadeTo("fast",1);
		$myPlayer9.play();
		$flag.hide();
		$arrow.hide();
		$wordnav.hide();
		setTimeout(function(){
			$featureHome.fadeTo("fast",1);
			$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
			$gamification.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
			$($navword).css({"color":"black"});
			$sidenav.fadeTo("fast",1);
			$($navword[2]).css({"color":"red"});
		},3000);
	}
	else if(thisFlag===3){
		$homepage.hide();
		$feature.hide();
		$nav.hide();
		$featureHome.hide();
		$bigvid.hide();
		$lakefillPicture.hide();
		$LV12.fadeTo("fast",1);
		$myPlayer12.play();
		$flag.hide();
		$arrow.hide();
		$wordnav.hide();
		setTimeout(function(){
			$featureHome.fadeTo("fast",1);
			$nav.animate({margin:"0% auto"},"fast").fadeTo("slow",1);
			$lastpage.animate({margin:"10px auto"},"fast").fadeTo("slow",1);
			$($navword).css({"color":"black"});
			$sidenav.fadeTo("fast",1);
			$($navword[3]).css({"color":"red"});
		},3000);
	}
}

/*
	for (i=0; i < $feature.length; i++){
		var sameFeature = $($feature[i]).index()-7
		if(thisFlag===sameFeature){
			console.log("almost sorta");
			$homepage.hide();
			$feature.hide();
			$nav.hide();
			$lakefillPicture.hide();
			$LV12.fadeTo("fast",1);
			$myPlayer12.play();
	setTimeout(function(){
		$nav.fadeTo("slow",1);
		$lastpage.animate({margin:"-140px auto"},"fast").fadeTo("slow",1);
	},3000);
			$homepage.hide();
			$feature.hide();
			$nav.animate({margin:"0% auto"},"fast");
			$lakefillPicture.hide();
			$($feature[i]).fadeTo("fast",1).animate({margin:"-140px auto"},"fast");
		}
	}
}
*/

/*New functions for flag nav*/

/*Functions for nav
/*$flag.hover(flagJump,flagFall);
$navword.hover(flagJump,flagFall);

function flagJump(){
	var thisFlag = ($(this).index());
	for(i=0; i < $flag.length; i++){
		var sameWord = $($flag[i]).index()
		if(thisFlag===sameWord){
		$($navword[i]).stop().css({"color":"red"});
		}
	}
}

function flagFall(){
	$(this).animate({top:"30px"},"fast");
	var thisFlag = ($(this).index());
	for(i=0; i < $flag.length; i++){
		var sameWord = $($flag[i]).index()
		if(thisFlag===sameWord){
		$($navword[i]).stop().css({"color":"black"});
		}
	}
}
*/
/*Functions for red words*/

/*Functions for iPhone*/

$appIcon.click(popUp);
$homeButton.click(goAway);

function popUp(){
	var thisIcon = ($(this).index());
	console.log("I am " + thisIcon);
	for (i=0; i < $appText.length; i++){
		var sameText = $($appText[i]).index();
			if(thisIcon===sameText){
				console.log("trying to fade " + i);
			$($appText[i]).fadeTo(500,1);
			};
	}
}

function goAway(){
	$appText.fadeTo(500,0);
	$appText.delay(500).hide();
}
/*
$thumb.hover(thumbGreyed,thumbColor);

function thumbColor(){
	$(this).fadeTo("fast",.5);
}

function thumbGreyed(){
	$(this).fadeTo("fast",1);
}
*/

$gamvideo = $("#gamvideo");
var gamvideo = document.getElementById("gamvideo");

$thumb.click(gamVideoChanger);

function gamVideoChanger(){
	var thisThumb = ($(this).index());
	for (i=0; i < $thumb.length; i++){
		if(thisThumb===0){
			gamvideo.setAttribute("src","http://www.youtube.com/embed/F4YP-hGZTuA");
			$gamcaption.hide();
			$($gamcaption[0]).fadeTo("fast",1);
			thumb0.setAttribute("class","thumb");
			thumb1.setAttribute("class","thumb");
			thumb2.setAttribute("class","thumb");
			$($thumb[0]).toggleClass("thumbactive");
		}
		else if(thisThumb===1){
			gamvideo.setAttribute("src","http://www.youtube.com/embed/O2N-5maKZ9Q");
			$gamcaption.hide();
			$($gamcaption[1]).fadeTo("fast",1);
			thumb0.setAttribute("class","thumb");
			thumb1.setAttribute("class","thumb");
			thumb2.setAttribute("class","thumb");
			$($thumb[1]).toggleClass("thumbactive");
		}
		else if(thisThumb===2){
			gamvideo.setAttribute("src","http://www.youtube.com/embed/RBLmlGaYGHg");
			$gamcaption.hide();
			$($gamcaption[2]).fadeTo("fast",1);
			thumb0.setAttribute("class","thumb");
			thumb1.setAttribute("class","thumb");
			thumb2.setAttribute("class","thumb");
			$($thumb[2]).toggleClass("thumbactive");
		}
	}
}