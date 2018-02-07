
var Letter = require("./letter.js");

// var word 

function Word(underline_l, hidden_l){
	this.word = [];
	this.underline_l = underline_l;
	this.hidden_l = hidden_l;

	this.addLetter = function(und_l, hid_l) {
		this.word.push(new LetterDisplay.returnChar( sund_l, hid_l ));
		console.log(this.word.push(new LetterDisplay.returnChar( sund_l, hid_l )));
		// console.log(JSON.stringify(word.addletter));
	};
};

var newWord = new Word ("A", "A");
console.log(JSON.stringify(newWord.word, null, 2) + "\n");

//Finalize the code in order that the array word be formed
//Return this info to main in order to be displayed

// character.join(this.letter);

// module.exports = word;
