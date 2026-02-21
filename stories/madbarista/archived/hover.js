$(function() {
    $('#mouseoverimgs')
    .mouseenter(function() {
        $('#').fadeOut('slow');
    })
    .mouseleave(function() {
        $('#i2').fadeIn('slow');
    });  
});