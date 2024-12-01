function checkUrl(url) {
    return new Promise((resolve, reject) => {
       // Make a POST request to your Flask API with the URL
       fetch('http://192.168.1.129:5432/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            url: url
        })
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the Flask API returns a JSON with a 'prediction' key
        const isPhishing = data.prediction === 1; // Adjust according to your Flask API response
        resolve({ is_phishing: isPhishing });
    })
    .catch(error => {
        reject(error);
    });
});}
