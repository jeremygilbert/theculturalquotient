//code for character lineup

function charInfo(number){

	for (var i = 0; i<9; i++){
		var selector = "#info"+i;
		$(selector).hide();
	}

	var curr_info_selector = "#info" + number;
	$(curr_info_selector).show();

}

//code for slideshow

var photo = document.getElementById("photo");
var caption = document.getElementById("caption");

var photonumb = 1;

var goForward = function(){
	//$("picture").append(photoArray["picture"]);
	//$("caption").append(captionArray["caption"]);
	var curr_caption_selector = "#caption" + photonumb;

	console.log("pics/legal1.png");
	 console.log(photonumb);
	 if (photonumb < 10){
	  photonumb += 1;
	 } 
	 
	 photo.setAttribute("src", "pics/legal" + photonumb + ".jpg");
	 
	 console.log(curr_caption_selector);
	 var next_caption_selector = "#caption" + photonumb;
	 
	 $(curr_caption_selector).hide();
	 $(next_caption_selector).show();
}	 
	 
var goBack = function(){
	//$("picture").append(photoArray["picture"]);
	//$("caption").append(captionArray["caption"]);
		var curr_caption_selector = "#caption" + photonumb;

	
	console.log("pics/legal1.png");
	 console.log(photonumb);
	 if (photonumb > 1){
	 photonumb -= 1; 
	}
	 
	 photo.setAttribute("src", "pics/legal" + photonumb + ".jpg"); 
	 
	var prev_caption_selector = "#caption" + photonumb;
	
	$(curr_caption_selector).hide();
	 $(prev_caption_selector).show();	
}