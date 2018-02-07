
char = "";
under_char = "";
typed = "";

// var LetterDisplay = function(u_char, char){
function LetterDisplay(u_char, char) {	
	// this.charact er = '';
	this.under_char = u_char;
	this.typed = char;
	this.guessed = false;
	this.character = "";
	// this.guessed = guess;

	
	this.compare = function(){
		if(under_char === typed){ 
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
	char = this.character;
console.log("222 hello : " + char);
	return this.character;
	}
	
}

// this.compare("A", "a");
// var newLetterDisplay = new LetterDisplay(one, two);
var newLetterDisplay = new LetterDisplay("A", "A");
newLetterDisplay.compare();
newLetterDisplay.returnChar();

console.log(" hello : " + char);



// module.exports = LetterDisplay;
