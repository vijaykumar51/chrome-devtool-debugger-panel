chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("panel.js: adding message to screen");
  const messagesDiv = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = message.text;
  messagesDiv.appendChild(messageElement);
});
