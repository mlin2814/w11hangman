exports.letter = {
	var Letter = function(let) {
		this.letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		this.blank: ["_"];
		this.letters: true;
		this.userEntry: process.argv[2];
	// property to store the actual letter	

	// property/boolean if the letter can be shown 

		this.letterRender = function() {
			if (userEntry != letters) {
				console.log("_");
				return false;
			}
			else {
				console.log(userEntry);
			}
			//if appear is false then show the _
			//else appear is true then show character
		};
	};
};
// export to use in word.js
