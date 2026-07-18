// A plugin for changing verse numbers in square brackets into <verse> elements

const VerseFormatter = {
  id: "verse-formatter",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let slide of slides) {
      let passage = slide.querySelector("passage");
      if (passage) {
        let content = passage.innerHTML;
        passage.innerHTML = content.replace(/\[([0-9]+)\]/g, "<verse>$1</verse>");
      }
    }
    deck.layout();
  },
};
