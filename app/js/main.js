$(function() {
    //sticky header menu
    let sticky = new Sticky('.sticky');
    sticky.update();

    //slider
    $('.greetings__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });
});