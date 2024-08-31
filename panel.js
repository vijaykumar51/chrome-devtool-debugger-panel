chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message.text;
    messagesDiv.appendChild(messageElement);
  });
  