 $(document).on('ready', function() {

      $('.intro-section').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        mobileFirst: true,
        arrows: true,
        autoplay:true,
        adaptiveHeight: true
      });
      $(window).on('resize', function() {
        $('.intro-section').slick('resize');
    });
    });
