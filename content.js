// Block Ctrl + Scroll Wheel
window.addEventListener("wheel", function(e) {
    if (e.ctrlKey) { e.preventDefault(); }
}, { passive: false });

// Block Ctrl + Plus, Minus, and Zero keys
window.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.key === "=" || e.key === "-" || e.key === "0" || e.key === "+")) {
        e.preventDefault();
    }
}, { passive: false });
