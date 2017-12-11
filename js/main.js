console.log("js file connected");


$(document).ready(function() {

  // ----- Sticky Navigation -----

  // $('#features .js-features').waypoint(function(direction) {
  //   if (direction == "down") {
  //       $('.navbar-fixed-top').addClass('sticky');
  //   } else {
  //       $('.navbar-fixed-top').removeClass('sticky');
  //   }
  // }, {
  //   offset: '60px;'
  // });

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



}); // END.ready function
