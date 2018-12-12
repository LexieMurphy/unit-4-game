// Create variables to hold number values.
var wins = 0;
var losses = 0;
var userChoice = 0;
var totalScoreNumber = 0;
var computerChoice = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var playAgain = false;


// Create variables that hold references to the places in the HTML where we want to display the results/text.
var userChoiceText = document.getElementById("userChoice-number");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalScoreNumberText = document.getElementById("totalScoreNumber-text");

// Display what you want the text to say/contain.
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
computerChoiceText.textContent = "Computer Choice: " + computerChoice;
totalScoreNumberText.textContent = totalScoreNumber;


// Build out your on click functions.
window.onload = function() {
 $("#letsPlay").on("click", startGame);
 $("#crystal1").on("click", crystal1);
 $("#crystal2").on("click", crystal2);
 $("#crystal3").on("click", crystal3);
 $("#crystal4").on("click", crystal4);
};

// Run function to randomly assign values to each crystal and hide lets play button when let's plan is clicked.
function startGame() {
  crystal1 = (Math.floor(Math.random() * 10) + 1);
  crystal2 = (Math.floor(Math.random() * 10) + 1);
  crystal3 = (Math.floor(Math.random() * 10) + 1);
  crystal4 = (Math.floor(Math.random() * 10) + 1);
  playAgain = false;
  }

// When a crystal is clicked, run function to add value to totalScoreNumber.
function crystal1() {
  totalScoreNumber = (totalScoreNumber + crystal1);
}
function crystal2() {
  totalScoreNumber = (totalScoreNumber + crystal2);
}
function crystal3() {
  totalScoreNumber = (totalScoreNumber + crystal3);
}
function crystal4() {
  totalScoreNumber = (totalScoreNumber + crystal4);
}

// If totalScoreNumber is greater than computerChoice then alert lost, add a loss, and confirm if want to play again.
if (totalScoreNumber > computerChoice) {
  alert("You lost!");
  loss++;
  confirm("Do you want to play again?", playAgain);
}

// If totalScoreNumber is equal to computerChoice then alert won, add a win, and ask if want to play again.
if (totalScoreNumber!== 0 && totalScoreNumber === computerChoice) {
  alert("You won!");
  wins++;
  confirm("Do you want to play again?", playAgain);
}

// if want to play again is true - reset values.
if (playAgain === true) {
  var userChoice = 0;
  var totalScoreNumber = 0;
  var computerChoice = 0;
};

