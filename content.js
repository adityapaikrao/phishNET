chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'showNotification') {
      var notification = document.createElement('div');
      notification.style.position = 'fixed';
      notification.style.top = '0';
      notification.style.left = '0';
      notification.style.right = '0';
      notification.style.padding = '10px';
      notification.style.zIndex = '9999';
      notification.style.textAlign = 'center';
      
      if (request.is_phishing) {
        notification.style.backgroundColor = 'red';
        notification.textContent = 'Warning: This may be a phishing URL!';
      } else {
        notification.style.backgroundColor = 'green';
        notification.textContent = 'This website is safe to browse.';
      }
      
      document.body.appendChild(notification);
      setTimeout(function() {
        document.body.removeChild(notification);
      }, 5000);
    }
  });