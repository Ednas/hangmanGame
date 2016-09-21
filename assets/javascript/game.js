// .scoreBoard
// .wins
// .currentWord
// .guessesRemaining
// .guessed


//Made the variables first to use in the functions
//Array of fruitwords
var fruitWords = ['banana', 'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'pineapple'];
var blanksAndSuccess = []; //Correct guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen

// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

//array for users guessed letters
var guessedLetter = [];
//array for users correct guesses
var correctLetter = [];
//guessed letters that are incorrect
var incorrectGuess = [];

//Below is the functionality of the game
function startGame() {
  numGuesses = 9;
  //Selects a fruitword at random
  var currentWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];

  //Splits the current word into letters, so that you can match the users guesses to the letters of the word
  var currentLetters = currentWord.split("");

  //Need to know how many blanks
  var blanks = currentWord.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccess.push("_")
  };

  console.log("Word length is " + blanks);
  console.log(currentLetters);
  console.log(blanksAndSuccess);
  document.getElementById('currentWord').innerHTML = "The current word " + blanksAndSuccess.join(" ");
  document.getElementById('guessesRemaining').innerHTML = "Guesses left: " + numGuesses;
	//document.getElementById('').innerHTML = 
};

//Restarts
// function checkLetters(letters){

// };
//Upon finishing
// function round (){

// };





//Making the stuff run

//Calling the startGame function
startGame();

//once you click a button, makes it lowercase and adds to the user guess element ID
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

  guessedLetter.push(userGuess);
  document.getElementById('guessed').innerHTML = "Letters Already Guessed: " + guessedLetter.join(" ");
//  checkLetters(letterGuessed); // runs the code to check for correctness 
//  round();

};

