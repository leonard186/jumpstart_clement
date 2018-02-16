$(document).ready(function(){
    $('.carousel').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    var navScrollx = 0;
    navScrollx.scroll();
    var navScrolly = $(this).scrollTop();
    if (navScrolly - navScrollx > 50) {
        var z = $('.navbar').css('height')
        $('.navbar').animate({top: '-' + z}, 150);
        navScrollx = navScrolly;
    } else if (navScrollx - navScrolly > 50) {
        $('.navbar').animate({top: '-' + z}, 150);
        navScrollx - navScrolly;
    };
});