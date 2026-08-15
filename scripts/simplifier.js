// A plugin to convert simple constructs into ones Reveal.js can understand

const Simplifier = {
  id: "simplifier",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let i = 0; i < slides.length; ++i) {
      // beginning-of-section slides get a slide transition and different background
      if (slides[i].querySelector("lesson-section")) {
        slides[i].setAttribute("data-transition", "slide");
        slides[i].setAttribute("data-state", "lesson-section-background");
      }

      // passage elements are scrollable and have a unique style
      const passage = slides[i].querySelector("passage");
      if (passage) {
        passage.classList.add("passage", "scrollable");
      }

      // replace simple {xx} notation with Reveal fragment animation classes
      const map = {
        f: [], // fade in (default for fragment)
        fo: ["fade-out"],
        fu: ["fade-up"],
        fd: ["fade-down"],
        fl: ["fade-left"],
        fr: ["fade-right"],
        fio: ["fade-in-then-out"],
        fis: ["fade-in-then-semi-out"],
        g: ["grow"],
        sfo: ["semi-fade-out"],
        s: ["shrink"],
        t: ["strike"],
        hr: ["highlight-red"],
        hg: ["highlight-green"],
        hb: ["highlight-blue"],
        hcr: ["highlight-current-red"],
        hcg: ["highlight-current-green"],
        hcb: ["highlight-current-blue"],
        b: ["custom", "blur"],
      };
      const defragment = (node) => {
        for (let ch of node.childNodes) {
          defragment(ch);
          if (ch.nodeType == Node.TEXT_NODE) {
            for (let [key, val] of Object.entries(map)) {
              if (ch.nodeValue.includes(`{${key}}`)) {
                ch.nodeValue = ch.nodeValue.replace(`{${key}}`, "");
                ch.parentElement.classList.add("fragment");
                for (let className of val) {
                  ch.parentElement.classList.add(className);
                }
              }
            }
          }
        }
      };
      defragment(slides[i]);
    }
    deck.layout();
  },
};
