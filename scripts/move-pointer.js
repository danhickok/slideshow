// Routines to create, show or hide, and move pointer

// This keeps pointer from leaving right or bottom edge of window
const POINTER_EDGE = 10;

function establishLessonPointer() {
  if (!window.pointerState) {
    window.lessonPointer = {
      pointerVisible: false,
      currentX: 0,
      currentY: 0,
      originalCursorState: document.body.style.cursor,
    };

    window.lessonPointer.pointer = document.createElement("img");
    window.lessonPointer.pointer.src = "images/finger.png";
    window.lessonPointer.pointer.width = 200;
    window.lessonPointer.pointer.height = 187;
    window.lessonPointer.pointer.hidden = true;

    document.body.appendChild(window.lessonPointer.pointer);
  }
}

function updatePointer(x, y) {
  establishLessonPointer();

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
  establishLessonPointer();

  window.lessonPointer.pointerVisible = !window.lessonPointer.pointerVisible;
  console.log(`Pointer is now ${window.lessonPointer.pointerVisible ? '' : 'in'}visible`);
}

function showPointer() {
  establishLessonPointer();

  if (window.lessonPointer.pointerVisible) {
    window.lessonPointer.pointer.hidden = false;
    document.body.style.cursor = "none";
  } else {
    window.lessonPointer.pointer.hidden = true;
    document.body.style.cursor = window.lessonPointer.originalCursorState;
  }
}

function movePointer() {
  establishLessonPointer();

  if (window.lessonPointer.pointerVisible) {
    window.lessonPointer.pointer.style.top = `${window.lessonPointer.currentY}px`;
    window.lessonPointer.pointer.style.left = `${window.lessonPointer.currentX}px`;
    console.log(`Pointer moved to X:${window.lessonPointer.currentX} Y:${window.lessonPointer.currentY}`)
  }
}
