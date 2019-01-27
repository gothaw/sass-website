import enquire from '../lib/enquire.js'

(function () {

    //jQuery variables
    const $menuLogo         = $('.menu__logo');
    const $menu             = $('.menu');


    function responsiveLogo() {
        enquire.register("screen and (min-width: 1025px)", {
            match: function () {
                $menuLogo.addClass("img-responsive");
            },
            unmatch: function () {
                $menuLogo.removeClass("img-responsive");
            }
        });
    }

    function eventHandler() {

    }

    function init() {
        eventHandler();
        responsiveLogo();
    }

    window.addEventListener("load", init);
})();