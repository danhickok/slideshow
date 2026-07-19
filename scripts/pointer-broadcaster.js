// A set of routines to set up a BroadcastChannel object for coordinate moving a
// pointer around on the slide in both main and speaker views

function establishPointerChannel() {
  if (!window.pointerChannel) {
    window.pointerChannel = new BroadcastChannel('pointer');

    window.pointerChannel.onmessage = (ev) => {
      pointerVisible = ev.data.visible;

      const sourceWidth = ev.data.sourceWidth;
      const sourceHeight = ev.data.sourceHeight;

      const scaledX = Math.floor(ev.data.x * window.innerWidth / sourceWidth);
      const scaledY = Math.floor(ev.data.y * window.innerHeight / sourceHeight);

      currentX = Math.min(window.innerWidth - POINTER_EDGE, Math.max(0, scaledX));
      currentY = Math.min(window.innerHeight - POINTER_EDGE, Math.max(0, scaledY));

      showPointer();
      movePointer();
    }
  }
}

function broadcastPointer() {
  window.pointerChannel.postMessage({
    visible: pointerVisible,
    x: currentX,
    y: currentY,
    sourceWidth: window.innerWidth,
    sourceHeight: window.innerHeight,
  });
}

