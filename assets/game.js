var availableLetters = "abcdefghijklmnopqrstuvwxyz";
var	guesses = 10;
var	words = ["apple", "orange", "banana", "pear", "peach", "grape", "strawberry", "raspberry","blueberry", "blackberry", "mango", "pineapple"];
var guessedLetters = [];
var currentWord = [];
var wins = 0;
var currentWordIndex = 0;

function initialize () {
	if (currentWordIndex > words.length-1){
		document.getElementById("guessedLetters").innerHTML = "Game Over";
		document.onkeyup = null;
	}
	else {
		currentWord = [];
		for (var i = 0; i < words[currentWordIndex].length; i++) {
			currentWord.push("_");
		}
		guessedLetters = [];
		guesses = 10;
		document.getElementById("currentWord").innerHTML = currentWord.join (" ");
		document.getElementById("guessLeft").innerHTML = guesses;
		
	}
}

initialize();


function handleGuess (letter) {
	for (var i = 0; i < words[currentWordIndex].length; i++) {
		if (words[currentWordIndex][i].toLowerCase() === letter.toLowerCase()) {
			currentWord[i] = letter;
			document.getElementById("currentWord").innerHTML = currentWord.join (" ");
		}
	}
	if (!currentWord.includes("_")) {
		document.getElementById ("guessedLetters").innerHTML = "Yay! You guessed the right word!";
		wins++;
		document.getElementById("score").innerHTML = wins;

		currentWordIndex++;
		initialize ();
	}
	else if (guesses === 0){
		document.getElementById ("guessedLetters").innerHTML = "Sorry! You lose.";
		currentWordIndex++;
		initialize ();
	}		
}

document.onkeyup = function (event){
	var key = event.key;

	if (availableLetters.includes(key.toString().toLowerCase())) {
		if (!guessedLetters.toString().toLowerCase().includes(key.toString().toLowerCase())) {
			if (guesses > 0) {
				guessedLetters.push (key);
				document.getElementById ("guessedLetters").innerHTML = guessedLetters.join(" ");
				guesses--;
				document.getElementById ("guessLeft").innerHTML = guesses;
				handleGuess (key);	
			}
		}
	}
}