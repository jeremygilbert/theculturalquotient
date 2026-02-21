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