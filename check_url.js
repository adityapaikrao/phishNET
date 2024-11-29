async function check_url(url) {
    // Dummy logic for testing
    if (url.includes("google.com")) {
      return "Phishing";
    } else if (url.includes("youtube.com")) {
      return "Safe";
    } else {
      return "Unknown";
    }
  }
  