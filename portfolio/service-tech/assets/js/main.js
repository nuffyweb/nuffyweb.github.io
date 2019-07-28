
$(window).on('load', function () {
    $('.preloader').delay(2500).fadeOut('slow');
});



$(document).ready(function() {
    $('.anim-block').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 250,
        callbackFunction: function(){
            $('.fact__counter--like').animationCounter({
                start: 0,
                end: 50,
                step: 1,
                delay: 50
            });
            $('.fact__counter--code').animationCounter({
                start: 0,
                end: 38,
                offset: 500,
                delay: 90
            });
            $('.fact__counter--time').animationCounter({
                start: 0,
                end: 40,
                delay: 90
            });
            $('.fact__counter--coffee').animationCounter({
                start: 0,
                end: 26,
                delay: 90
            });
        }
    });

    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        loop:true,
        pagination:true

    });

    $(function() {
 
        $(window).scroll(function() {
         
        if($(this).scrollTop() != 0) {
         
        $('.to__top').fadeIn();
         
        } else {
         
        $('.to__top').fadeOut();
         
        }
         
        });
         
        $('.to__top').click(function() {
         
        $('body,html').animate({scrollTop:0},800);
         
        });
         
        });
});