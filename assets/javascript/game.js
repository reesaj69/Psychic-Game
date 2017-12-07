//Initialize variables
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var lettersGuessedSoFar = [];

//Computer Choices for Letters
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//The game starts when a letter is pressed
document.onkeyup = function(event) {
	
	//The user is able to put in their guess and if they choose an uppercase letter then the code will convert to lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
	
	//The computer randomly selects a letter and stores it in the variable computerGuess
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	//The user guess is pushed into the array lettersGuessedSofar
	lettersGuessedSoFar.push(userGuess); 
	
	//the user's guess is compared to the computer's guess and if there is a match the number of wins will increment 
	if (userGuess == computerGuess) {
		wins++;
		alert('You have guessed correctly. You are Psychic!');
		
		//The number of guesses left will reset back to 15 so that the user can play again
		guessesLeft = 15;
		
		//the letters guessed so far length is reset to 0 so that the guesses from the previous try don't show
		lettersGuessedSoFar.length = 0;
	}
	
	//The number of guesses left is compared to 0 and if the user is out of guesses the # of losses is incremented & a message is displayed
	else if (guessesLeft == 0) {
		losses++;
		alert('You did not guess the correct letter. You lose. Try again.');
		
		//The variable guessesLeft will be reset to 15 so that the user can play again
		guessesLeft = 15;
		
		//the letters guessed so far length is reset to 0 so that the guesses from the previous try don't show
		lettersGuessedSoFar.length = 0;
	}
	
	//The user's guess is compared to the computer's guess and if there is no match then the guesses left will decrease by 1
	else if (userGuess !== computerGuess){
		guessesLeft--; 
		
	}
	
	//The variable, html, will store the p tags from the html file.

	var html = 

	"<p> Guess what letter I'm thinking of! <br> Press any letter to begin</p>" +

	"<p> Number of wins: " + wins + "</p>" +

	"<p> Number of losses: " + losses + "</p>" +

	"<p> Number of Guesses Left: " + guessesLeft + "</p>" +

	"<p> Number of Guesses So Far: " + lettersGuessedSoFar + "</p>";

//Select the div with the class = "word", and insert the following HTML into it.  This command replaces the information in the class with html
	
	
	document.querySelector(".word").innerHTML = html;



}





