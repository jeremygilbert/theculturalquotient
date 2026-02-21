$(function() {
$('#navigation').stop().animate({'marginLeft':'-150px'},1000);

                $('#navigation').hover( function () {
                $($(this)).stop().animate({'marginLeft':'-0px'},200);
                    },
                    function () {
                    $($(this)).stop().animate({'marginLeft':'-150px'},
                    200);
                    }
                );
            });
        </script> <!--end test-->


<!--this is the scrollbar-->

<style> .scroll-pane { overflow: auto; width: 99%; float:left; 
	}
.scroll-content { width: 2400px; height: 400px; float: left;
	}
.scroll-content-item { width: 100px; height: 100px; float: left; margin:
10px; font-size: 3em; line-height: 96px; text-align: center; 
	}
.scroll-bar-wrap { clear: left; padding: 0 4px 0 2px; margin: 0 -1px
-1px -1px;
	}
.scroll-bar-wrap .ui-slider { background: none; height: 2em; margin: 0
auto;
	}
.scroll-bar-wrap .ui-handle-helper-parent { position: relative; width:
100%; height: 100%; margin: 0 auto; 
	}
.scroll-bar-wrap .ui-slider-handle { top:.2em; height: 1.5em; 
	}
.scroll-bar-wrap .ui-slider-handle .ui-icon { margin: -8px auto 0;
position: relative; top: 50%; 
	}
	}
#timeline{
	width: 700px; height: 300px;
	}
	}
<!--this is the hover--> li { color: black; } li:hover {color: #24B0BF;}
li:hover {cursor: pointer;} <!--this ends the hover-->

</style> <script> $(function() {
//scrollpane parts
var scrollPane = $( ".scroll-pane" ), scrollContent = $(
".scroll-content" );

//build slider
var scrollbar = $( ".scroll-bar" ).slider({ slide: function( event, ui )
{ if ( scrollContent.width() > scrollPane.width() ) { scrollContent.css(
"margin-left", Math.round( ui.value / 100 * ( scrollPane.width() -
scrollContent.width() ) ) + "px" );
} else {
scrollContent.css( "margin-left", 0 );
}
}}
});
//append icon to handle
var handleHelper = scrollbar.find( ".ui-slider-handle" )
.mousedown(function() { scrollbar.width( handleHelper.width() );
})
.mouseup(function() { scrollbar.width( "50%" );
})
.append( "<span class='ui-icon ui-icon-grip-dotted-vertical'></span>" )
.wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
//change overflow to hidden now that slider handles the scrolling
scrollPane.css( "overflow", "hidden" );
//size scrollbar and handle proportionally to scroll distance
function sizeScrollbar() { var remainder = scrollContent.width() -
scrollPane.width(); var proportion = remainder / scrollContent.width();
var handleSize = scrollPane.width() - ( proportion * scrollPane.width()
); scrollbar.find( ".ui-slider-handle" ).css({ width: handleSize,
"margin-left": -handleSize / 2
});
handleHelper.width( "" ).width( scrollbar.width() - handleSize );
}
//reset slider value based on scroll content position
function resetValue() { var remainder = scrollPane.width() -
scrollContent.width(); var leftVal = scrollContent.css( "margin-left" )
=== "auto" ? 0 : parseInt( scrollContent.css( "margin-left" ) ); var
percentage = Math.round( leftVal / remainder * 100 ); scrollbar.slider(
"value", percentage );
}
//if the slider is 100% and window gets larger, reveal content
function reflowContent() { var showing = scrollContent.width() +
parseInt( scrollContent.css( "margin-left" ), 10 ); var gap =
scrollPane.width() - showing; if ( gap > 0 ) { scrollContent.css(
"margin-left", parseInt( scrollContent.css( "margin-left" ), 10 ) + gap
);
}
}}
//change handle position on window resize
$( window ).resize(function() { resetValue(); sizeScrollbar();
reflowContent();
});
//init scrollbar size
setTimeout( sizeScrollbar, 5 );//safari wants a timeout
});
}
}
}
//switching the content out
$(document).ready(function(){ 
	$('#chalkboard').click(function(){
	$('#one').show(); 
	$('#three').hide(); 
	$('#four').hide();
	$('#five').hide(); 
	$('#six').hide(); 
	$('#seven').hide();
	$('#eight').hide(); 
	$('#nine').hide(); 
	$('#ten').hide();
	$('#eleven').hide(); 
	$('#twelve').hide(); 
	$('#thirteen').hide();
	$('#fourteen').hide(); 
	$('#fifteen').hide(); 
	$('#sixteen').hide();
	$('#seventeen').hide(); 
	$('#eighteen').hide(); 
	$('#nineteen').hide();
	$('#twenty').hide();
	}); 
	});

$(document).ready(function(){ $('#lantern').click(function(){
$('#one').hide(); $('#three').show(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
$(document).ready(function(){ $('#stereoscope').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').show();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
$(document).ready(function(){ $('#filmProjector').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').show(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
$(document).ready(function(){ $('#radio').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').show(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#projector').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').show();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#mimeograph').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').show(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#headset').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').show(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#rule').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').show(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#skinner').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').show();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#television').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').show(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#filmstrip').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').show(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#filmstrip').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').show();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#scantron').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').show(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#computer').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').show(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#calculator').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').show();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
$(document).ready(function(){ $('#whiteboard').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').show(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#clicker').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').show(); $('#nineteen').hide();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#xo').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').show();
$('#twenty').hide();
	}); });
	
$(document).ready(function(){ $('#ipad').click(function(){
$('#one').hide(); $('#three').hide(); $('#four').hide();
$('#five').hide(); $('#six').hide(); $('#seven').hide();
$('#eight').hide(); $('#nine').hide(); $('#ten').hide();
$('#eleven').hide(); $('#twelve').hide(); $('#thirteen').hide();
$('#fourteen').hide(); $('#fifteen').hide(); $('#sixteen').hide();
$('#seventeen').hide(); $('#eighteen').hide(); $('#nineteen').hide();
$('#twenty').show();
	}); });