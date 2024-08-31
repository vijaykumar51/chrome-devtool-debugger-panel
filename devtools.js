let youClickedOn;
chrome.devtools.panels.create(
  "Sample Panel",
  "icon.png",
  // "panel.html",
  "tabpanel-ui/dist/index.html",
  (panel) => {}
);

// Create a connection to the background service worker
const backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page",
});
