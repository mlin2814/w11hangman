
var inquirer = require('inquirer');
var prompt = require('prompt');
var game = require('./game.js');
var Word = require('./word.js');


game = {
	// wordBank : 
	wordsWon: 0, 
	guessesRemaining : 10, 
	currentWrd : null, 
	lettersGuessed : "",
	startGame : function(wrd){
		this.resetGuessesRemaining();
		this.currentWrd = new Word(wrd);
		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
	this.guessesRemaining = 10;
	this.lettersGuessed = "";
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		   
			console.log(result);
		    this.lettersGuessed += result + " ";
			
			var currentWrd = process.argv[2];
			var guess = currentWrd.checkIfLetterFound(result);
			if (!guess){
				this.guessesRemaining--;
			}
		    console.log(guess.toString());
			if(guess){
				if(currentWrd.didWeFindTheWord()){
					console.log("you did the thing!");
					this.wordsWon++;
					return;
				}
			}
		    
			console.log(this.guessesRemaining);
			console.log(currentWrd.wordRender());
			console.log(this.lettersGuessed);
			if (this.guessesRemaining>0){
				this.keepPromptingUser();
			} else {
				console.log("Keep trying!");
			}    
		});
	}


};

game.startGame("this project made me internally cry");


