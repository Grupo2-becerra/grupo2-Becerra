let currentSlide = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.home__slide');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  document.querySelector('.home__slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 5000);
