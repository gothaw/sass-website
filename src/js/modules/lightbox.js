(function () {
    if($('#home-page').length){

        //variables
        const projectDescriptions       = document.querySelectorAll('.lightbox__description');

        //jQuery variables
        const $projectButton            = $('.project__button');
        const $lightbox                 = $('.lightbox');
        const $lightboxImg              = $('.lightbox__img');
        const $lightboxClose            = $('.lightbox__close');

        /**
         * @name        showLightboxMainImg
         * @desc        Function changes attributes of the main lightbox image depending on what image was clicked in the gallery.
         * @param       index - index of the project in portfolio__projects-wrapper div
         */
        function showLightboxMainImg(index) {
            switch (index) {
                case 0:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/back-end-2-768.jpg 768w, dist/img/projects/back-end-2-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/back-end-2-1080.jpg 1080w",
                        alt: "financial web app"
                    });
                    break;
                case 1:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/app-2-768.jpg 768w, dist/img/projects/app-2-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/app-2-1080.jpg 1080w",
                        alt: "news mobile app"
                    });
                    break;
                case 2:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/app-3-768.jpg 768w, dist/img/projects/app-3-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/app-3-1080.jpg 1080w",
                        alt: "business app"
                    });
                    break;
                case 3:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/front-end-4-768.jpg 768w, dist/img/projects/front-end-4-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/front-end-4-1080.jpg 1080w",
                        alt: "frontend project"
                    });
                    break;
                case 4:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/back-end-4-768.jpg 768w, dist/img/projects/back-end-4-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/back-end-4-1080.jpg 1080w",
                        alt: "business web app"
                    });
                    break;
                case 5:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/data-4-768.jpg 768w, dist/img/projects/data-4-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/data-4-1080.jpg 1080w",
                        alt: "database normalization"
                    });
                    break;
                case 6:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/front-end-2-768.jpg 768w, dist/img/projects/front-end-2-1080.jpg 1080w",
                        sizes: "(max-width: 768px) 768px, 1080px",
                        src: "dist/img/projects/front-end-2-1080.jpg 1080w",
                        alt: "bakery website"
                    });
                    break;
            }
        }

        /**
         * @name        showProjectLightBox
         * @desc        Function shows project lightbox when a button on project overlay in clicked.
         *              The lighbox includes main image and project description.
         * @param       e - button click event
         */
        function showProjectLightBox(e) {
            e.stopPropagation();
            const $targetButton         = $(e.target);
            const $targetProject        = $targetButton.closest(".portfolio__project");
            const projectIndex          = $targetProject.index();
            $(projectDescriptions).hide();
            $(projectDescriptions[projectIndex]).show();
            showLightboxMainImg(projectIndex);
            $lightbox.show();
        }

        function eventHandler() {
            $projectButton.on('click',function (e) {
                showProjectLightBox(e);
            });
            $lightboxClose.on("click",function (){
                $lightbox.hide();
            });
        }

        function init(){
            eventHandler();
        }

        window.addEventListener("load",init);
    }
})();

