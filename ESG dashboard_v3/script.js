// Replace <YOUR_API_KEY> with your actual API key
const API_KEY = "033ea80b78mshdf4b6a903e54860p1c9370jsn8efbc93b4c3e";

const submitButton = document.getElementById("submitButton");
const tickerInput = document.getElementById('tickerInput');
const scoreTitle = document.getElementById('scoreTitle');
const totalEsg = document.getElementById('totalEsg');
const environmentScore = document.getElementById('environmentScore');
const socialScore = document.getElementById('socialScore');
const governanceScore = document.getElementById('governanceScore');
const totalEsgpeer = document.getElementById('totalEsgpeer');
const environmentScorepeer = document.getElementById('environmentScorepeer');
const socialScorepeer = document.getElementById('socialScorepeer');
const governanceScorepeer = document.getElementById('governanceScorepeer');

const formatNumber = num => {
  return num.toFixed(1);
}


submitButton.addEventListener("click", () => {
  const ticker = tickerInput.value;

  // Make a request to the Yahoo Finance API
  fetch(`https://yahoo-finance127.p.rapidapi.com/esg-score/${ticker}`, {
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
      scoreTitle.innerText = `${ticker} scores`;
      document.getElementById("totalEsg").innerText = parseFloat(data.totalEsg.fmt).toFixed(1);
      document.getElementById("environmentScore").innerText = parseFloat(data.environmentScore.fmt).toFixed(1);
      document.getElementById("socialScore").innerText = parseFloat(data.socialScore.fmt).toFixed(1);
      document.getElementById("governanceScore").innerText = parseFloat(data.governanceScore.fmt).toFixed(1);
      document.getElementById("totalEsgpeer").innerText = parseFloat(data.peerEsgScorePerformance.avg).toFixed(1);
      document.getElementById("environmentScorepeer").innerText = parseFloat(data.peerEnvironmentPerformance.avg).toFixed(1);
      document.getElementById("socialScorepeer").innerText = parseFloat(data.peerSocialPerformance.avg).toFixed(1);
      document.getElementById("governanceScorepeer").innerText = parseFloat(data.peerGovernancePerformance.avg).toFixed(1);
    })
    .catch(error => {
      console.error(error);
    });
});


