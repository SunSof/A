import "./1-start.scss";
import "./2-hello.scss";
import "./3-about.scss";
import "./4-feature.scss";
import "./5-submit.scss";
import "./services-card.scss";
import "./team-card.scss";
import "./say.scss";
import "./contacts.scss";
import "./follow.scss";
import "./say-slider.scss";
import "./mixins.scss";




$(function() {
  var banner = $(".b-card--bg1-hov")

  // handle click and add class
  $(".js-open").on("click", function () {
    banner.addClass("alt")
  });

  // handle click and remove class
  $(".js-close").on("click", function () {
    banner.removeClass("alt")
  });

  $(".js-slider").slick({
    dots: true
  });

  $(".js-about-slider").slick({
    dots: true,
    arrows: false
  });

 $(".b-hello__btn-contact-us").on('click', function(event) {

    var target = $(".b-contacts__all");

    if( target.length ) {
        event.preventDefault();
        $("html, body").stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
});