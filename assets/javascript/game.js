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
var computerGuess = 0;
var userGuess = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");
var computerGuess = words[Math.floor(Math.random() * words.length)];

function startGame() {
     computerGuess = words[Math.floor(Math.random() * words.length)];
  }

  for (var i = 0; i < computerGuess.length; i++) {
      guesses.push("_");
  }
  
  document.onkeyup = function (event) {
    
    userGuess = event.key;    
  }

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersGuessedText.textContent = "Your guesses: ";
var newguesses = guesses.join(" ");

guesses.push(userGuess);
document.getElementById("allguesses").innerHTML = newguesses;


startGame()

