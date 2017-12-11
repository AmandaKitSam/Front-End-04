console.log("js file connected");


$(document).ready(function() {

  // ----- Sticky Navigation -----

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll); // Call the var
    if (scroll >= 900) {
      $('.navbar-fixed-top').addClass('sticky');
    } else {
      $('.navbar-fixed-top').removeClass('sticky');
    }
  });

  // ----- END Sticky Navigation -----


  // ----- Scroll on Buttons -----

  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--features').offset().top}, 1000);
  });

  // ----- END Scroll on Buttons -----


  // ----- Navbar Smooth Scroll -----

  var scroll = new SmoothScroll('a[href*="#features"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 0 // Speac on the top
  });
  var scroll = new SmoothScroll('a[href*="#steps"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 0
  });
  var scroll = new SmoothScroll('a[href*="#locations"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 50
  });
  var scroll = new SmoothScroll('a[href*="#form"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 0
  });

  // ----- END Navbar Smooth Scroll -----

}); // END.ready function
