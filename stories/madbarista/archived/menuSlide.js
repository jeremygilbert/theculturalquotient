$(document).ready(function() {

 $('.navSide').hover(slideOut, slideBack);

}
);

function slideOut() {
   $(this).animate({'marginLeft':'-0.2%'},200, "swing");
  }
  
function slideBack() {
   $(this).animate({'marginLeft':'-9%'},200, "swing");
  }

