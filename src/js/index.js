import enquire from './lib/enquire.js'

(function () {
    //jQuery variables
    const $aboutImg      = $('.about__img');

    /**
     * @name        responsiveAboutImg
     * @desc        Function adds img-responsive class to the image if screen width is less than 768px.
     *              Uses enquire.js.
     */
    function responsiveAboutImg() {
        enquire.register("screen and (max-width: 768px)", {
            match: function () {
                $aboutImg.addClass("img-responsive");
            },
            unmatch: function () {
                $aboutImg.removeClass("img-responsive");
            }
        });
    }
    function eventHandler() {
    }

    function init() {
        eventHandler();
        responsiveAboutImg();
    }

    window.addEventListener("load", init);
})();