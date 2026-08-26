// A routine to scroll the contents of the <div> element with .scrollable class
// based on given direction

import Reveal from "../dist/reveal.mjs";

export function performScroll(direction) {
  const isUpcomingSlide = window.frameElement?.parentElement?.id == "upcoming-slide";
  if (isUpcomingSlide) return;

  const currentSlide = Reveal.getCurrentSlide();
  const scrollableDiv = currentSlide.querySelector(".scrollable");
  if (!scrollableDiv) return;

  const isAtBottom = scrollableDiv.scrollHeight - scrollableDiv.scrollTop <=
    scrollableDiv.clientHeight + 1;
  const isAtTop = scrollableDiv.scrollTop <= 0;

  // Scroll amount leaves about one line of text from the previous page
  const scrollAmount = scrollableDiv.clientHeight - 180;

  switch (direction) {
    case "up":
      if (!isAtTop) {
        scrollableDiv.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      }
      break;

    case "down":
      if (!isAtBottom) {
        scrollableDiv.scrollBy({ top: scrollAmount, behavior: "smooth" });
      }
      break;
  }
}

// routines to set up a BroadcastChannel object for coordinating
// scrolling between main and speaker views

export function establishScrollChannel() {
  if (!window.scrollChannel) {
    window.scrollChannel = new BroadcastChannel("passage-scroller");

    window.scrollChannel.onmessage = (ev) => {
      const direction = ev.data;
      if (direction) {
        performScroll(direction);
      }
    };
  }
}

export function broadcastScroll(direction) {
  establishScrollChannel();
  window.scrollChannel.postMessage(direction);
}
