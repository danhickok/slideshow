// A set of routines to set up a BroadcastChannel object for coordinate moving a
// pointer around on the slide in both main and speaker views

function establishPointerChannel() {
  establishLessonPointer();

  if (!window.pointerChannel) {
    window.pointerChannel = new BroadcastChannel("pointer");

    window.pointerChannel.onmessage = (ev) => {
      window.lessonPointer.pointerVisible = ev.data.visible;

      const sourceWidth = ev.data.sourceWidth;
      const sourceHeight = ev.data.sourceHeight;

      const currentSlide = Reveal.getCurrentSlide();

      const factorX = window.innerWidth / sourceWidth;
      const factorY =  window.innerHeight / sourceHeight;

      const scaledX = Math.floor(ev.data.x * factorX);
      const scaledY = Math.floor(ev.data.y * factorY);

      updatePointer(scaledX, scaledY);
      showPointer();
      movePointer();
    };
  }
}

function broadcastPointer() {
  window.pointerChannel.postMessage({
    visible: window.lessonPointer.pointerVisible,
    x: window.lessonPointer.currentX,
    y: window.lessonPointer.currentY,
    sourceWidth: window.innerWidth,
    sourceHeight: window.innerHeight,
  });
}
