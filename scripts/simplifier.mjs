// A plugin to convert simple constructs into ones Reveal.js can understand

const Simplifier = {
  id: "simplifier",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let i = 0; i < slides.length; ++i) {
      // welcome slide
      if (slides[i].querySelector("lesson-welcome")) {
        slides[i].setAttribute("data-state", "lesson-welcome-background");
      }

      // title slide
      if (slides[i].querySelector("lesson-title")) {
        slides[i].setAttribute("data-state", "lesson-title-background");
      }

      // section slides
      if (slides[i].querySelector("lesson-section")) {
        slides[i].setAttribute("data-transition", "slide");
        slides[i].setAttribute("data-state", "lesson-section-background");
      }

      // "wide" elements fit across the entire slide
      const wides = slides[i].querySelectorAll("wide");
      for (let wide of wides) {
        wide.classList.add("r-fit-text");
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
      const enfragment = (node) => {
        for (let ch of node.childNodes) {
          enfragment(ch);
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
      enfragment(slides[i]);
    }
    deck.layout();
  },
};

export default Simplifier;

