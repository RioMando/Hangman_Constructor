

// var LetterDisplay = function(u_char, char){
// function Letter(u_char, char) {	
var Letter = function(t_char, u_char) {	
	// this.charact er = '';
	this.typed = t_char;
	this.under_char = u_char;
	this.guessed = false;
	this.character = "";
	// this.guessed = guess;

	
	this.compare = function(){
		if(this.under_char === this.typed){ 
			this.guessed = true;
		} else {
			this.guessed = false;
	    }
	}

	this.returnChar = function(){
		if(this.guessed){
			this.character = this.typed;
		} else { 
			this.character = "_";
		}		
	console.log("here: " + this.character);
	// char = this.character;
	console.log(this.character);
	// return this.character;
	}
	
}


// var newLetterDisplay = new LetterDisplay("A", "A");
// newLetterDisplay.compare();
// newLetterDisplay.returnChar();

// console.log(" hello : " + char);

module.exports = Letter;

