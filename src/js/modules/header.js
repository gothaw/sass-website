import enquire from '../lib/enquire.js'

(function () {

    //jQuery variables
    const $menuLogo                 = $('.menu__logo');
    const $menuItems                = $('.menu__item');
    const $toggleMenuIconImg        = $('.toggle__img');

    let toggleMenuActive = false;

    /**
     *
     */
    function registerMenu() {
        enquire.register("screen and (max-width: 767px)", {
            match: function () {
                $menuItems.hide();
                $toggleMenuIconImg.attr("src","dist/img/icons/toggle-icon.png");
                toggleMenuActive=false;
            },
            unmatch: function () {
                $menuItems.show();
            }
        });
    }

    /**
     *
     */
    function toggleMenu() {
        $menuItems.slideToggle();
        if(toggleMenuActive){
            $toggleMenuIconImg.attr("src","dist/img/icons/toggle-icon.png");
            toggleMenuActive=false;
        }
        else {
            $toggleMenuIconImg.attr("src","dist/img/icons/toggle-icon-active.png");
            toggleMenuActive=true;
        }
    }

    /**
     *
     */
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
        $toggleMenuIconImg.on('click',toggleMenu);
    }

    function init() {
        eventHandler();
        responsiveLogo();
        registerMenu();
    }

    window.addEventListener("load", init);
})();