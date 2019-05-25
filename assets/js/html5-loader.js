$(window).on( "load", function() { //if -> page done loading
    $(".loadblock").fadeOut("fast");// -> turn off preloader
    $('.outer, .inner').slideUp();
});