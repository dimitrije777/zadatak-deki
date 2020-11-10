import Glide from '@glidejs/glide/dist/glide.min.js';

const Slider = class Slider {

    constructor() {

    }

    init() {
        this.gallerySlider();
    }


    gallerySlider() {

        let gallerySlider = new Glide('.glide-gallery', {
            startAt: 0,
            perView: 1,
            peek: {
                before: 0,
                after: 250
            },
            breakpoints: {
                1024: {
                    type: 'carousel',
                    startAt: 0,
                    perView: 1,
                    peek: {
                        before: 0,
                        after: 0
                    }
                }
            }
        });
        gallerySlider.mount();
    }

};

export {Slider}
