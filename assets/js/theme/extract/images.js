const imageSliders = $('.sf-js__imageSlider');

imageSliders.each(function (e) {
    const $sliderInstance = $(this);
    
    $sliderInstance.slick({
        "mobileFirst": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "arrows": false,
        "dots": false,
        "adaptiveHeight": true,
        "autoplaySpeed": 7000
    });
});