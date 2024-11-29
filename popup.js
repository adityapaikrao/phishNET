document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentUrl = tabs[0].url;
    checkUrl(currentUrl).then(data => {
      var resultElement = document.getElementById('result');
      if (data.is_phishing) {
        resultElement.textContent = 'Warning: This may be a phishing URL!';
        resultElement.style.color = 'red';
      } else {
        resultElement.textContent = 'This website is safe to browse.';
        resultElement.style.color = 'green';
      }
    });
  });
});