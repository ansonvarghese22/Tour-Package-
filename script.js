let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  else slideIndex = n;

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? 'block' : 'none';
    dots[i].classList.toggle('active', i === slideIndex);
  });
}

function currentSlide(n) {
  showSlides(n);
}

function nextSlide() {
  showSlides(slideIndex + 1);
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => currentSlide(idx));
});

showSlides(slideIndex);
setInterval(nextSlide, 4500);
