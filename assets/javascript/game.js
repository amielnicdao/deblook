//need an array to store all the words
//need to be be able to store user input and display on screen
//need a function to determine if user guessed a letter correctly or not
//need a variable to store wins and losses
//need to be able to restart game after a win or a loss

var words = ["modern warfare", "activision", "search and destroy", "infinity ward", "deathmatch"];
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guesses = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");

function startGame() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
  }
  
  document.onkeyup = function (event) {
    
      var userGuess = event.key;

  }