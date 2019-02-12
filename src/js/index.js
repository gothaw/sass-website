import enquire from './lib/enquire.js'

(function () {
    //jQuery variables
    const $aboutImg           = $('.about__img');
    const $spacerImg          = $('.spacer__img');
    const $spacerImgWrapper   = $('.spacer');

    //variables
    const skills              = document.getElementById('skills');
    const skillBars           = document.querySelectorAll('.skill__bar');

    /**
     *
     */
    function spacerImgParallax(speed) {
        const imgY = $spacerImgWrapper.offset().top;
        const winY = $(window).scrollTop();
        const winH = $(window).height();
        const wrapperH = $spacerImgWrapper.innerHeight();
        const winBottom = winY + winH;

        let imgPercent;

        // If block is shown on screen
        if (winBottom > imgY && winY < imgY + wrapperH) {
            // Number of pixels shown after block appear
            const imgBottom = ((winBottom - imgY) * speed);
            // Max number of pixels until block disappear
            const imgTop = winH + wrapperH;
            // Porcentage between start showing until disappearing
            imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        $spacerImg.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
    }

    /**
     * @name        animateSkillBars
     * @desc        Function checks if skill bars are visible in the viewport.
     *              If they are visible, a CSS class is added which adds their width - animates them.
     */
    function animateSkillBars() {
        const interval = setInterval(function () {
            if(skills.getBoundingClientRect().top<window.innerHeight){
                for (let i=0;i<skillBars.length;i++){
                    skillBars[i].classList.add(`skill__bar-${i+1}`);
                }
                clearInterval(interval);
            }
        },100);
    }

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
        document.addEventListener("scroll",function () {
            spacerImgParallax(0.75)
        });
    }

    function init() {
        eventHandler();
        responsiveAboutImg();
        animateSkillBars();
    }

    window.addEventListener("load", init);
})();