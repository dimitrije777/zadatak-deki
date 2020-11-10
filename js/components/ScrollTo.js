const ScrollTo = class ScrollTo{

    constructor(config){
        this.scrollToTrigger = config.scrollToTrigger;
    }

    init(){
        this.smoothScroll();
    }

    smoothScroll(){
        const scrollTrigger = this.scrollToTrigger;
        //let headerHeight = $('.js-header').innerHeight();
        scrollTrigger.click(function() {
            let $this = $(this),
                href = $this.attr("href"),
                topY = $(href).offset().top - 0,
                $body = $("html, body");


            if ($(window).width() < 1291) {

            }
            else {
                // topY = $(href).offset().top /* - headerHeight */ - 42;
            }

            $('a').each(function() {
                $(this).parent('li').removeClass('active');
            });
            $(this).parent('li').addClass('active');

            TweenMax.to($body, 1, {
                scrollTop: topY,
                ease: Expo.easeInOut
            });
            return false;
        });
    }
};

export {ScrollTo};

