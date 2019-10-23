import "./1-start.scss";
import "./2-hello.scss";
import "./3-about.scss";
import "./4-feature.scss";
import "./5-submit.scss";
import "./6-services.scss";
import "./7-impressed.scss";
import "./8-portfolio.scss";
import "./9-team.scss";
import "./10-loved.scss";
import "./11-testimonials.scss";
import "./12-latest.scss";
import "./13-price.scss";
import "./14-subscribe.scss";
import "./15-contacts.scss";
import "./16-map.scss";
import "./17-follow.scss";
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