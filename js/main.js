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


  // ----- MOBILE Nav -----

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if ( icon.hasClass('ion-navicon-round') ) {
      icon.removeClass('ion-navicon-round');
      icon.addClass('ion-close-circled');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-circled');
    }
  });

  // ----- END MOBILE Nav -----


  // ----- Google Map (gmaps.js) -----

  var map = new GMaps({
    div: '.map',
    lat: -33.8688,
    lng: 151.2240,
    zoom: 15
  });

  map.addMarker({
    lat: -33.8670,
    lng: 151.2110,
    title: 'Sydney',
    infoWindow: {
      content: '<p>SamFood Head Office</p>'
    }
  });

  map.drawOverlay({
    lat: -33.8670,
    lng: 151.2110,
    content: '<div class="overlay" style="background-color: #ffffff; padding: 5px 10px; border: 0.4px solid #222222; border-radius: 30px;">SamFood</div>'
  });

  // ----- END Google Map -----


}); // END.ready function
