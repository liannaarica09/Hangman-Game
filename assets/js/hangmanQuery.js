var words = ["scifi", "fan fiction", "tumblr", "cosplay", "podcast", "comic book", "super hero", "steampunk", "DC Comics", "trading cards", "collectable", "action figure"];

var wordPrint = [];
var guessesLeft = 8;
var incorectGuesses = [];
var wordSelect = "";
var wordChoice = "";

var gameTitle = $("#title").html();
var gameBody = $(document.body);
var gameContent = $("#mainContent");

function dropdownFunc() {
	$("#myDropdown").toggleClass("show");
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = $(".dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function choseWord() {
	console.log("choseWord triggered.");
	wordSelect = words[Math.floor(Math.random() * words.length)];
	wordChoice = wordSelect.toLowerCase();
	console.log("word is " + wordSelect);
	console.log("output is " + wordChoice);
	createBlanks(wordChoice);
}

function createBlanks(targetWord) {
	console.log("createBlanks triggered.");
	for (var i = 0; i < targetWord.length; i++) {
		if (targetWord[i] == " ") {
			wordPrint[i] = " ";
		}
		else {
			wordPrint[i] = "_";
		}
	}
	console.log(wordPrint);
	printWord()
}

function printWord() {
	console.log("printWord triggered.");
	$("#currentWord").html("");
	for (var i = 0; i < wordPrint.length; i++) {
		console.log(wordPrint[i]);
		$("#currentWord").append(wordPrint[i]);
	}
}

function checkGuess(letter, word) {
	console.log("Guess is " + letter);
	console.log(letter + " is as possition " + word.indexOf(letter));

	if (word.indexOf(letter) == -1) {
		guessRepeat(letter);
	}
	else if (word.indexOf(letter !== -1)) {
		addLetter(word, letter);
	}
}

function guessRepeat(currentLetter) {

	console.log("guessRepeat triggered.");

	if (incorectGuesses.indexOf(currentLetter) == -1) {
		incorectGuesses.push(currentLetter);
		console.log(incorectGuesses);
		$("#lettersGuessed").html(+ currentLetter);
		guessesLeft--;
		$("#guessesSpot").html(guessesLeft);
	}
	else {
		console.log(currentLetter + " already guessed.");
	}
}

function addLetter(word, letter) {
	console.log("addLetter triggered.");
	var letterPositions = [];
	for (var a = 0; a < word.length; a++) {
		if (wordChoice[a] === letter) {
			letterPositions.push(a);
		}
	}
	console.log(letterPositions);
	for (var i = 0; i < letterPositions.length; i++) {
		console.log("Index is " + letterPositions[i]);
		console.log("Letter is " + wordSelect[i]);
		wordPrint.splice(letterPositions[i], 1, wordSelect[letterPositions[i]]);
		console.log(wordPrint);
	}
	printWord();
}

function winAlert() {
	console.log("winAlert triggered");
	var alert = $("#win");
	console.log($("#win"));
	alert.show('fast');
	setTimeout(function () {
		alert.hide(1000);
	}, 2000);
}


function loseAlert() {
	console.log("Lose aleart triggered. Word was " + wordChoice);
	var alert = $("#lose");
	alert.html("Lose :( Word was " + wordChoice);
	console.log(alert.html);
	alert.show('fast');
	setTimeout(function () {
		alert.hide(1000);
		setUp();
	}, 4000);
}

function winCheck() {
	console.log("winCheck triggered");
	console.log(wordSelect);
	console.log($("#currentWord").html());
	if (wordSelect === $("#currentWord").html()) {
		console.log("win");
		winAlert();
		setUp();
	}
	else if (guessesLeft === 0) {
		console.log("lose");
		loseAlert();
	}
}

function setUp() {
	console.log("setUp triggered");
	incorectGuesses = [];
	wordPrint = [];
	wordChoice = "";
	wordSelect = "";
	guessesLeft = 8;
	console.log(guessesLeft);
	$("#guessesSpot").innerHTML = guessesLeft;
	console.log(guessesLeft);
	$("#currentWord").innerHTML = "";
	console.log(document.getElementById("currentWord").innerHTML);
	$("#lettersGuessed").innerHTML = "";
	choseWord();
}

document.onkeyup = function (event) {
	var letterChoice = event.key;

	if ($("#pressKey").css("color", "red")) {
		$("#pressKey").css("color", "blue");
	}

	console.log(letterChoice);
	checkGuess(letterChoice, wordChoice);
	winCheck();
};

$("li").on("click", function () {
	title = $(this).text() + " Hangman!";
	$("#title").html(title);
	$("#title").attr("data-shadow", title);
	$("#title").attr("style", $(this).attr("data-font"));

	$("body").attr("style", $(this).attr("data-background"));
	$("#mainContent").attr("style", $(this).attr("data-box"));

	console.log(JSON.parse($(this).attr("data-list")));
	words = JSON.parse($(this).attr("data-list"));
	console.log(words);

	setUp();
});

setUp();