;(function($) {

  $(document).ready(function () {
    $('.js-gallery').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: true,
      slidesToShow: 1,
      focusOnSelect: true
    });
  });

})(jQuery);
