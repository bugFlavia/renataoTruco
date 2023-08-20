window.onload = () =>{
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

const team1NameInput = document.getElementById('team1Name');
const team2NameInput = document.getElementById('team2Name');
const team1ScoreDisplay = document.getElementById('team1Score');
const team2ScoreDisplay = document.getElementById('team2Score');
const team1WinsDisplay = document.getElementById('team1Wins');
const team2WinsDisplay = document.getElementById('team2Wins');

let team1Score = 0;
let team2Score = 0;
let team1Wins = 0;
let team2Wins = 0;

document.getElementById('point1').addEventListener('click', () => {
  team1Score += 1;
  updateScore();
});

document.getElementById('point3').addEventListener('click', () => {
  team1Score += 3;
  updateScore();
});

document.getElementById('point6').addEventListener('click', () => {
  team1Score += 6;
  updateScore();
});

document.getElementById('point12').addEventListener('click', () => {
  team1Score += 12;
  updateScore();
});

document.getElementById('reset').addEventListener('click', () => {
  team1Score = 0;
  team2Score = 0;
  updateScore();
});

function updateScore() {
  team1ScoreDisplay.textContent = team1Score;
  team2ScoreDisplay.textContent = team2Score;

  if (team1Score >= 12) {
    team1Wins += 1;
    team1WinsDisplay.textContent = team1Wins;
    resetGame();
  } else if (team2Score >= 12) {
    team2Wins += 1;
    team2WinsDisplay.textContent = team2Wins;
    resetGame();
  }
}

function resetGame() {
  team1Score = 0;
  team2Score = 0;
  team1ScoreDisplay.textContent = '0';
  team2ScoreDisplay.textContent = '0';
}
