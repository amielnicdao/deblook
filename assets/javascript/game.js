//need an array to store all the words
//need to be be able to store user input and display on screen
//need a function to determine if user guessed a letter correctly or not
//need a variable to store wins and losses
//need to be able to restart game after a win or a loss

var words = ["modern warfare", "activision", "search and destroy", "infinity ward", "deathmatch"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guesses = [];
var rightGuesses = [];
var guessedLetter = 0; //added

var rightGuessesText = document.getElementById("rightguesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");
var computerGuess;

function startGame() {
  computerGuess = words[Math.floor(Math.random() * words.length)];
  console.log(computerGuess);

  for (var i = 0; i < guessedLetter; i++) {
    guesses.push("_");
  }
}



document.onkeyup = function (event) {

  var userGuess = event.key;

  


  // if (userGuess === computerGuess) {
  //   wins++;
  //   guessesLeft = 15;
  //   guesses = [];
  //   startGame()
  // } if (userGuess !== computerGuess) {
  //   guessesLeft--;
  // } if (guessesLeft === 0) {
  //   losses++;
  //   guessesLeft = 15;
  //   startGame()
  //   guesses = [];
  // }

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  lettersGuessedText.textContent = "Your guesses: ";
  var newguesses = guesses.join(", ");

  guesses.push(userGuess);
  document.getElementById("allguesses").innerHTML = newguesses;
};

startGame()