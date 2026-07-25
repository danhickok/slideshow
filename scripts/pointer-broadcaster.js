// A set of routines to set up a BroadcastChannel object for coordinate moving a
// pointer around on the slide in both main and speaker views

function establishPointerChannel() {
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

function broadcastPointer() {
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
