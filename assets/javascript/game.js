// Creates an array that lists out all of the options (numbers).
var computerChoices = [1, 4, 5, 10];

// Creating variables to hold the number of wins, losses, and guessesLeft. They start at 9.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");

var computerGuess = "";


var computerGuessFunction = function() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    console.log(guessesLeft, guessesLeftText);

  // Determines which key was pressed.
  var userGuess = event.key;

  // If computerGuess is blank, set it.
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    if (computerGuess === "") {
        computerGuessFunction();
    }
    

  // Determine the outcome of the game (win/loss/guessesLeft), and increments the appropriate number
  if (userGuess === computerGuess && userGuess !== "") {
      wins++;
      guessesLeft= 9;
      userGuess = "";
      computerGuessFunction();

    } else if (guessesLeft > 0) {
      guessesLeft--;

    } else {
        console.log("reset");
      losses++;
      guessesLeft = 9;
      computerChoiceText.textContent = "Computer's Answer Was: ";
      userChoiceText.textContent = "Your Guesses so far: " + userGuess;
      computerGuessFunction();
    //   userGuess = "";
    }

    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/guessesLeft.

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    

    // Display the string of your guesses so far.
    if (guessesLeft >= 8 && guessesLeft !== 0) {
        userChoiceText.textContent = "Your Guesses so far: " + userGuess;

    } else {
    userChoiceText.textContent += ", " + userGuess;
    }

    // If out of guesses, show the computer's guess.
    if (guessesLeft === 0) {
    computerChoiceText.textContent = "Computer's Answer Was: " + computerGuess;
    computerGuessFunction();
    }
  };
