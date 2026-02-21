$(document).ready(function () {
	$(window).scroll(function() {
		if ($(window).scrollTop() > $('#vidintro').height()) {
			$('.nav').show();
		}
		else {
			$('.nav').hide();
		}
	});
	
	$("#myChart").bind('inview', function (event, visible) {
		if (visible == true) {
			// Start the animation
			var canvas = document.getElementById("myChart").getContext("2d");
			var myNewChart = new Chart(canvas).Pie(data, options)
		} 
	});
});

var iframe = $('#intro')[0],
    player = $f(iframe),
    status = $('.status');


// When the player is ready, add listeners for pause, finish, and playProgress
player.addEvent('ready', function() {
    status.text('ready');
    
    player.addEvent('pause', onPause);
    player.addEvent('finish', onFinish);
    player.addEvent('playProgress', onPlayProgress);
});

// Call the API when a button is pressed
$('button').bind('click', function() {
    player.api($(this).text().toLowerCase());
});

function onPause(id) {
    status.text('paused');
}

function onFinish(id) {
    status.text('finished');
}

function onPlayProgress(data, id) {
    status.text(data.seconds + 's played');
}


//Pause the video when you click SKIP VIDEO.
$("#pause").click(function() {
  player.api ("pause");
});


//Toggling the "read more" text on the grind pictures with the descriptions. GRIND TEXT.
function change_text() {
   var button = document.getElementById("espressoToggleText");
   if (button.innerHTML === "MORE") {
       button.innerHTML = "LESS";
   }
   else {
       button.innerHTML = "MORE";
   }
};

$(document).ready(function () {
    $("#espressoToggleText").click(function () {
        console.log("changing text for espresso");
        $("#espressoText").slideToggle();
           });
       });

function changeFineText() {
   var button = document.getElementById("fineToggleText");
   if (button.innerHTML === "MORE") {
       button.innerHTML = "LESS";
   }
   else {
       button.innerHTML = "MORE";
   }
};

$(document).ready(function () {
    $("#fineToggleText").click(function () {
        console.log("fine function called");
        $("#fineText").slideToggle();
           });
       });

function changeMediumText() {
   var button = document.getElementById("mediumToggleText");
   if (button.innerHTML === "MORE") {
       button.innerHTML = "LESS";
   }
   else {
       button.innerHTML = "MORE";
     }
   };


$(document).ready(function () {
    $("#mediumToggleText").click(function () {
        $("#mediumText").slideToggle();
           });
       });

function changeCoarseText() {
   var button = document.getElementById("coarseToggleText");
   if (button.innerHTML === "MORE") {
       button.innerHTML = "LESS";
   }
   else {
       button.innerHTML = "MORE";
   }
};

$(document).ready(function () {
    $("#coarseToggleText").click(function () {
        $("#coarseText").slideToggle();
           });
       });

