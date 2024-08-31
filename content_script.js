// Listen for messages posted to the window
window.addEventListener(
  "message",
  (event) => {
    // Ensure the message is from the same origin
    if (event.source !== window) {
      return;
    }

    // Ensure the message has the correct format
    if (event.data && event.data.type === "DEVTOOLS_MESSAGE") {
      console.log("content_script.js: sendMessage");
      chrome.runtime.sendMessage({ payload: event.data.payload });
    }
  },
  false
);
