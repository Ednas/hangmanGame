// .scoreBoard
// .wins
// .currentWord
// .guessesRemaining
// .guessed

//Array of fruitwords
var fruitWords = ['banana', 'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'pineapple'];
var blanksAndGuesses = []; //Guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen
//Selects a fruitword at random
var currentWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];
   console.log(currentWord);

//array for users guessed letters
var guessedLetter = [];
//array for users correct guesses
var correctLetter = [];

function makeBlanks(){
	blanks = currentWord.length;
};


//once you click a button, makes it lowercase and adds to the user guess element ID
document.onkeyup = function(event) 
{
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	guessedLetter.push(" " + userGuess);

	document.getElementById('guessed').innerHTML = "Letters Already Guessed " + guessedLetter;


//Splits the current word into letters, so that you can match the users guesses to the letters of the word
var currentLetters = currentWord.split("");
console.log(currentLetters);

//If the users guessed letter = a current letter, it will pop that letter off the array 
//and once the user has emptied the array, they win. If they use up more than 20 letters, then
//they lose.
for (var i = 0; i < currentLetters.length; i++) {
	currentLetters[i]

if (currentLetters == userGuess){
	console.log(userGuess);
}
else {
	console.log("Wrong guess");
}
};
// for (var i = currentWord.length - 1; i >= 0; i--) {
// 	currentWord[i]
// 	var goal = userGuess.match(currentLetters);
// console.log(userGuess + "it worked");
// currentLetters.pop(userGuess);
// console.log(currentLetters);
// };


if (userGuess == currentLetters){
	console.log("Works");
};
}