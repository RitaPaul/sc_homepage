(function ($) {
    'use strict';
    //      Slick
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor:'.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'

        });


     $('.team-slider').slick({
        
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        slide: 'div',
        dots: false,
        centerPadding: '30px',
        autoplay: true,
        centerMode: true,
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',



       
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
        arrows:false,
      }
    }
]});
    
    }
    //  ScrollUp 
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }
    //  Counter
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }
    var $window = $(window);
    if ($window.width() > 767) {
        new WOW().init();
    }
    //  Sticky
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
            
           
        } else {
            $('.header_area').removeClass('sticky slideInDown');
        }
    });
    
})(jQuery);
   $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
      });

function on(){

    var x= window.innerWidth;
    if (window.innerWidth > 575){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.getElementById("scrollUp").style.display = "none";
    document.getElementsByClassName('slick-arrow')[0].style.display = "none";
    document.getElementsByClassName('slick-arrow')[1].style.display = "none";
    document.getElementsByClassName('slick-arrow')[2].style.display = "none";
    document.getElementsByClassName('slick-arrow')[3].style.display = "none";
}else if (window.innerWidth < 576){
    document.getElementById("header").style.display = "block";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("scrollUp").style.display = "block";
    document.getElementsByClassName('slick-arrow')[0].style.display = "block";
    document.getElementsByClassName('slick-arrow')[1].style.display = "block";
    document.getElementsByClassName('slick-arrow')[2].style.display = "block";
    document.getElementsByClassName('slick-arrow')[3].style.display = "block";
    

}}

function off(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("scrollUp").style.display = "block";
    document.getElementsByClassName('slick-arrow')[0].style.display = "block";
    document.getElementsByClassName('slick-arrow')[1].style.display = "block";
    document.getElementsByClassName('slick-arrow')[2].style.display = "block";
    document.getElementsByClassName('slick-arrow')[3].style.display = "block";
    
}