console.log("js file connected");


$(document).ready(function() {

  /* For the sticky navigation */
  $('#features .js-features').waypoint(function(direction) {
    console.log("enter the area");
    if (direction == "down") {
      $('nav').addClass('.sticky');
    } else {
      $('nav').removeClass('.sticky');
    }
  }); // END.js-features.waypoint



}); // END.ready function
