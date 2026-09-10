var zoomableImages = document.querySelectorAll('.zoomable');

var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');
var lightboxClose = document.getElementById('lightboxClose');

zoomableImages.forEach(function(img) {

    img.addEventListener('click', function() {

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        lightbox.classList.add('active');

    });

});

lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(event) {

    if (event.target === lightbox) {
        lightbox.classList.remove('active');
    }

});