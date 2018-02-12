var Letter = require("./Letter.js");
// this.getLetter = "";

function Word(typed_l, hidden_team){

	// var Word = function(typed_l, hidden_l){
	this.thisWord = [];

	this.typed = typed_l;
	this.concealArray = hidden_team;

	this.addLetter = function(und_l, hid_l) {
		var getLetter = new Letter(und_l, hid_l);
		getLetter.returnChar();
		var obj = {
			typed: getLetter.typed,
			hidden_char: getLetter.under_char,
			guessed: getLetter.guessed,
			character: getLetter.character
		}
 
		this.thisWord.push(obj);
	};

	this.array_Word = function(team) {
		this.conceal_word = team.split("");
	};
		// console.log(this.array_Word);
}

module.exports = Word;
