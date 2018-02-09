var inquirer = require("inquirer");
var Word = require("./word.js");

var newWord = new Word("a", "b");

// console.log("Entered letter");
// console.log(newWord.typed + "\n");

// console.log("Hidden letter");
// console.log(newWord.conceal + "\n");

newWord.addLetter("a", "a");
// console.log(JSON.stringify(newWord.thisWord[3))s;
console.log(JSON.stringify(newWord.thisWord, null, 2) + "\n");
console.log(newWord.thisWord[0].character);

// console.log(JSON.stringify(newWord.thisWord));


var start = function() {




	// Define an array with words or phrases to be guessed by the user
	var concealed_Word = function () {
		var team = nfl_Teams[Math.floor(Math.random() * nfl_Teams.length)];
		console.log(team);
		var concela_Team = team.split("");
		console.log(JSON.stringify(concela_Team));
	};

concealed_Word();
}

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



var newStart = new start();
newStart.concealed_Word;

// Display the info about to how to play
//Display underline spaces for every letter of the phrase to be guessed
//Initialize a counter in order to trace the number of attempts of the user
// Ask for an input from the user and send it to word as well as the phrase to be guessed
//Push in an array the character (letter) received from word.js and display it
//Game is over when the number of attempts exceeds the alloted number or the phrase is guessed correctely