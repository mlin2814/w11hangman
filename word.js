var letts = require('./letter.js');// require your letter objects

var Word = function(wrd){
	var userWord = wrd;
	var lettObjs = [];
	var found = false;
		this.getLetts = function() {
				for (i=0; i<userWord.length; i++){
					lettObjs.push(new letter());
				}
			};		
		this.didWeFindTheWord = function() {
				for (i=0; i<lettObjs.length; i++){
					if(!lettObjs[i].appear){
						return this.found;
					}
				}
				this.found = true;
				return this.found;
			};

		this.checkIfLetterFound = function(guessLetter) {
				var whatToReturn = false;
				for(i=0; i<lettObjs.length; i++){
					if (userWord.charAt(i) === guessLetter){
						lettObjs[i].letter = guessLetter;
						lettObjs[i].appear = true;
						whatToReturn = true;
					}
				}
				return whatToReturn;
			};

		this.wordRender = function() {
				var str = "";
				for(i=0; i<lettObjs.length; i++){
					str += lettObjs[i].letter;
				}
				return str;
			};
};

module.exports = Word;