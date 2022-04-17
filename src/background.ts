// background.js
import content from "./content";

declare const chrome;

export default () => {
  // Wrap in an onInstalled callback in order to avoid unnecessary work
  // every time the background script is run
  chrome.runtime.onInstalled.addListener(() => {
    console.log("[bg] installed!");

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      console.log("[bg] onUpdated!");

      chrome.scripting.executeScript({
        target: { tabId },
        // files: ["content.js"],
        func: content,
      });
    });
  });

  // disabled when action.default_popup exists
  // chrome.action.onClicked.addListener(async () => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     files: ["content.js"],
  //   });
  // });
};
