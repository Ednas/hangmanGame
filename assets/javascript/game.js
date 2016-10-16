//Made the variables first to use in the functions
//Array of fruitwords
var fruitWords = ['banana', 'fig', 'watermelon', 'grape', 'coconut', 'cherry', 'lime', 'pineapple',
  'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'blackberry',
  'mango', 'plum', 'pear', 'papaya', 'avocado', 'passionfruit', 'current', 'boysenberry', 'quince', 'salmonberry',
  'yuzu', 'grapefruit', 'kumquat'
];
var blanksAndSuccess = []; //Correct guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen
var currentWord = "";
var currentLetters = [];
// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

//array for users guessed letters
var guessedLetter = [];
//array for users correct guesses
var correctLetter = [];
//guessed letters that are incorrect
var incorrectGuess = [];


// create alphabet ul
var buttons = function() {
  //gets the alphabet button id from html
  var myButtons = document.getElementById('alphabet-btns');
  //creates unordered list for the letters
  var letters = document.createElement('ul');


  //loops through the alphabet
  for (var i = 0; i < alphabet.length; i++) {
    //creates li for list
    let listItem = document.createElement('li');
    //this creates the button and adds the bootstrap button look to it
    listItem = document.createElement('BUTTON');
    listItem.classList.add('btn-primary');
    //gives each list item the id letter
    //      list.id = 'letter';
    listItem.innerHTML = alphabet[i];
    //appends listIem to my buttons
    myButtons.appendChild(listItem);
    listItem.dataset.alphabet = alphabet[i];


    listItem.onclick = function() {
      var userGuess = listItem.dataset.alphabet;
  //listItem[i].disabled      
  //    document.getElementById("Button").disabled = true;  
      console.log('hello ' + userGuess);
      guessedLetter.push(userGuess);
      document.getElementById('guessed').innerHTML = "Letters Already Guessed: " + guessedLetter.join(" ");
      checkLetters(userGuess); // runs the code to check for correctness    

  
      round();
      //  console.log(userGuess);
    }

  }
}
buttons();


//Below is the functionality of the game
function startGame() {
  numGuesses = 12;
  blanksAndSuccess = [];
  guessedLetter = [];
  incorrectGuess = [];
  //Selects a fruitword at random
  currentWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];

  //Splits the current word into letters, so that you can match the users guesses to the letters of the word
  currentLetters = currentWord.split("");

  //Need to know how many blanks
  blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccess.push("_")
  }
  console.log(currentWord);
  console.log(blanksAndSuccess);
  document.getElementById('currentWord').innerHTML = "Find the missing letters: " + blanksAndSuccess.join(" ");
  document.getElementById('guessesRemaining').innerHTML = "Guesses left: " + numGuesses;
  document.getElementById('guessed').innerHTML = "Letters already guessed: "
}

//Checks if users letter is in the word
function checkLetters(letter) {
  //using Boolean to check if the letter is in the word
  var letterInWord = false;
  //loop that goes through the length of the word
  for (var i = 0; i < blanks; i++) {
    if (currentWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {

      if (currentWord[i] == letter) {
        blanksAndSuccess[i] = letter
      }
    }
    console.log(blanksAndSuccess);

  } else {
    incorrectGuess.push(letter);
    numGuesses--;
    console.log("that was incorrect " + numGuesses + " are remaining");
  }

}



//Upon finishing
function round() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guessesRemaining").innerHTML = "Number Of Guesses Remaining: " + numGuesses;
  document.getElementById("currentWord").innerHTML = "Find the missing letters: " + blanksAndSuccess.join(" ");
  document.getElementById("guessed").innerHTML = "Letters already guessed: " + incorrectGuess.join(" ");

  // If we have gotten all the letters to match the solution... 
  if (currentLetters.toString() == blanksAndSuccess.toString()) {
    winCounter++; // add to the win counter 
    document.getElementById("word").innerHTML = "The word was " + currentWord;
    alert("You win! The word was " + currentWord); // give the user an alert   

    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = "You have won " + winCounter + " game(s)";
    startGame(); // restart the game 
  }

  // If we've run out of guesses
  else if (numGuesses == 0) {
    lossCounter++; // add to the loss counter 
    document.getElementById("word").innerHTML = "The word was " + currentWord;

    alert("You lose. The word was " + currentWord); // give the user an alert

    // Update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = "You have lost " + lossCounter + " game(s)";
    startGame(); // restart the game
  }

}

//Making the stuff run
//Calling the startGame function
startGame();