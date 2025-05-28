const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    if (slide.classList.contains('expanded')) {
      // Clicking expanded slide retracts all to default state
      slides.forEach(s => {
        s.classList.remove('expanded', 'retracted');
      });
    } else {
      // Expand clicked slide, retract others
      slides.forEach(s => {
        s.classList.remove('expanded', 'retracted');
        if (s !== slide) s.classList.add('retracted');
      });
      slide.classList.add('expanded');
    }
  });
});
