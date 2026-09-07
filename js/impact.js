var tabs = document.querySelectorAll('.tab-btn');
var cards = document.querySelectorAll('.partner-card');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    tabs.forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    var filter = tab.getAttribute('data-filter');
    cards.forEach(function(card) {
      if (filter === 'all' || card.getAttribute('data-cat') === filter) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
});

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