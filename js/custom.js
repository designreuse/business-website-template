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
        $('.navbar-brand img').css({
          'height': '50px',
          'padding-top': '0px'
        });
        $('navbar-nav > li > a').css({
          'padding-top': '15px'
        })
      }

  });
});

$(document).ready(function(){
  'use strict';
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  'use strict';
  $('.navbar-nav li a').click(function(){
    ('.navbar-nav li a').parent().removeClass("active");
    this.parent().removeClass("active");
  });
});

$(document).ready(function(){
  console.log("hightlight")
  'use strict';
  $(window).scroll(function(){
    $("section").each(function(){
      'use strict';
      var sec = $(this).attr("id");
      var height = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;
    if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + height) {
        $(".navbar-nav li a[href='#"+ sec +"']").parent().addClass("active");
        } else {
        $(".navbar-nav li a[href='#"+ sec +"']").parent().removeClass("active");
      }
    });
  });
});

$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto:true,
    adaptiveHeight: true,
    minSlide:1,
    maxSlides:3,
    slideMargin: 100
  });
});
