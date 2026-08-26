// Routines to create, show or hide, and move pointer

import Reveal from "../dist/reveal.mjs";

// This keeps pointer from leaving right or bottom edge of window
const POINTER_EDGE = 10;

export function establishLessonPointer() {
  if (!window.lessonPointer) {
    window.lessonPointer = {
      pointerVisible: false,
      currentX: -1,
      currentY: -1,
      originalCursorState: document.body.style.cursor,
    };

    const pointerElement = document.createElement("img");
    pointerElement.id = "lesson-pointer";
    pointerElement.src = "images/finger.png";
    pointerElement.width = 200;
    pointerElement.height = 187;
    pointerElement.style.display = "none";
    pointerElement.style.position = "absolute";
    pointerElement.style.zIndex = "999999";
    pointerElement.style.top = "0px";
    pointerElement.style.left = "0px";

    window.document.body.appendChild(pointerElement);

    window.document.addEventListener("mousemove", (ev) => {
      updatePointer(ev.clientX, ev.clientY);
      showPointer();
      movePointer();
      broadcastPointer();
    });
  }
}

function updatePointer(x, y) {
  window.lessonPointer.currentX = Math.min(
    window.innerWidth - POINTER_EDGE,
    Math.max(0, x),
  );
  window.lessonPointer.currentY = Math.min(
    window.innerHeight - POINTER_EDGE,
    Math.max(0, y),
  );
}

export function togglePointer() {
  window.lessonPointer.pointerVisible = !window.lessonPointer.pointerVisible;

  showPointer();
  movePointer();
  broadcastPointer();
}

function showPointer() {
  const pointerElement = window.document.getElementById("lesson-pointer");
  const isUpcomingSlide = window.frameElement?.parentElement?.id == "upcoming-slide";

  if (window.lessonPointer.pointerVisible && !isUpcomingSlide) {
    pointerElement.style.display = "block";
    document.body.style.cursor = "none";
  } else {
    pointerElement.style.display = "none";
    document.body.style.cursor = window.lessonPointer.originalCursorState;
  }
}

function movePointer() {
  const pointerElement = window.document.getElementById("lesson-pointer");

  if (window.lessonPointer.pointerVisible) {
    pointerElement.style.top = `${window.lessonPointer.currentY}px`;
    pointerElement.style.left = `${window.lessonPointer.currentX}px`;
  }
}

// routines to set up a BroadcastChannel object for coordinate moving a
// pointer around on the slide in both main and speaker views

export function establishPointerChannel() {
  establishLessonPointer();

  if (!window.pointerChannel) {
    window.pointerChannel = new BroadcastChannel("pointer");

    window.pointerChannel.onmessage = (ev) => {
      const slideRect = Reveal.getCurrentSlide().getBoundingClientRect();

      window.lessonPointer.pointerVisible = ev.data.visible;

      const sourceSlideX = ev.data.slideX;
      const sourceSlideY = ev.data.slideY;
      const sourceSlideWidth = ev.data.slideWidth;
      const sourceSlideHeight = ev.data.slideHeight;

      const factorX = slideRect.width / sourceSlideWidth;
      const factorY = slideRect.height / sourceSlideHeight;

      const destX = Math.floor((ev.data.x - sourceSlideX) * factorX) + slideRect.x;
      const destY = Math.floor((ev.data.y - sourceSlideY) * factorY) + slideRect.y;

      updatePointer(destX, destY);
      showPointer();
      movePointer();
    };
  }
}

export function broadcastPointer() {
  const slideRect = Reveal.getCurrentSlide().getBoundingClientRect();

  window.pointerChannel.postMessage({
    visible: window.lessonPointer.pointerVisible,
    x: window.lessonPointer.currentX,
    y: window.lessonPointer.currentY,
    slideX: slideRect.x,
    slideY: slideRect.y,
    slideWidth: slideRect.width,
    slideHeight: slideRect.height,
  });
}

