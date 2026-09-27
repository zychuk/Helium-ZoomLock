// Helium ZoomLock: blocks keyboard, mouse-wheel and trackpad-pinch zoom.
// Zooming from the browser's own UI (menu / address-bar zoom buttons) still
// works, because those actions never pass through the page as events.

// Physical keys (layout-independent) that trigger zoom
const ZOOM_CODES = new Set([
  "Equal", "Minus", "Digit0",
  "NumpadAdd", "NumpadSubtract", "Numpad0"
]);

// Characters that trigger zoom (covers non-US layouts where "+" sits elsewhere)
const ZOOM_KEYS = new Set(["=", "+", "-", "0"]);

// Block Ctrl/Cmd + Plus, Minus, Zero
window.addEventListener("keydown", (e) => {
  if (!(e.ctrlKey || e.metaKey)) return; // Ctrl on Win/Linux, Cmd on macOS
  if (ZOOM_CODES.has(e.code) || ZOOM_KEYS.has(e.key)) {
    e.preventDefault(); // cancels browser zoom; the page still receives the event
  }
}, { capture: true });

// Block Ctrl + wheel (Chrome also reports trackpad pinch as wheel + ctrlKey)
window.addEventListener("wheel", (e) => {
  if (e.ctrlKey) e.preventDefault();
}, { capture: true, passive: false });
