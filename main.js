var inquirer = require("inquirer");
var Word = require("./word.js");

var newWord = new Word("a", "b");

var count = 0;
var typedLetter = "";
var teamArray = [];
var nfl_Teams = ["Arizona Cardinals", "Atlanta Falcons",
				 "Baltimore Ravens", "Buffalo Bills",
				 "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
				 "Dallas Cowboys", "Denver Broncos", "Detroit Lions",
				 "Green Bay Packers", "Houston Texans", "Indianapolis Colts",
				 "Jacksonville Jaguars", "Kansas City Chiefs",
				 "Los Angeles Rams", "Los Angeles Chargers",
				 "Miami Dolphins", "Minnesota Vikings",
				 "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets",
				 "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers",
				 "San Francisco 49ers", "Seattle Seahawks",
				 "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"
				 ];

function start() {

	count = 0;
	var self = this;
    
    concealed_Word();
	
	
}

var concealed_Word = function() {
	var team = nfl_Teams[Math.floor(Math.random() * nfl_Teams.length)];
	teamArray = team.split("");
	console.log(JSON.stringify(teamArray));
	askLetter();
};

var askLetter = function() {

    // if statement to assure that there are 10 opportunities to have a wrong answer
	if (count < 10) {
		inquirer.prompt([
			{
				type: "input",
				name: "letter",
				message: "Guess a letter!"
			}
		]).then(function(answer) {
			typedLetter = answer;
			console.log("You typed: " + JSON.stringify(answer.letter));

			newWord.addLetter(answer.letter, "A");
			// console.log(JSON.stringify(newWord.thisWord[3)])s;
			var letterNew = JSON.stringify(newWord.thisWord, null, 2);
			console.log(newWord.thisWord[0].character);

		});
	}
}





// console.log(JSON.stringify(newWord.thisWord));

// Define an array with words or phrases to be guessed by the user




start();


// Display the info about to how to play
//Display underline spaces for every letter of the phrase to be guessed
//Initialize a counter in order to trace the number of attempts of the user
// Ask for an input from the user and send it to word as well as the phrase to be guessed
//Push in an array the character (letter) received from word.js and display it
//Game is over when the number of attempts exceeds the alloted number or the phrase is guessed correctely
