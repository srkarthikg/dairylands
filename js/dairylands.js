 $(document).on('ready', function() {
  /*$('div.top').click(function() {
    $('html, body').animate({
      scrollTop: $("div.middle").offset().top
    }, 1000)
  });*/
  var href = $(this).attr('href');
  $(href).bind('click', function(e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 'slow', function() {
        location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });

    return false;
});

    /*$('.intro-section').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        mobileFirst: true,
        arrows: true,
        autoplay:true
      });*/
      $('.owl-carousel').owlCarousel({
        items: 1,
        autoHeight: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop:true
      });
    });
