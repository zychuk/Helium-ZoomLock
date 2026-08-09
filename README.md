# Helium ZoomLock 🔍🔒

> A lightweight Chromium extension that locks your browser's zoom level at exactly 100%.

This extension strictly disables the browser's native zooming inputs (both keyboard shortcuts and mouse wheel zooming). It was specifically built to prevent accidental zooming while using locally hosted Progressive Web Apps (PWAs) like ComfyUI, ensuring the interface remains pixel-perfect without interfering with the app's internal canvas controls.

---

## Features

*   **Blocks** `Ctrl` + `Mouse Wheel` zooming.
*   **Blocks** `Ctrl` + `Plus (+)` / `Equals (=)` zooming in.
*   **Blocks** `Ctrl` + `Minus (-)` zooming out.
*   **Blocks** `Ctrl` + `Zero (0)` zoom resetting.
*   **Runs silently** in the background via Manifest V3.

---

## Installation

Because this is a custom local extension, you will install it directly from the source code using Chrome/Helium's "Developer mode".

### 1. Get the Code
Clone this repository to your local machine:

```bash
git clone git@github.com:zychuk/Helium-ZoomLock.git
```

### 2. Load the Extension
1. Open your Chromium-based browser (Helium, Chrome, Brave, etc.).
2. Navigate to the extensions page by typing `helium://extensions` (or `chrome://extensions`) into the address bar.
3. In the top right corner, toggle **Developer mode** to **ON**.
4. A new menu bar will appear at the top left. Click the **Load unpacked** button.
5. In the file browser, select the `Helium-ZoomLock` folder that you cloned in Step 1.

### 3. Use It
The extension is now installed and active across your browser and any installed Web Apps/PWAs tied to that browser profile. If you have any Web Apps currently open (like ComfyUI), close and relaunch them for the script to take effect.

> **Note:** If you ever modify the code in `content.js`, just click the circular **Refresh** icon on the extension's card in your extensions page to instantly apply the changes.
