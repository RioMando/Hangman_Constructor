
var LetterDisplay = function(u_char, char){
	
	// this.character = '';
	this.under_char = u_char;
	this.typed = char;
	// this.guessed = guess;

	
	this.compare = function(){
		if(this.under_char === this.typed){ 
			this.guessed = true;
		} else {
			this.guessed = false;
	    }
	}
	this.returnChar = function(){
	console.log(this.guessed);
		if(this.guessed){
			this.character = this.typed;
		} else { 
			this.character = "_";
		}		
	console.log(this.character);
	}
	console.log(this.character);
}

// this.compare("A", "a");
LetterDisplay.compare('r', "r");
LetterDisplay.returnChar('r', "r");
LetterDisplay('k', "e");
LetterDisplay('m', 'm');


// module.exports = LetterDisplay;
