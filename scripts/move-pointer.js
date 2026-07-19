// Routines to show or hide pointer and move pointer with mouse

function showPointer() {
  if (pointerVisible) {
    pointer.hidden = false;
    document.body.style.cursor = "none";
  }
  else {
    pointer.hidden = true;
    document.body.style.cursor = "auto";
  }
}

function movePointer() {
  if (pointerVisible) {
    pointer.style.top = `${currentY}px`;
    pointer.style.left = `${currentX}px`;
  }
}
