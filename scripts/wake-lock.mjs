const isSupported = "wakeLock" in navigator;

let wakeLockSentinel = null;
let autoAcquire = false;

export function requestWakeLock() {
  if (!isSupported) return;

  if (wakeLockSentinel != null) {
    releaseWakeLock();
  }
  navigator.wakeLock
    .request("screen")
    .then((sentinel) => {
      wakeLockSentinel = sentinel;
      autoAcquire = true;
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
}

export function releaseWakeLock() {
  if (!isSupported) return;

  if (wakeLockSentinel !== null) {
    wakeLockSentinel
      .release()
      .then(() => {
        autoAcquire = false;
        wakeLockSentinel = null;
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }
}

if (isSupported) {
  // if previously locked, re-acquires lock when tab gains focus
  document.addEventListener("visibilitychange", async () => {
    if (
      autoAcquire &&
      wakeLockSentinel !== null &&
      document.visibilityState === "visible"
    ) {
      requestWakeLock();
    }
  });
}
