var prev = 0;
var $window = $(window);
var nav = $('#nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('navhide', scrollTop > prev);
  prev = scrollTop;
    $('.buttondropdown').removeClass('buttonDropActive');
    $('.dropcontents').removeClass('dropperActive');
    $('.block').removeClass('blockActive');
});