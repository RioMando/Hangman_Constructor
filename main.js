// Dependency for prompt npm package
// var prompt = require("prompt");

var Word = require("./word.js");

var something = new Word("A", "s");

console.log("Entered letter");
console.log(something.typed + "\n");

console.log("Hidden letter");
console.log(something.conceal + "\n");

something.addLetter("A", "s");
something.addLetter.getLetter.compare();
something.addLetter.returnChar();


var tempLetter = something.thisWord;
console.log(tempLetter);
console.log("This is the letter to be used: ");
console.log(something.thisWord);
// console.log(JSON.stringify(something.thisWord));

// Define an array with words or phrases to be guessed by the user
// Display the info about to how to play
//Display underline spaces for every letter of the phrase to be guessed
//Initialize a counter in order to trace the number of attempts of the user
// Ask for an input from the user and send it to word as well as the phrase to be guessed
//Push in an array the character (letter) received from word.js and display it
//Game is over when the number of attempts exceeds the alloted number or the phrase is guessed correctely
