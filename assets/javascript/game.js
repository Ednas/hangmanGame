//Made the variables first to use in the functions
//Array of fruitwords
var fruitWords = ['banana', 'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'pineapple'];
var blanksAndSuccess = []; //Correct guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen
var currentWord = "";
var currentLetters = [];
// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;

//array for users guessed letters
var guessedLetter = [];
//array for users correct guesses
var correctLetter = [];
//guessed letters that are incorrect
var incorrectGuess = [];

//Below is the functionality of the game
function startGame() {
  numGuesses = 12;
  //Selects a fruitword at random
  var currentWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];

  //Splits the current word into letters, so that you can match the users guesses to the letters of the word
  var currentLetters = currentWord.split("");

  //Need to know how many blanks
  var blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccess.push("_")
  };
  console.log(currentWord);
  console.log(blanksAndSuccess);
  document.getElementById('guessesRemaining').innerHTML = numGuesses + "Yum";
  document.getElementById('currentWord').innerHTML = "Find the missing letters: " + blanksAndSuccess.join(" ");
  document.getElementById('guessesRemaining').innerHTML = "Guesses left: " + numGuesses;
};

//Checks if users letter is in the word
function checkLetters(letter) {
  //using Boolean to check if the letter is in the word
  var letterInWord = false;
  //loop that goes through the length of the word
  for (var i = 0; i < blanks; i++) {
    if (currentWord[i] == letter) {
      letterInWord = true;
      console.log(letterInWord + "woof");
    }
  };
  console.log(currentWord + " something");
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {
      //blanks[i]

      if (currentWord[i] == letter) {
        blanksAndSuccess[i] = letter
        console.log("Triggered 3");
      }
    }
    console.log(blanksAndSuccess);

  } else {
    incorrectGuess.push(letter);
    numGuesses--;
    console.log("that was incorrect" + numGuesses + " are remaining");
  };
};
//Upon finishing
function round() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  //document.getElementById("scoreBoard").innerHTML= numGuesses;
  //	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); // This will print the array of guesses and blanks onto the page
  //	document.getElementById("guessedWrong").innerHTML = incorrectGuess.join(" "); // this will print the wrong guesses onto the page.

  // If we have gotten all the letters to match the solution... 
  if (currentLetters.toString() == blanksAndSuccess.toString()) {
    winCounter++; // add to the win counter 
    document.getElementById("correct").innerHTML = currentWord;
    alert("You win!"); // give the user an alert

    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = "You have won " + winCounter + " game(s)";
    startGame(); // restart the game 
  }

  // If we've run out of guesses
  else if (numGuesses == 0) {
    lossCounter++; // add to the loss counter 
    alert("You lose."); // give the user an alert

    // Update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = "You have lost " + lossCounter + " game(s)";
    startGame(); // restart the game
  }

}





//Making the stuff run

//Calling the startGame function
startGame();

//once you click a button, makes it lowercase and adds to the user guess element ID
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  guessedLetter.push(userGuess);
  document.getElementById('guessed').innerHTML = "Letters Already Guessed: " + guessedLetter.join(" ");
  checkLetters(userGuess); // runs the code to check for correctness 
  round();

};
