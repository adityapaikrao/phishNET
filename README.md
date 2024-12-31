# phishNET: A chrome extension for phishing URL detection

## Table of Contents
- [Problem Description](#problem-description)
- [Solution Overview](#solution-overview)
- [PhishNET in action!](#phishnet-in-action)

---

## Problem Description
A phishing attack, wherein an attacker intends to solicit sensitive information, such as authentication credentials, by masquerading as a trusted party, has particularly emerged as a major source of concern for individuals and organizations alike. An <a href='https://docs.apwg.org/reports/apwg_trends_report_q4_2023.pdf'>analysis</a> by APWG (AntiPhishing Working group) claimed over 1 million phishing attacks in the fourth quarter of 2023 alone, with 2023 being the overall worst year on record for phishing attacks.[1]

**phishNET** is our attempt to provide a lightweight, real-time detection of malcious URLs to enable safer browsing.

---

## Solution Overview
phishNET combines machine learning and user-friendly design to detect phishing URLs efficiently. This Chrome extension evaluates the safety of a URL based on features extracted from the link and provides instant feedback to the user.

Key components of the solution include:
1. A machine learning model trained on a comprehensive dataset of legitimate and phishing URLs.
2. A Chrome extension that seamlessly integrates with the browser to analyze visited URLs.
3. A backend API that supports real-time predictions.
   
---

## Implementation
### Machine Learning Model
- **Model Type**: The machine learning model is trained to classify URLs as phishing or legitimate.
- **Dataset**: A labeled dataset containing examples of phishing and legitimate URLs was used for training.

### Chrome Extension
- **Frontend**: Built using HTML, CSS, and JavaScript to provide a user-friendly interface.
- **Backend**: Integrates the phishing detection model to process and analyze URLs using a Flask API
- **Communication**: Utilizes Chrome's extension APIs to interact with the browser and fetch URL data.

---

## PhishNET in action
*Screenshots and GIFs demonstrating the extension in action will be added here.*

---
<!--
# phishNET: A Phishing URL Detection Chrome Extension

## Table of Contents
- [Problem Description](#problem-description)
- [Solution Overview](#solution-overview)
- [Features](#features)
- [Implementation](#implementation)
- [Dataset and Preprocessing](#dataset-and-preprocessing)
- [Model Training and Development](#model-training-and-development)
- [Results](#results)
- [Installation Guide](#installation-guide)
- [Usage](#usage)
- [PhishNET in Action](#phishnet-in-action)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Description
Phishing attacks have emerged as a major cybersecurity concern, exploiting unsuspecting users by masquerading as trustworthy entities. According to the Anti-Phishing Working Group, over 1 million phishing attacks occurred in the last quarter of 2023, marking a record high. Thus, it is crucial to develop models that can effectively identify phishing URLs to safeguard users from such threats.

**phishNET** is a Chrome extension designed to provide real-time detection of malicious URLs, enabling safer web browsing.

---

## Solution Overview
**phishNET** combines machine learning and Chrome extension capabilities to detect phishing URLs with high accuracy. The tool processes URL characteristics to classify them as either legitimate or phishing.

Key components include:
1. A machine learning model trained on a comprehensive dataset of labeled URLs.
2. Chrome extension integration for real-time URL analysis.
3. Scalable backend support for high performance (optional).

---

## Features
- **Real-time Detection**: Provides immediate feedback on URL safety.
- **Interactive Alerts**: Notifies users about suspicious links.
- **Lightweight Design**: Ensures fast and seamless performance.
- **Customizable Options**: Lets users enable/disable the extension easily.
- **Privacy Assurance**: User data remains secure.

---

## Implementation
### Chrome Extension
- Built using HTML, CSS, and JavaScript.
- Interacts with Chrome's APIs to fetch and analyze URL data.
- Displays feedback on URL safety through a clean, interactive UI.

### Backend and Machine Learning Model
- **Features Extracted**:
  - URL length, number of subdomains, presence of special characters.
  - Entropy, tokenization, and presence of IP addresses.
  - SSL certificate validation.
- **Model**:
  - Logistic Regression implemented in PySpark for scalability.
  - Additional classifiers explored: Random Forest, Gradient Boosted Trees.
  - Final model achieved 88.48% accuracy in testing.

---

## Dataset and Preprocessing
### Dataset
The dataset contains over 549,000 labeled URLs, sourced from [Kaggle](https://www.kaggle.com/datasets/taruntiwarihp/phishing-site-urls). Labels include:
- **Good**: Legitimate URLs.
- **Bad**: Phishing URLs.

### Preprocessing Steps
1. Removed duplicates and outliers.
2. Tokenized URLs into components (domain, path, query).
3. Extracted features such as entropy, number of subdomains, and special characters.
4. Applied TF-IDF vectorization for textual data.
5. Addressed dataset imbalance with appropriate sampling methods.

---

## Model Training and Development
The dataset was split into training (70%) and testing (30%) sets. Key steps include:
1. Feature engineering to enhance predictive performance.
2. Model evaluation using metrics such as accuracy, precision, recall, and F1-score.
3. Utilization of PySpark for distributed model training to handle large-scale data.

### Results from Key Classifiers
- **Logistic Regression (PySpark)**:
  - Accuracy: 88.48%
  - F1-Score: 87.36%
- **Gradient Boosted Trees (PySpark)**:
  - Accuracy: 89.81%
  - F1-Score: 88.90%

---

## Results
### Key Findings
1. URLs with higher entropy and numerous subdomains are more likely to be phishing.
2. Specific patterns in special characters strongly correlate with phishing attempts.
3. PySpark implementations demonstrated superior scalability for large datasets.

### Comparison of PySpark and Non-PySpark Approaches
- PySpark offers scalability with distributed training, albeit at a higher computational cost.
- Non-PySpark implementations excel in lightweight tasks and faster runtimes for smaller datasets.

---

## Installation Guide
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/phishNET.git
   ```
2. Navigate to `chrome://extensions` in Google Chrome.
3. Enable "Developer Mode" and click "Load Unpacked."
4. Select the directory containing the extension files.
5. The extension should now appear in your Chrome toolbar.

---

## Usage
1. Activate the extension via the Chrome toolbar.
2. Visit any website; the extension will analyze the URL in real time.
3. Notifications will alert you if the site is flagged as malicious.

---

## PhishNET in Action
*Screenshots and GIFs demonstrating extension functionality will be added here.*

---

## Contributing
We welcome contributions to improve phishNET. To contribute:
1. Fork the repository and create a new branch.
2. Implement your feature or fix and submit a pull request.
3. Ensure all changes adhere to the repository's style and guidelines.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

-->
