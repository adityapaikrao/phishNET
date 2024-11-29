chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Simulate sending a fixed URL for testing purposes
  if (changeInfo.status === "complete" && tab.url) {
    chrome.runtime.sendMessage({ url: "https://www.google.com" });
  }
});
