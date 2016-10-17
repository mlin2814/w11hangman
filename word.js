var letter = require('letter.js');// require your letter objects

var Word = function(wrd){
// property to store the string word
	this.gameWord = []
// a collection of letter objects
	this.letterObj = [];
// property is the word found?
	this.wordDisc = [];

	this.getLetts = function() {
// populate the collection above with new Letter objects
		
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		if 
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		});

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {

// iterate through the collection of letter Objects

// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
// render the word based on if letters are found or ot found
		return str;
	};
}

// export to use in main.js
