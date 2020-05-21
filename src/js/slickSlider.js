$(document).ready(function() {
$('.header-slider ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 900,
        arrows:true,
        prevArrow: '<span class="slick-arrow--custom-left">	&larr;</span>',
        nextArrow: '<span class="slick-arrow--custom-right">&rarr;</span>',

        responsive: [{
            breakpoint: 1023,
            settings: {

            }
        }]
    });
    var slider = $('.header-slider ');
    var total = slider.slick("getSlick").slideCount;
    var currentSlide = $('.header-slider ').slick('slickCurrentSlide');
    var slide = currentSlide + 1;
    if (total > 1) {
        $(".sl-count__current").text('0' + slide);
        $('.sl-count__total').text('0' + total);
    }
    $(".header-slider ").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var currentSl = currentSlide + 1;
        $(".sl-count__current").text('0' + currentSl);
    });


})
