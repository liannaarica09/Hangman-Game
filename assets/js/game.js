var words = ["scifi", "fan fiction", "tumblr", "fantastic", "geranimo", "alons y", "Expeliaramus", "Hufflepuff", "Slytherin", "Grifindor", "Ravenclaw", "Rebel Alliance", "Sauron", "Saruman", "Palpatine", "Aragorn", "Ellesar", "Rohan", "Gondor", "Hogwarts", "Edoras", "Helms Deep", "TARDIS", "Avengers", "Young Avengers", "Runaways", "Defenders", "Justice League", "Rose Tyler", "Mickey Smith", "Donna Noble", "Harry Potter", "Tony Stark", "Iron Man", "Hellcat", "Mockingbird", "Hawkeye", "Captain America"];
var doctorWho = ["Fantastic", "Briliant", "Geranimo", "Rose Tyler", "Mickey Smith", "Jackie Tyler", "Fantastic", "Sarah Jane", "Jack Harkness", "Torchwood", "TARDIS"];
var starWars = ["X Wing", "Deathstar", "Luke Skywalker", "Rebel Alliance", "Rogue Squadron", "Leia Organa", "Han Solo", "Chewbacca", "Millenium Falcon", "Curuscant", "Tatooine", "Naboo", "Anakin Skywalker", "Yoda", "Obi Wan Kenobie", "Qui Gon Jinn", "Mace Windu", "lightsaber"];
var starTrek = ["Enterprise", "James", "Tibberious", "Kirk", "Jean Luc", "Picard", "William Riker", "Data", "Deanna Troi", "Worf", "Hikaru Sulu", "Montgomery Scott", "Uhura", "Spock"];
var harryPotter = [];
var lotr = [];
var marvel = [];
var janeAusten = [];
var hamilton = [];
var classicLit = [];
var nerdfighteria = [];
var disney = [];

var wordPrint = [];
var guessesLeft = 6;
var incorectGuesses = [];
var wordSelect = "";
var wordChoice = "";

//output random word from array 
function choseWord() {
	console.log("choseWord triggered.");
	wordSelect = words[Math.floor(Math.random() * words.length)];
	wordChoice = wordSelect.toLowerCase();
	console.log("word is " + wordSelect);
	console.log("output is " + wordChoice);
}

//create array of _ and spaces
function createBlanks(targetWord) {
	console.log("createBlanks triggered.");
	for (var i = 0; i < targetWord.length; i++) {
		if (targetWord[i] == " "){
			wordPrint[i] = " ";
		}
		else {
			wordPrint[i] = "_";
		}
	}
	console.log(wordPrint);
}

//display array of blanks and correct guesses
function printWord() {
	console.log("printWord triggered.");
	document.getElementById("currentWord").innerHTML = "";
	for (var i = 0; i < wordPrint.length; i++) {
		console.log(wordPrint[i]);
		document.getElementById("currentWord").innerHTML += wordPrint[i];
	}	
}

//check if guess is correct or incorrect. 
function checkGuess(letter, word) {
	console.log("Guess is " + letter);
	console.log(letter + " is as possition " + word.indexOf(letter));

	if(word.indexOf(letter) == -1){
		guessRepeat(letter);
	}
	else if(word.indexOf(letter !== -1)){
		addLetter(word, letter);
	}
}

//if incorrect check if repeat, if not add to list of incorect letters and display on screen and remove one guess.
function guessRepeat(currentLetter) {

	console.log("guessRepeat triggered.");

	if (incorectGuesses.indexOf(currentLetter) == -1){
			incorectGuesses.push(currentLetter);
			console.log(incorectGuesses);
			document.getElementById("lettersGuessed").innerHTML += currentLetter;
			guessesLeft--;
			document.getElementById("guessesSpot").innerHTML = guessesLeft;
		}
	else {
		console.log(currentLetter + " already guessed.");
	}	
}

//if correct place in array and call printWord
function addLetter(word, letter) {
	console.log("addLetter triggered.");
	var letterPositions = [];
	for (var a = 0; a < word.length;a++) {
		if (wordChoice[a] === letter){
		letterPositions.push(a);
		}
	}
	console.log(letterPositions);
	for (var i =0; i < letterPositions.length; i++){
		console.log("Index is " + letterPositions[i]);
		console.log("Letter is " + wordSelect[i]);
		wordPrint.splice(letterPositions[i], 1, wordSelect[letterPositions[i]]);
		console.log(wordPrint);
	}
	printWord();
}

//check if won or lost 
function winCheck() {
	console.log("winCheck triggered");
	if (wordSelect === document.getElementById("currentWord").innerHTML){
		console.log("win");
		setUp();
	}
	else if (guessesLeft === 0) {
		console.log("lose");
		setUp();
	}
}

//reset word, guesses, and letters
function setUp() {
	console.log("setUp triggered");
	guessesLeft = 6;
	console.log(guessesLeft);
	document.getElementById("guessesSpot").innerHTML = guessesLeft;
	console.log(guessesLeft);
	document.getElementById("currentWord").innerHTML = "";
	document.getElementById("lettersGuessed").innerHTML = "";
}

choseWord();
createBlanks(wordChoice);
printWord();

// call onClick

document.onkeyup = function(event) {
	var letterChoice = event.key;
	console.log(letterChoice);
	checkGuess(letterChoice, wordChoice);
	winCheck();
};

function changeTheme() {

	if (document.getElementById("title").innerHTML == "Nerdfighter Hangman!"){
		document.getElementById("title").innerHTML = "Disney Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Disney Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/cinderellaCastle.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = disney;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Classic Literature Hangman!"){
		document.getElementById("title").innerHTML = "Nerdfighter Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Nerdfighter Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 11em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/nerfighter.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = nerdfighteria;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Hamilton Hangman!"){
		document.getElementById("title").innerHTML = "Classic Literature Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Classic Literature Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 10em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/trinityLibrary.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = classicLit;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Jane Austen Hangman!"){
		document.getElementById("title").innerHTML = "Hamilton Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Hamilton Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/hamilton.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = hamilton;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Marvel Hangman!"){
		document.getElementById("title").innerHTML = "Jane Austen Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Jane Austen Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 11em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/janeAusten.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = janeAusten;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Harry Potter Hangman!"){
		document.getElementById("title").innerHTML = "Marvel Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Marvel Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/marvel-civil-war.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = marvel;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Middle Earth Hangman!"){
		document.getElementById("title").innerHTML = "Harry Potter Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Harry Potter Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/hogwarts.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = doctorWho;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Star Trek Hangman!"){
		document.getElementById("title").innerHTML = "Middle Earth Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Middle Earth Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 9em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/HoweEowyn.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = lotr;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Star Wars Hangman!"){
		document.getElementById("title").innerHTML = "Star Trek Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Star Trek Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 11em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/enterprise.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = starTrek;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Doctor Who Hangman!"){
		document.getElementById("title").innerHTML = "Star Wars Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Star Wars Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/xwing.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = starWars;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}

	if (document.getElementById("title").innerHTML == "Fandom Hangman!"){
		document.getElementById("title").innerHTML = "Doctor Who Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Doctor Who Hangman!");
		document.getElementById("title").setAttribute("style", "font-size: 10em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/universe.jpg)");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
		words = doctorWho;
		setUp();
		choseWord();
		createBlanks(wordChoice);
		printWord();
	}
	

}






