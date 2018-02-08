var getLetter = "";
var Letter = require("./letter.js");

// var word 

// function Word(underline_l, hidden_l){
var Word = function(typed_l, hidden_l){
	this.thisWord = [];
	this.typed = typed_l;
	this.conceal = hidden_l;

	this.addLetter = function(und_l, hid_l) {
		var getLetter = new Letter(und_l, hid_l);
 console.log(getLetter);
		this.thisWord.push(new Letter(und_l, hid_l));
		// console.log(this.word.push(new LetterDisplay.returnChar( sund_l, hid_l )));
		// console.log(JSON.stringify(word.addletter));
	};
};



// var newWord = new Word ("A", "A");
// console.log("Hi " + JSON.stringify(newWord.word, null, 2) + "\n");

// newWord.addLetter("S", "S");
// Word("S", "S");

//Finalize the code in order that the array word be formed
//Return this info to main in order to be displayed

// character.join(this.letter);

module.exports = Word;
