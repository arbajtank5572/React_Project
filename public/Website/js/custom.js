(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar").headroom();

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // $(".slick-slideshow").slick({
  //   autoplay: true,
  //   infinite: true,
  //   arrows: false,
  //   fade: true,
  //   dots: true,
  // });

  // $(".slick-testimonial").slick({
  //   arrows: false,
  //   dots: true,
  // });
})(window.jQuery);
