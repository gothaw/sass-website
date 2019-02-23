import enquire from "../lib/enquire";

if($('#projects-page').length){
    (function () {
        //jQuery variables

        //variables
        const frontEndCarousel              = document.querySelector('.front-end__carousel');
        const frontEndArrowLeft             = document.querySelector('.front-end__arrow--left');
        const frontEndArrowRight            = document.querySelector('.front-end__arrow--right');
        const frontEndProjectDescriptions   = document.querySelectorAll('.front-end__description');

        let frontEndProject=0;


        /**
         *
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
            if (frontEndProject===1){
                frontEndArrowLeft.classList.add('front-end__arrow--left-active');
            }
            else if (frontEndProject===2){
                frontEndArrowRight.classList.add('front-end__arrow--right-active');
            }
            else if (frontEndArrowLeft.classList.contains('front-end__arrow--left-active') && frontEndProject===0){
                frontEndArrowLeft.classList.remove('front-end__arrow--left-active');
            }
            else if (frontEndArrowRight.classList.contains('front-end__arrow--right-active') && frontEndProject===3){
                frontEndArrowRight.classList.remove('front-end__arrow--right-active');
            }
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
        }

        function init(){
            eventHandler();
        }

        window.addEventListener('load', init);
    })();
}