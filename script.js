function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".section").offset().top;
    var header_height = $(".header-section").outerHeight();
    $(".section-wrap").css({ "margin-top": header_height });
    $(".header").css({ height: header_height - scroll_top });
}


$(document).ready(function() {
    parallax_height();
    checkElementLocation();
    var delay = 1000;
    $('.fadeinimage').each( function(i){
        
        $(this).animate({'opacity':'1'},delay);
        
    }); 

    $('.fadeintext').each( function(i){

        $(this).delay(delay*0.5).animate({'opacity':'1'},delay);
                
    }); 
});

$(window).scroll(function() {
    parallax_height();
    checkElementLocation();
});
$(window).resize(function() {
    parallax_height();
});


function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.section').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.offset().top;// + $that.outerHeight();
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity':'1'},2000);
      }
    });
  }

  // if in viewport, show the animation
  checkElementLocation();
  
