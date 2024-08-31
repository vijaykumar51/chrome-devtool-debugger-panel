// let id = null;
// const connections = {};

// chrome.runtime.onConnect.addListener((devToolsConnection) => {
//   // Assign the listener function to a variable so we can remove it later
//   let devToolsListener = (message, sender, sendResponse) => {
//     console.log("background: devToolsListener", message);
//     if (message.name == "init") {
//       id = message.tabId;
//       connections[id] = devToolsConnection;
//       // Send a message back to DevTools
//       connections[id].postMessage("Connected!");
//     }
//   };

//   // Listen to messages sent from the DevTools page
//   devToolsConnection.onMessage.addListener(devToolsListener);

//   devToolsConnection.onDisconnect.addListener(() => {
//     devToolsConnection.onMessage.removeListener(devToolsListener);
//   });
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Send the message to the DevTools panel
  console.log("background: message", message);
  chrome.runtime.sendMessage(message);
});
