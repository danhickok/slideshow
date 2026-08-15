// A plugin to convert simple constructs into ones Reveal.js can understand

const Simplifier = {
  id: "simplifier",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let i = 0; i < slides.length; ++i) {
      if (slides[i].querySelector("lesson-section")) {
        slides[i].setAttribute("data-transition", "slide");
        slides[i].setAttribute("data-state", "lesson-section-background");
      }
      const passage = slides[i].querySelector("passage");
      if (passage) {
        passage.classList.add("passage", "scrollable");
      }
      const defragment = (node) => {
        for (let ch of node.childNodes) {
          defragment(ch);
          if (ch.nodeType == Node.TEXT_NODE &&
              ch.nodeValue?.includes("{fragment}")) {
            ch.nodeValue = ch.nodeValue.replace("{fragment}", "");
            ch.parentElement.classList.add("fragment");
          }
        }
      };
      defragment(slides[i]);
    }
    deck.layout();
  },
};
