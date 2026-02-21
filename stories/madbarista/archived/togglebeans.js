/*  
       $(document).ready(function () {
       console.log("document loaded");

           $("#caimg").click(function () 
           {
           		console.log("clicked image");
               $("#catext").slideToggle();
           });
       });
       
          $(document).ready(function () {

           $("#brazilimg").click(function () 
           {
           		console.log("clicked image");
               $("#braziltext").slideToggle();
           });
       });
       
          $(document).ready(function () {

           $("#eastAfricaimg").click(function () 
           {
           		console.log("clicked image");
               $("#eastAfricatext").slideToggle();
           });
       });
       
          $(document).ready(function () {

           $("#southeastAsiaimg").click(function () 
           {
           		console.log("clicked image");
               $("#southeastAsiatext").slideToggle();
           });
       });
*/




//Turning the above code into array and loops. SHOW/HIDE REGION TEXT 
 $regionText = $(".regionText");
 $regionImg = $(".regionImg");


$regionImg.click(function(){
    var regionImgNumber = $(this).index();
    for (var i = 0; i<$regionText.length; i++) {
      console.log(regionImgNumber)
      var regionTextNumber = $($regionText[i]).index();
      console.log(regionTextNumber);


      if(regionImgNumber === regionTextNumber) {
         $($regionText[i]).show();
      }
      else {
        $($regionText[i]).hide();
      }
  }
});








