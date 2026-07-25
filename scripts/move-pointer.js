// Routines to create, show or hide, and move pointer

// This keeps pointer from leaving right or bottom edge of window
const POINTER_EDGE = 10;

function establishLessonPointer() {
  if (!window.lessonPointer) {
    window.lessonPointer = {
      pointerVisible: false,
      currentX: 0,
      currentY: 0,
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

function togglePointer() {
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
