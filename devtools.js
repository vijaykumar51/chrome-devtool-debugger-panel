let youClickedOn;
chrome.devtools.panels.create(
  "RSCore debugger",
  "vite.svg",
  "tabpanel-ui/dist/index.html",
  // "panel.html",
  (panel) => {}
);

// Create a connection to the background service worker
const backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page",
});
