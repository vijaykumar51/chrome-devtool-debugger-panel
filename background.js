chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Send the message to the DevTools panel
  console.log("background: message", message);
  chrome.runtime.sendMessage(message);
});
