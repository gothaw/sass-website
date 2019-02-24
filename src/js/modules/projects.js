import enquire from "../lib/enquire";

if($('#projects-page').length){
    (function () {
        //jQuery variables

        //variables
        const frontEndCarousel              = document.querySelector('.front-end__carousel');
        const frontEndArrowLeft             = document.querySelector('.front-end__arrow--left');
        const frontEndArrowRight            = document.querySelector('.front-end__arrow--right');
        const frontEndProjectDescriptions   = document.querySelectorAll('.front-end__description');
        const backEndCarousel               = document.querySelector('.back-end__carousel');
        const backEndArrowLeft              = document.querySelector('.back-end__arrow--left');
        const backEndArrowRight             = document.querySelector('.back-end__arrow--right');
        const backEndProjectDescriptions    = document.querySelectorAll('.back-end__description');


        let frontEndProject                 =0;
        let backEndProject                  =0;


        /**
         * @name            galleryArrowsAnimation
         * @desc            Function handles arrow gallery arrow animation by adding --left-active and --right-active classes.
         * @param           lastProjectIndex - index of the last project
         * @param           currentProjectIndex - index of the currently displayed project
         * @param           galleryName [string] gallery name: 'front-end' or 'back-end'
         * @param           arrowLeft - arrow left DOM element
         * @param           arrowRight - arrow right DOM element
         */
        function galleryArrowsAnimation(lastProjectIndex, currentProjectIndex, galleryName, arrowLeft, arrowRight) {
            if (currentProjectIndex===1){
                arrowLeft.classList.add(`${galleryName}__arrow--left-active`);
            }
            else if (currentProjectIndex===2){
                arrowRight.classList.add(`${galleryName}__arrow--right-active`);
            }
            else if (arrowLeft.classList.contains(`${galleryName}__arrow--left-active`) && currentProjectIndex===0){
                arrowLeft.classList.remove(`${galleryName}__arrow--left-active`);
            }
            else if (arrowRight.classList.contains(`${galleryName}__arrow--right-active`) && currentProjectIndex===lastProjectIndex){
                arrowRight.classList.remove(`${galleryName}__arrow--right-active`);
            }
        }

        /**
         * @name            showBackEndProject
         * @desc            Function changes left property in back-end gallery and shows next/previous projects.
         *                  It also displays relevant description by adding --show class.
         */
        function showBackEndProject() {
            const projectDescription = backEndProjectDescriptions[backEndProject];
            backEndCarousel.style.left = `${-backEndProject*100}%`;
            $(projectDescription).addClass('back-end__description--show');
            $(projectDescription).removeClass('back-end__description--hide');
            $(backEndProjectDescriptions).not(projectDescription).addClass('back-end__description--hide');
            galleryArrowsAnimation(3,backEndProject,"back-end",backEndArrowLeft,backEndArrowRight);
        }

        /**
         * @name            showFrontEndProject
         * @desc            Function changes left property in front-end gallery and shows next/previous projects.
         *                  It also displays relevant description by adding --show class.
         */
        function showFrontEndProject() {
            const projectDescription = frontEndProjectDescriptions[frontEndProject];
            enquire.register('screen and (min-width: 768px)', {
                match: function () {
                    frontEndCarousel.style.left = `calc(${-frontEndProject*62.5}% - ${frontEndProject*5}px)`;
                }
            });
            enquire.register('screen and (max-width: 768px)', {
                match: function () {
                    frontEndCarousel.style.left = `${-frontEndProject*100}%`;
                }
            });
            $(projectDescription).addClass('front-end__description--show');
            $(projectDescription).removeClass('front-end__description--hide');
            $(frontEndProjectDescriptions).not(projectDescription).addClass('front-end__description--hide');
            galleryArrowsAnimation(3,frontEndProject,"front-end",frontEndArrowLeft,frontEndArrowRight);
        }

        function eventHandler() {
            frontEndArrowLeft.addEventListener('click', function(){
                if(frontEndProject>0){
                    frontEndProject--;
                    showFrontEndProject();
                }
            });
            frontEndArrowRight.addEventListener('click', function(){
                if(frontEndProject<3){
                    frontEndProject++;
                    showFrontEndProject();
                }
            });
            backEndArrowLeft.addEventListener('click', function(){
                if(backEndProject>0){
                    backEndProject--;
                    showBackEndProject();
                }
            });
            backEndArrowRight.addEventListener('click', function(){
                if(backEndProject<3){
                    backEndProject++;
                    showBackEndProject();
                }
            });
        }

        function init(){
            eventHandler();
        }

        window.addEventListener('load', init);
    })();
}