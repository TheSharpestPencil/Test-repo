const slides = document.querySelectorAll('.slide');

// Prevent button or link clicks from toggling the slide
document.querySelectorAll('.slide a, .slide button').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
  });
});

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    if (slide.classList.contains('expanded')) {
      slides.forEach(s => s.classList.remove('expanded'));
    } else {
      slides.forEach(s => s.classList.remove('expanded'));
      slide.classList.add('expanded');
    }
  });
});
