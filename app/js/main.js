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
//map
function myMap() {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
        center: new google.maps.LatLng(50.00972110586039, 36.2392928301727),
        zoom: 15
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.00972110586039, 36.2392928301727),
        map: map,
        icon: '../images/icons/map.svg'
    });
    let infoWindow = new google.maps.InfoWindow({
        content: '<b>Место проведения основной церемонии</b>'
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

//бургер-меню
$('.header__menu-btn').on('click', function() {
    $('.header__menu > ul').slideToggle();
});