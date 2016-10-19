var wordjs = require('letter.js');// require your letter objects

var Word = function(wrd){
// property to store the string word
	this.gameWord = [""];
// a collection of letter objects
	this.userLetts = [""];
// property is the word found?
	this.wordFound = [];

	this.getLetts = function() {
// populate the collection above with new Letter objects
		this.userLetts
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		if (this.wordFound = this.gameWord){
			return = true;
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		};

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {

// iterate through the collection of letter Objects
	for (var i = 0; i < userLetts.length; i++) {
		if (userLetts = process.argv[2]){
			str.replace("_", process.argv[2]);
		}
	};
// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
// render the word based on if letters are found or not found
		return str;
	};
}

// export to use in main.js
exports.word = {

}