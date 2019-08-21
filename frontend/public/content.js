// Content scripts can access Chrome APIs used by their parent extension by exchanging messages with the extension.
// They can also access the URL of an extension's file with chrome.runtime.getURL() and use the result the same as other URLs.
// Code for displaying <extensionDir>/images/myimage.png:
//   var imgURL = chrome.runtime.getURL("images/myimage.png");
//   document.getElementById("someImage").src = imgURL;

// Additionally, content script can access the following chrome APIs directly:
//
// i18n
// storage
// runtime:
// connect
// getManifest
// getURL
// id
// onConnect
// onMessage
// sendMessage
