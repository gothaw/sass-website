import enquire from '../lib/enquire.js'

(function () {

    //jQuery variables
    const $menuLogo                 = $('.menu__logo');
    const $menuItems                = $('.menu__item');
    const $toggleMenuIconImg        = $('.toggle__img');
    const $textCursor               = $('.header__typing-animation');

    let toggleMenuActive = false;

    function typingAnimation() {
        setInterval(function () {
            $textCursor.toggleClass('header__typing-animation--active')
        },500)
    }
    
    /**
     * @name        registerMenu
     * @desc        Function hides the menu bar links when width is less than 767px and shows when it is greater than 767px.
     *              Uses enquire.js module.
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
     * @name        toggleMenu
     * @desc        Slide toggle animation for hamburger menu. Changes src attribute for menu icon image when icon is clicked.
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
     * @name        responsiveLogo
     * @desc        Function adds img-responsive class to the image if screen width is greater than 1025px.
     *              Uses enquire.js.
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
        typingAnimation();
    }

    window.addEventListener("load", init);
})();