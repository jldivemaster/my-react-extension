// const jsLocation = "./static/js/bundle.js";
// const cssLocation = null;
//
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete") {
//     if (jsLocation !== null) {
//       chrome.tabs.executeScript(tabId, {
//         file: jsLocation,
//         runAt: "document_end"
//       });
//     }
//
//     if (cssLocation !== null) {
//       chrome.tabs.executeScript(tabId, {
//         file: cssLocation,
//         runAt: "document_end"
//       });
//     }
//   }
// });

chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == “changeColor”){
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });
      }
   });
