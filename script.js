const slides = document.querySelectorAll('.slide');

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
