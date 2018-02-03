var letterDisplay = function(char, guess){
	this.letter = char;
	this.guessed = guess;
	this.compare = function(){
		if(this.guessed){
			retChar = this.letter;
		} else {
			retChar = "_ ";
		}
	}
}


// letterDisplay.join('_ ');

