var inquirer = require("inquirer");
var Word = require("./Word.js");

var teamArray = [];

function Main() {
	var self = this;
	this.count = 0;
 	this.a = "";
 	this.b = "";
    
 	this.newArray = [];
	this.count = 0;
	this.j = 0;
	this.typedLetter = "";
	this.teamArray = [];

	this.nfl_Teams = ["Arizona Cardinals", "Atlanta Falcons",
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
    
	this.start = function() {
		this.opportunities = 10;
	    this.concealed_Word();
	};

	this.concealed_Word = function() {
		this.team = this.nfl_Teams[Math.floor(Math.random() * this.nfl_Teams.length)];
		teamArray = this.team.split("");
		console.log(teamArray.join(' '));
		for (var m = 0; m < teamArray.length; m++){
			this.newArray.push('_');
			// this.newArray.join(' ');
		}
		console.log(this.newArray.join(' '));
	this.askLetter();
	};


	this.askLetter = function() {
	    // if statement to assure that there are 10 opportunities to have a wrong answer
		inquirer.prompt([				{
				type: "input",
				name: "letter",
				message: "Guess a letter!"
			}
		]).then(function(answer) {
			console.log("Escribiste: " + answer.letter);

			console.log("letra en teamArray: " + teamArray[0]);
			var letter = answer.letter;

			this.newWord = new Word(letter, teamArray);
			newWord.addLetter(letter, teamArray[0]);

			var letterNew = JSON.stringify(newWord.thisWord, null, 2);
			// console.log(personArray.join(', '));
			// console.log("letra nueva: " + letterNew.join(' _ '));
			console.log(newWord.thisWord[0].character);
		}); // End .then
	} // End askLetter
} // End Main

module.exports = Main;


// Display the info about to how to play
//Display underline spaces for every letter of the phrase to be guessed
//Initialize a counter in order to trace the number of attempts of the user
// Ask for an input from the user and send it to word as well as the phrase to be guessed
//Push in an array the character (letter) received from word.js and display it
//Game is over when the number of attempts exceeds the alloted number or the phrase is guessed correctely
