chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    checkUrl(tab.url).then(data => {
      chrome.tabs.sendMessage(tabId, {
        action: 'showNotification',
        is_phishing: data.is_phishing
      });
    });
  }
});