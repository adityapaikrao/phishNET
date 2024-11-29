function checkUrl(url) {
    return new Promise((resolve, reject) => {
      const lowercaseUrl = url.toLowerCase();
      const isPhishing = lowercaseUrl.includes('google.com');
      resolve({ is_phishing: isPhishing });
    });
  }