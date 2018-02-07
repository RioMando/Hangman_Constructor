// Dependency for prompt npm package
var prompt = require("prompt");

var Word = require("./word");

// Define an array with words or phrases to be guessed by the user
// Display the info about to how to play
//Display underline spaces for every letter of the phrase to be guessed
//Initialize a counter in order to trace the number of attempts of the user
// Ask for an input from the user and send it to word as well as the phrase to be guessed
//Push in an array the character (letter) received from word.js and display it
//Game is over when the number of attempts exceeds the alloted number or the phrase is guessed correctely