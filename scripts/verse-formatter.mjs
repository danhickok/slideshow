// A plugin for changing verse numbers in square brackets into <verse> elements

const leftSingleQuote = "‘";
const rightSingleQuote = "’";
const leftDoubleQuote = "“";
const rightDoubleQuote = "”";

// we only process the contents of these tags
const tags = ["P", "SPAN"];

function recurl(node) {
  for (let ch of node.childNodes) {
    if (ch.nodeType == Node.TEXT_NODE && tags.includes(ch.parentElement.tagName)) {
      const c = ch.nodeValue.split("");
      for (let i = 0; i < c.length; ++i) {
        switch (c[i]) {
          case "'":
            // open single quote
            if (i == 0 || !/[A-Za-z]/.test(c[i - 1])) {
              c[i] = leftSingleQuote;
            }

            // close single quote
            if (i == c.length - 1 || !/[A-Za-z]/.test(c[i + 1])) {
              c[i] = rightSingleQuote;
            }

            // embedded apostrophe
            if (
              i > 0 &&
              i < c.length - 1 &&
              /[A-Za-z]/.test(c[i - 1]) &&
              /[A-Za-z]/.test(c[i + 1])
            ) {
              c[i] = rightSingleQuote;
            }
            break;

          case '"':
            // open double quote
            if (i == 0 || !/[A-Za-z]/.test(c[i - 1])) {
              c[i] = leftDoubleQuote;
            }

            // close double quote
            if (i == c.length - 1 || !/[A-Za-z]/.test(c[i + 1])) {
              c[i] = rightDoubleQuote;
            }
            break;
        }
      }
      ch.nodeValue = c.join("");
    }
    recurl(ch);
  }
}

const VerseFormatter = {
  id: "verse-formatter",
  init: (deck) => {
    const slides = deck.getSlides();
    for (let slide of slides) {
      let passage = slide.querySelector("passage");
      if (passage) {
        let content = passage.innerHTML;
        passage.innerHTML = content.replace(/\[([0-9]+)\]/g, "<verse>$1</verse>");
        recurl(passage);
      }
    }
    deck.layout();
  },
};

export default VerseFormatter;
