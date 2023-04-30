// Replace <YOUR_API_KEY> with your actual API key
const API_KEY = "033ea80b78mshdf4b6a903e54860p1c9370jsn8efbc93b4c3e";

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  const tickerInput = document.getElementById("tickerInput").value;

  // Make a request to the Yahoo Finance API
  fetch(`https://yahoo-finance127.p.rapidapi.com/esg-score/${tickerInput}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "yahoo-finance127.p.rapidapi.com",
      "useQueryString": true
    }
  })
    .then(response => response.json())
    .then(data => {
      // Display the 'totalEsg', 'environmentScore.fmt', 'socialScore.fmt', and 'governmentScore.fmt' endpoints
      document.getElementById("totalEsg").innerText = data.totalEsg.fmt;
      document.getElementById("environmentScore").innerText = data.environmentScore.fmt;
      document.getElementById("socialScore").innerText = data.socialScore.fmt;
      document.getElementById("governanceScore").innerText = data.governanceScore.fmt;
    })
    .catch(error => {
      console.error(error);
    });
});

