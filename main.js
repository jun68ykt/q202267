$(document).ready(function() {

    const barColors = ['#f00', '#ff0', '#f00','#ff0'];

    $.fn.startBar = function(index) {
        this
            .eq(index)
            .css({ backgroundColor: barColors[index]})
            .animate({ width: '100%' }, 3000 );
    }

    $('.slider').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        speed: 1200,
        autoplaySpeed: 3000,
        prevArrow: '<img src="https://dummyimage.com/100x100/fff/000&text=Prev" class="slide-arrow slick-prev">',
        nextArrow: '<img src="https://dummyimage.com/100x100/fff/000&text=Next" class="slide-arrow slick-next">',
        adaptiveHeight: true
    }).on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide === 0)
            $('.bar').css({width: 0});
        $('.bar').startBar(currentSlide);
    });

    $('.bar').startBar(0);
});
