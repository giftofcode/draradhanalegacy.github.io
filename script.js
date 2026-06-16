 function unlockLecture() {
  const password = document.getElementById("passwordInput").value;
  const lectureBox = document.getElementById("lectureBox");

  if (password === "harshit") {
    lectureBox.classList.remove("hidden");
    alert("Lecture Section Open हो गया है।");
  } else {
    alert("Password गलत है।");
  }
}

function generateLecture() {
  const topics = [
    "स्वामी दयानंद सरस्वती और शिक्षा",
    "आर्य समाज के विचार और आज का समाज",
    "भगवान राम से जीवन की सीख",
    "भगवान कृष्ण और ज्ञान",
    "वेदांत और दैनिक जीवन",
    "उपनिषद और आत्मिक शांति",
    "डॉ. ए. पी. जे. अब्दुल कलाम से प्रेरणा",
    "रानी लक्ष्मीबाई और साहस",
    "बच्चों में अच्छे संस्कार",
    "महिला सशक्तिकरण"
  ];

  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  document.getElementById("lectureResult").innerHTML =
    "आज का Lecture Topic: <strong>" + randomTopic + "</strong><br><br>" +
    "इस विषय पर 10 मिनट का प्रेरणादायक हिंदी lecture तैयार किया जाएगा।";
}
