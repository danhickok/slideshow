// A routine to scroll the contents of the <passage> element based on given direction

function performScroll(direction) {
  const currentSlide = Reveal.getCurrentSlide();
  const passage = currentSlide.querySelector('passage');
  if (!passage) return;

  const isAtBottom = passage.scrollHeight - passage.scrollTop <= passage.clientHeight + 1;
  const isAtTop = passage.scrollTop <= 0;

  // Scroll amount leaves about one line of text from the previous page
  const scrollAmount = passage.clientHeight - 180;

  switch (direction) {
    case 'up':
      if (!isAtTop) {
        passage.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      }
      break;

    case 'down':
      if (!isAtBottom) {
        passage.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
      break;
  }
}
