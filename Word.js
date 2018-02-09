var getLetter = "";

var Letter = require("./letter.js");

function Word(typed_l, hidden_l){
// var Word = function(typed_l, hidden_l){
	this.thisWord = [];
	this.typed = typed_l;
	this.conceal = hidden_l;

	this.addLetter = function(und_l, hid_l) {
		var getLetter = new Letter(und_l, hid_l);
		getLetter.returnChar();
		var obj = {
			user_char: getLetter.typed,
			hidden_char: getLetter.under_char,
			guessed: getLetter.guessed,
			character: getLetter.character
		}
 
		this.thisWord.push(obj);
	};
};


module.exports = Word;
