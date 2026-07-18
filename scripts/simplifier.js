// A plugin to convert simple constructs into ones Reveal.js can understand

const Simplifier = {
  id: "simplifier",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let slide of slides) {
      //TODO: replace my simplified notation with actual HTML
      // - I haven't thought of any yet
    }
    deck.layout();
  },
};
