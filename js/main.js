//슬릭구현
$(document).ready(function(){
    
    $('.con02Img').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        prevArrow:$('.prevBtn'),
        nextArrow:$('.nextBtn'),
    
    })
    
    //wow
    new WOW().init();
    
    