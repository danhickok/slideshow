// A plugin to convert simple constructs into ones Reveal.js can understand

const Simplifier = {
  id: "simplifier",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let i = 0; i < slides.length; ++i) {
      if (slides[i].querySelector("lesson-section")) {
        slides[i].setAttribute("data-transition", "slide");
      }
    }
    deck.layout();
  },
};
