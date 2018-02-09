// Dependency for prompt npm package
var prompt = require("prompt");

var Word = require("./word.js");

var newWord = new Word("A", "A");

console.log("Entered letter");
console.log(newWord.typed + "\n");

console.log("Hidden letter");
console.log(newWord.conceal + "\n");

newWord.addLetter("W", "s");
// newWord.addLetter.getLetter.compare();
// newWord.addLetter.r();


var tempLetter = newWord.thisWord;
console.log(JSON.stringify(tempLetter, null, 2) + "\n");
console.log("\n\nThis is the letter to be used: ");
console.log(JSON.stringify(newWord.thisWord, null, 2) + "\n");
// console.log(JSON.stringify(newWord.thisWord));

// Define an array with words or phrases to be guessed by the user
// Display the info about to how to play
//Display underline spaces for every letter of the phrase to be guessed
//Initialize a counter in order to trace the number of attempts of the user
// Ask for an input from the user and send it to word as well as the phrase to be guessed
//Push in an array the character (letter) received from word.js and display it
//Game is over when the number of attempts exceeds the alloted number or the phrase is guessed correctely
