chrome.runtime.onMessage.addListener(async (message) => {
  console.log("Received URL:", message.url);  // Debugging log

  const statusElement = document.getElementById("status");
  const url = message.url;

  // Get prediction using the dummy ML model (check_url function)
  const prediction = await check_url(url);

  // Update the popup with the result
  statusElement.textContent = `URL: ${url}\nStatus: ${prediction}`;
});
