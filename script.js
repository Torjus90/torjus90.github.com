function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".section").offset().top;
    var header_height = $(".header-section").outerHeight();
    $(".section-wrap").css({ "margin-top": header_height });
    $(".header").css({ height: header_height - scroll_top });
}


$(document).ready(function() {
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
});
$(window).resize(function() {
    parallax_height();
});

