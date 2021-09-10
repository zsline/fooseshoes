$(function () {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.active__slider'
    });
    $('.active__slider').slick({
        slidesToShow: 5,
        asNavFor: '.top__slider',
        dots: true,
        focusOnSelect: true
    });

})
