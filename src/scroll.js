// скролл от стартовой страницы до "о нас" Jquery
$(".b-start__arrow").on("click", function(event) {
  var target = $(".b-about");

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

// $(".b-start__btn").on('click', function(event) {

//   var target = $(".b-about");

//   if( target.length ) {
//       event.preventDefault();
//       $("html, body").stop().animate({
//           scrollTop: target.offset().top
//       }, 1000);
//   }
// });
