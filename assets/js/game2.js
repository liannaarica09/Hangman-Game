var words = ["scifi", "fan fiction", "tumblr", "fantastic", "geranimo", "alons y", "Expeliaramus", "Hufflepuff", "Slytherin", "Grifindor", "Ravenclaw", "Rebel Alliance", "Sauron", "Saruman", "Palpatine", "Aragorn", "Ellesar", "Rohan", "Gondor", "Hogwarts", "Edoras", "Helms Deep", "TARDIS", "Avengers", "Young Avengers", "Runaways", "Defenders", "Justice League", "Rose Tyler", "Mickey Smith", "Donna Noble", "Harry Potter", "Tony Stark", "Iron Man", "Hellcat", "Mockingbird", "Hawkeye", "Captain America"];
var wordSelect = words[Math.floor(Math.random() * words.length)];
var wordChoice = wordSelect.toLowerCase();
var wordPrint = [];
var incorectGuesses = [];
var guessesLeft = 6;

function printWord() {

	document.getElementById("currentWord").innerHTML = "";

	for (var i = 0; i < wordPrint.length; i++) {
	document.getElementById("currentWord").innerHTML += wordPrint[i];
	}
}

function setUp() {
	console.log(wordSelect);
	console.log(wordChoice);
	console.log("Length of current word is " + wordChoice.length);

	for (var i = 0; i < wordChoice.length; i++) {
		if (wordChoice[i] == " "){
			wordPrint[i] = " ";
		}
		else {
			wordPrint[i] = "_";
		}
	}

	console.log(wordPrint);
		printWord();
		document.getElementById("guessesSpot").innerHTML = guessesLeft;
}	

document.onkeyup = function(event) {

	var currentLetter = event.key;
	console.log("Guess is " + currentLetter);
	console.log(currentLetter + " is as possition " + wordChoice.indexOf(currentLetter));


	if (document.getElementById("pressKey").style.color == "red"){
		document.getElementById("pressKey").style.color = "blue";
	}

	if (wordChoice.indexOf(currentLetter) == -1){
		guessesLeft--;
		document.getElementById("guessesSpot").innerHTML = guessesLeft;
		console.log(currentLetter + " is not in the word.");

		if (incorectGuesses.indexOf(currentLetter) == -1){
			incorectGuesses.push(currentLetter);
			console.log(incorectGuesses);
			document.getElementById("lettersGuessed").innerHTML += currentLetter;
		}
	}

	else{
		var letterPositions = [];
		for (var a =0; a < wordChoice.length;a++) {
	    	if (wordChoice[a] === currentLetter){
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

	if (document.getElementById("currentWord").innerHTML == wordSelect) {
		console.log("You Win");
		setUp();
		guessesLeft = 6;
		incorectGuesses = [];
	}
	else if (guessesLeft === 0){
		console.log("You Lose!");
		setUp();
		guessesLeft = 6;
		incorectGuesses = [];
	}
};

function changeTheme() {
	console.log("Title clicked");
	var currentTheme = document.getElementById("title").textContent;

	if (currentTheme === "Fandom Hangman!") {
		document.getElementById("title").innerHTML = "Doctor Who Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Doctor Who Hangman!");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background-image: url(assets/images/universe.jpg)");

	}
}


setUp();
printWord();