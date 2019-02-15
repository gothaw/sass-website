import enquire from './lib/enquire.js'

(function () {
    //jQuery variables
    const $aboutImg           = $('.about__img');
    const $spacerImg          = $('.spacer__img');

    //variables
    const skills              = document.getElementById('skills');
    const skillBars           = document.querySelectorAll('.skill__bar');

    /**
     * @name        spacerImgParallax
     * @desc        Function handles parallax effect for spacer images. It uses setInterval which updates the top and transform: translateY properties of the image.
     *              The parallax effect is displayed only for window width greater than 1025px using enquire.js. For window width less than 1025px, the image properties are restored to default values.
     * @param       speed - speed of the parallax effect (between 0 and 1)
     * @param       $img - jQuery array like object of spacer images
     * @param       $wrapper - jQuery array like object of spacer image wrappers
     */
    function spacerImgParallax(speed,$img,$wrapper) {
        let parallaxInterval;
        let imgPercent;
        enquire.register("screen and (min-width: 1025px)", {
            match: function () {
                parallaxInterval = setInterval(function () {
                    const winTop        = $(this).scrollTop();
                    const winH          = $(this).height();
                    const winBottom     = winTop + winH;
                    const wrapperTop    = $wrapper.offset().top;
                    const wrapperH      = $wrapper.innerHeight();

                    const imgBottom = ((winBottom - wrapperTop) * speed);
                    const imgTop = winH + wrapperH;
                    imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));

                    $img.css({
                        top: imgPercent + '%',
                        transform: 'translateY(-' + imgPercent + '%)'
                    });
                },1000/60);
            },
            unmatch: function () {
                $img.css({
                    top: '0',
                    transform: 'translateY(0)'
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
     * @name        responsiveSpacerImg
     * @desc        Function adds img-responsive class to the image if screen width is greater than 540px.
     *              Uses enquire.js.
     */
    function responsiveSpacerImg() {
        enquire.register("screen and (min-width: 540px)", {
            match: function () {
                $spacerImg.addClass("img-responsive");
            },
            unmatch: function () {
                $spacerImg.removeClass("img-responsive");
            }
        });
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
            spacerImgParallax(0.4,$spacerImg,$spacerImgWrapper);
        });
    }

    function init() {
        eventHandler();
        responsiveAboutImg();
        responsiveSpacerImg();
        animateSkillBars();
    }

    window.addEventListener("load", init);
})();
