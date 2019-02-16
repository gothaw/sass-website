import enquire from '../lib/enquire.js'

(function () {

    //jQuery variables
    const $menuItems                = $('.menu__item');
    const $toggleMenuIconImg        = $('.toggle__img');

    //variables
    const typingSpace               = document.querySelector('.header__typing-animation');

    let toggleMenuActive = false;
    let typedText = ["Front-end.","Node.js.","JavaScript.","MySQL.","Python."];


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

    function eventHandler() {
        $toggleMenuIconImg.on('click',toggleMenu);
    }

    function init() {
        eventHandler();
        registerMenu();
        typingAnimation();
    }

    window.addEventListener("load", init);
})();