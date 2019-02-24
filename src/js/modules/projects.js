import enquire from "../lib/enquire";

if($('#projects-page').length){
    (function () {
        //jQuery variables
        const $mobileAppProject             = $('.mobile__img-wrapper');

        //variables
        const frontEndCarousel              = document.querySelector('.front-end__carousel');
        const frontEndArrowLeft             = document.querySelector('.front-end__arrow--left');
        const frontEndArrowRight            = document.querySelector('.front-end__arrow--right');
        const frontEndProjectDescriptions   = document.querySelectorAll('.front-end__description');
        const backEndCarousel               = document.querySelector('.back-end__carousel');
        const backEndArrowLeft              = document.querySelector('.back-end__arrow--left');
        const backEndArrowRight             = document.querySelector('.back-end__arrow--right');
        const backEndProjectDescriptions    = document.querySelectorAll('.back-end__description');
        const mobileAppProjectDescriptions  = document.querySelectorAll('.mobile__description');


        let frontEndProject                 =0;
        let backEndProject                  =0;


        /**
         * @name            galleryArrowsAnimation
         * @desc            Function handles arrow gallery arrow animation by adding --left-active and --right-active classes.
         * @param           lastProjectIndex - index of the last project
         * @param           currentProjectIndex - index of the currently displayed project
         * @param           galleryName [string] gallery name which can be 'front-end' or 'back-end'
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
         * @name            showProjectDescription
         * @desc            Function shows selected project description and hides descriptions for other projects.
         *                  Uses add/remove css class.
         * @param           projectDescriptions - array like object of DOM elements which includes project descriptions from a given category
         * @param           projectDescriptionToShow - DOM element, which includes project description to be shown
         * @param           galleryName [string] can be 'front-end', 'back-end' or 'mobile'
         */
        function showProjectDescription(projectDescriptions,projectDescriptionToShow,galleryName) {
            $(projectDescriptionToShow).addClass(`${galleryName}__description--show`);
            $(projectDescriptionToShow).removeClass(`${galleryName}__description--hide`);
            $(projectDescriptions).not(projectDescriptionToShow).addClass(`${galleryName}__description--hide`);
            $(projectDescriptions).not(projectDescriptionToShow).removeClass(`${galleryName}__description--show`);
        }

        /**
         * @name             showDataBaseProject
         * @desc
         */
        function showDataBaseProject() {

        }

        /**
         * @name            showMobileAppProject
         * @desc            Function shows an image in the mobile app accordion gallery.
         *                  This is carried out by adding and removing relevant css classes.
         * @param           e - target image click event
         */
        function showMobileAppProject(e) {
            const $targetProject            = $(e.target);
            const targetWrapper             = $targetProject.closest('.mobile__img-wrapper');
            const targetWrapperIndex        = targetWrapper.index();
            const projectDescription        = mobileAppProjectDescriptions[targetWrapperIndex];
            $(targetWrapper).addClass('mobile__img-wrapper--selected');
            $(targetWrapper).removeClass('mobile__img-wrapper--unselected');
            $mobileAppProject.not(targetWrapper).addClass('mobile__img-wrapper--unselected');
            $mobileAppProject.not(targetWrapper).removeClass('mobile__img-wrapper--selected');
            showProjectDescription(mobileAppProjectDescriptions,projectDescription,'mobile');
        }

        /**
         * @name            showBackEndProject
         * @desc            Function changes left property in back-end gallery and shows next/previous projects.
         */
        function showBackEndProject() {
            const projectDescription        = backEndProjectDescriptions[backEndProject];
            backEndCarousel.style.left      = `${-backEndProject*100}%`;
            showProjectDescription(backEndProjectDescriptions,projectDescription,'back-end');
            galleryArrowsAnimation(3,backEndProject,'back-end',backEndArrowLeft,backEndArrowRight);
        }

        /**
         * @name            showFrontEndProject
         * @desc            Function changes left property in front-end gallery and shows next/previous projects.
         */
        function showFrontEndProject() {
            const projectDescription        = frontEndProjectDescriptions[frontEndProject];
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
            showProjectDescription(frontEndProjectDescriptions,projectDescription,'front-end');
            galleryArrowsAnimation(3,frontEndProject,'front-end',frontEndArrowLeft,frontEndArrowRight);
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
            $mobileAppProject.on('click',function (e) {
                showMobileAppProject(e);
            })
        }

        function init(){
            eventHandler();
        }

        window.addEventListener('load', init);
    })();
}