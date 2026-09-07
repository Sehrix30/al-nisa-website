var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('is-open');
  var isOpen = navLinks.classList.contains('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});