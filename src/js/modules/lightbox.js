(function () {
    if($('#home-page').length){

        //variables
        const projectDescriptions       = document.querySelectorAll('.lightbox__description');
        const lightboxImgWrapper        = document.querySelector('.lightbox__img-wrapper');

        //jQuery variables
        const $projectButton            = $('.project__button');
        const $lightbox                 = $('.lightbox');
        const $lightboxClose            = $('.lightbox__close');

        /**
         * @name        showProjectLightBox
         * @desc        Function shows project lightbox when a button on project overlay in clicked.
         *              The lighbox includes main image and project description.
         * @param       e - button click event
         */
        function showProjectLightBox(e) {
            e.stopPropagation();
            const $targetButton         = $(e.target);
            const $targetProject        = $targetButton.closest('.portfolio__project');
            const projectIndex          = $targetProject.index();
            $(projectDescriptions).hide();
            $(projectDescriptions[projectIndex]).show();
            const mainImg               = $targetProject.find('PICTURE').clone();
            if(lightboxImgWrapper.lastChild){
                lightboxImgWrapper.removeChild(lightboxImgWrapper.lastChild);
            }
            $(lightboxImgWrapper).append(mainImg);
            $lightbox.show();
        }


        function eventHandler() {
            $projectButton.on('click',function (e) {
                showProjectLightBox(e);
            });
            $lightboxClose.on('click',function (){
                $lightbox.hide();
            });
        }

        function init(){
            eventHandler();
        }

        window.addEventListener('load',init);
    }
})();

