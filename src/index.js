require('./styles/index.scss');
import 'slick-carousel';

$( document ).ready(function() {
    /*раскрытие "подробнее"*/
    $('.event-details__link').click(function (event) {
            const button = $(event.currentTarget);
            button.toggleClass('_active');
            button.next('.event-details__list').toggleClass('swing-in-top-fwd');
        }
    );

    /*кнопка записаться / вы записаны*/
    $('.register-button').click(function (event) {
            const button = $(event.currentTarget);
            button.toggleClass('_active');
            button.toggleClass('_primary');
        }
    );

    /*слайдер экпертов*/
    $('.experts').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14.5\" height=\"25.5\"><path stroke=\"#999\" fill=\"none\" d=\"M12.5 23.81L1.186 12.496 12.5 1.183\"/></svg></button>",
        nextArrow:"<button type='button' class='slick-next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13.5\" height=\"24.5\"><path stroke=\"#999\" fill=\"none\" d=\"M1.217.495l11.284 11.502L1.217 23.498\"/></svg></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});
