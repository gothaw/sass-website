import enquire from '../lib/enquire.js'

(function () {

    //jQuery variables
    const $menuItemsScroll          = $('.menu__item').not('.menu__home');
    const $toggleMenuIconImg        = $('.toggle__img');
    const $menuItemsHome            = $('.menu__home');

    //variables
    const typingSpace               = document.querySelector('.header__typing-animation');
    const menuItems                 = document.querySelectorAll('.menu__item');

    let toggleMenuActive = false;
    let typedText = ["Front-end.","Node.js.","JavaScript.","MySQL.","Python."];


    /**
     * @name    menuScroll
     * @param   e - menu item click event
     * @desc    Scrolls down to relevant section of the page after clicking on a menu item.
     */
    function menuScroll(e) {
        let offset=0;
        e.preventDefault();
        const menuItemHref = $(e.target).attr("href");
        $("html, body").animate(
            {
                "scrollTop" : $(menuItemHref).offset().top - offset
            },
            1000
        );
    }
    /**
     * @name    homeScroll
     * @desc    Scrolls to the top of the page when logo is clicked (works only on home page).
     */
    function homeScroll(e) {
        e.preventDefault();
        $("html, body").animate(
            {
                "scrollTop" : 0
            },
            500
        );
    }

    /**
     * @name        typingAnimation
     * @desc        Function handles typing animation by invoking textTypingInterval function and separate setInterval to animate text cursor.
     * @param       duration - duration of the typing animation [ms] including the time after a string is typed and a new animation is about to start.
     *              Needs to be greater than typingDuration. Default value = 2500ms.
     */
    function typingAnimation(duration=2500) {
        let i=0;
        setInterval(function () {
            $(typingSpace).toggleClass('header__typing-animation--active')
        },400);
        textTypingInterval(i);
        setInterval(function () {
            i++;
            if(i>=typedText.length){
                i=0;
            }
            textTypingInterval(i);
        },duration);
    }

    /**
     * @name        textTypingInterval
     * @desc        Function animates the string from typedText array using setInterval.
     *              It changes innerHTML of the typingSpace by adding subsequent characters at each interval step.
     *              When typing animation is completed the interval is cleared.
     * @param       index - index of the string from typedText array
     * @param       typingDuration - duration of typing animation [ms] needs to be less than duration in typingAnimation function.
     *              Default value = 800ms
     */
    function textTypingInterval(index,typingDuration=800) {
        let j=0;
        typingSpace.innerHTML="";
        const interval = setInterval(function () {
           if(j<typedText[index].length){
               typingSpace.innerHTML+=typedText[index].charAt(j);
               j++;
           }
           else {
               clearInterval(interval);
           }
       },typingDuration/typedText[index].length);
    }

    /**
     * @name        registerMenu
     * @desc        Function hides the menu bar links when width is less than 767px and shows when it is greater than 767px.
     *              Uses enquire.js module.
     */
    function registerMenu() {
        enquire.register("screen and (max-width: 767px)", {
            match: function () {
                $(menuItems).hide();
                $toggleMenuIconImg.attr("src","dist/img/icons/toggle-icon.png");
                toggleMenuActive=false;
            },
            unmatch: function () {
                $(menuItems).show();
            }
        });
    }

    /**
     * @name        toggleMenu
     * @desc        Slide toggle animation for hamburger menu. Changes src attribute for menu icon image when icon is clicked.
     */
    function toggleMenu() {
        $(menuItems).slideToggle();
        if(toggleMenuActive){
            $toggleMenuIconImg.attr("src","dist/img/icons/toggle-icon.png");
            toggleMenuActive=false;
        }
        else {
            $toggleMenuIconImg.attr("src","dist/img/icons/toggle-icon-active.png");
            toggleMenuActive=true;
        }
    }

    function eventHandler() {
        $toggleMenuIconImg.on('click',toggleMenu);
        $menuItemsScroll.on('click',function (e) {
            menuScroll(e);
        });
        if($('#home-page').length){
            $menuItemsHome.on('click',function (e) {
                homeScroll(e);
            });
        }
    }

    function init() {
        eventHandler();
        registerMenu();
        typingAnimation();
    }

    window.addEventListener("load", init);
})();