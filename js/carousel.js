console.log("Carousel JS is running");
var carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach(function(carousel) {

    var slides = carousel.querySelectorAll('.program-slide');
    var previousButton = carousel.querySelector('.carousel-prev');
    var nextButton = carousel.querySelector('.carousel-next');
    var counter = carousel.querySelector('.carousel-counter');

    var currentIndex = 0;

    function showSlide(index) {

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach(function(slide, i) {
            slide.classList.toggle('active', i === currentIndex);
        });

        counter.textContent =
            (currentIndex + 1) + ' / ' + slides.length;
    }

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    previousButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

});