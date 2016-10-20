exports.gamejs = {
	
// create a word list to use in main.js
};
var wordList = ["javascript", "java", "python",	"ruby"];
	var randomWord = Math.floor((Math.random()*(wordList.length + 1)));
	var gameWord = wordList[randomWord];