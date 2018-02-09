var Letter = function(t_char, u_char) {	
	// this.charact er = '';
	this.typed = t_char;
	this.under_char = u_char;
	this.guessed = false;
	this.character = "";
	this.returnChar = () => {
		if(this.under_char == this.typed){
			this.character = this.typed;
			this.guessed = true;
		} else { 
			this.character = "_";
			this.guessed = false;
		}		
	}
	
}

// var newLetterDisplay = new LetterDisplay("A", "A");
// newLetterDisplay.compare();
// newLetterDisplay.returnChar();

// console.log(" hello : " + char);

module.exports = Letter;

