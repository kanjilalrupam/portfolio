
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
});

var typed = new Typed(".typing",{
  strings: ["Student","Developer","Gamer","Rider"],
  typeSpeed: 100,
  backSpeed: 60,
loop: true});
var typed1 = new Typed(".typing1",{
  strings: ["Student","Developer","Gamer","Rider"],
  typeSpeed: 100,
  backSpeed: 60,
loop: true});

ScrollReveal().reveal('.revealing',{delay:200});
ScrollReveal().reveal('.revealing-text',{delay:400});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});