import enquire from './lib/enquire.js'

(function () {
    //jQuery variables
    const $aboutImg           = $('.about__img');


    //variables
    const skills              = document.getElementById('skills');
    const skillBars           = document.querySelectorAll('.skill__bar');
    let imgPercent;
    let parallaxInterval;

    /**
     *
     */
    function spacerImgParallax(speed,$img,$wrapper) {
        enquire.register("screen and (min-width: 1025px)", {
            match: function () {
                parallaxInterval = setInterval(function () {
                    const winTop        = $(this).scrollTop();
                    const winH          = $(this).height();
                    const winBottom     = winTop + winH;
                    const wrapperTop    = $wrapper.offset().top;
                    const wrapperH      = $wrapper.height();
                    const wrapperBottom = wrapperTop + wrapperH;

                    // If block is shown on screen
                    if (winBottom > wrapperTop && winTop < wrapperBottom) {
                        // Number of pixels shown after block appear
                        const imgBottom = ((winBottom - wrapperTop) * speed);
                        // Max number of pixels until block disappear
                        const imgTop = winH + wrapperH;
                        // Percentage between start showing until disappearing
                        imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
                    }
                    $img.css({
                        top: imgPercent + '%',
                        transform: 'translate(-50%, -' + imgPercent + '%)'
                    });
                },1000/120);
            },
            unmatch: function () {
                $img.css({
                    top: '0',
                    transform: 'translate(-50%, 0)'
                });
                clearInterval(parallaxInterval);
            }
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
        $('.spacer__img').each(function () {
            const $spacerImg          = $(this);
            const $spacerImgWrapper   = $(this).parent();
            spacerImgParallax(0.75,$spacerImg,$spacerImgWrapper);
        });
    }

    function init() {
        eventHandler();
        responsiveAboutImg();
        animateSkillBars();
        // spacerImgParallax(0.75);
    }

    window.addEventListener("load", init);
})();