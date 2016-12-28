$(document).ready(function(){
  console.log("ready")
  "use strict";
  $(window).scroll(function(){
    console.log("scroll")
    "use strict";

    if($(window).scrollTop() < 80 ) {
        $('.navbar').css({
          'margin-top': '-100px',
          'opacity': '0'
        });

        $('.navbar-default').css({
          'background-color': 'rgba(59,59,59,0)'
        });

      } else {
        $('.navbar').css({
          'margin-top': '0px',
          'opacity': '1'
        });

        $('.navbar-default').css({
          'background-color': 'rgba(59,59,59,0.85)',
          'border-color': '#444'
        });
      }
  });
});
