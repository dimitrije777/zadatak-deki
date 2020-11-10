$(() => {

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('nav').addClass('navShadow dark') : $('nav').removeClass(
            'navShadow dark');
        windowTop > 100 ? $('ul').css('top', '0') : $('ul').css('top', '0');
    });

    //Click Logo To Scroll To Top
    $('.logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500);
        e.preventDefault();
    });

    //Toggle Menu
    $('.menu-toggle').on('click', () => {
        $('.menu-toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');

        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('.menu-toggle').removeClass('closeMenu');
        });
    });
});
$('.menu-toggle').on('click', () => {
    $('html,body').toggleClass('lock');

    $('.menu-toggle').on('click', () => {
        $('.menu-toggle').removeClass('lock');
    });
});