import enquire from './lib/enquire.js'

(function () {
    //jQuery variables
    const $aboutImg         = $('.about__img');

    //variables
    const skills            = document.getElementById('skills');
    const skillBars         = document.querySelectorAll('.skill__bar');

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
    }

    function init() {
        eventHandler();
        responsiveAboutImg();
        animateSkillBars();
    }

    window.addEventListener("load", init);
})();