// A set of routines to set up a BroadcastChannel object for coordinating
// scrolling between main and speaker views

import { performScroll } from "./perform-scroll.js";

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