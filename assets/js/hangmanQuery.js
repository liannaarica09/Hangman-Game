var words = ["scifi", "fan fiction", "tumblr", "cosplay", "podcast", "comic book", "super hero", "steampunk", "DC Comics", "trading cards", "collectable", "action figure"];
var doctorWho = ["Fantastic", "Briliant", "Geranimo", "Rose Tyler", "Mickey Smith", "Jackie Tyler", "Dalek", "Skaro", "Fantastic", "Sarah Jane", "Jack Harkness", "Torchwood", "TARDIS", "Ian", "Barbra", "Susan", "Polly"];
var starWars = ["X Wing", "Deathstar", "Luke Skywalker", "Rebel Alliance", "Rogue Squadron", "Leia Organa", "Han Solo", "Chewbacca", "Millenium Falcon", "Curuscant", "Tatooine", "Naboo", "Anakin Skywalker", "Yoda", "Obi Wan Kenobie", "Qui Gon Jinn", "Mace Windu", "lightsaber"];
var starTrek = ["Enterprise", "James", "Tibberious", "Kirk", "Jean Luc", "Picard", "William Riker", "Data", "Deanna Troi", "Worf", "Hikaru Sulu", "Montgomery Scott", "Uhura", "Spock", "Vulcan", "Federation"];
var harryPotter = ["Harry Potter", "Hermione Granger", "Ron Weasley", "PotterCast", "Diagon Alley", "Hogwarts", "Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw", "Dumbledore", "Remus Lupin", "Sirius Black", "Salazar", "Godric", "Helga", "Rowena", "Niffler", "Dementor", "Luna Lovegood", "Daily Prophet", "Quibbler", "Welsh Green", "Hungarian Horntail", "Norweigan Ridgeback", "Voldemort", "Death Eater", "Auror", "Nymphadora Tonks"];
var lotr = ["Middle Earth", "Hobbit", "Hobbiton", "Bree", "Rivendell", "Rohon", "Edoras", "Gondor", "Dol Amroth", "Minas Tirith", "Minas Arnor", "Ithilien", "Treebeard", "Aragorn", "Boromir", "Faramir", "Frodo Baggins", "Bilbo Baggins", "Sam Gamgee", "Meridoc Brandybuck", "Perigrin Took", "Eomer", "Eowyn", "Legolas", "Gimli", "Ori", "Dori", "Nori", "Biffur", "Boffur", "Bonbor", "Oin", "Gloin", "Balin", "Dwalin", "Fili", "Kili", "Thorin Okenshild", "Gandolf"];
var marvel = ["Tony Stark", "Iron Man", "James Rhodes", "Rhody", "War Machine", "Iron Patriot", "Pepper Potts", "Rescue", "Ho Yinsen", "Toni Ho", "Justin Hammer", "Captain America", "Union Jack", "Dum Dum Dugan", "Captain Britian", "Sadow Cat", "Black Knight", "Dane Whitman", "Pete Wisdom", "Captain Middland", "Spitfire", "Excalibur", "Alister Stewart", "Hellcat", "Hawkeye", "Clint Barton", "Black Widow", "Avengers", "Young Avengers", "Assgaurdian", "Hulkling", "Iron Lad", "Patriot", "Wiccan", "Stature", "Speed", "Scarlet Wich", "Quicksilver", "Victor Mancha", "America Chavez", "Marvel Boy", "Loki", "Thor", "Volstag", "Sif", "Happy Hogan", "Hogan the Grim", "Excelsior", "Stan Lee", "Jack Kirby", "Joe Simon", "Chris Claremont", "Defenders", "Dr Strange", "Sorceror Supream", "The Collector", "Agent Phil Coulson", "Galaga", "shwarma", "Maria Hill", "Daisy Johnson", "Quake", "Profesor X", "Hulk", "Bruce Banner", "Amadaus Cho", "Pattsy Walker", "Tippy Toe", "Steve Rogers", "Bucky", "James Buchanon Barnes", "Winter Soldier", "Peggy Carter", "Hella", "Merlin", "Jessica Jones", "Luke Cage", "Iron Fist", "Daredevil", "Spider Man", "Peter Parker", "Miles Morales", "Wolverine", "Pheonix", "Kitty Pride", "Iceman", "Blink", "Warpath", "Dani Moonstar", "Valkerie", "Prodgy", "Rogue", "Gambit", "Bullseye", "Thunderbird", "Magneto", "Mangog", "Galactus", "Black Panther", "Wakanda"];
var janeAusten = ["Emma", "Emma Woodhouse", "George Knighley", "John Knightley", "Isabella Knightley", "Pride and Prejeduce", "Elizabeth Bennet", "Kitty Bennet", "Jane Bennet", "Bingley", "Darcy", "Sense and Sensibility", "Lizzie Bennet Diaries", "Emma Aproved"];
var hamilton = ["Alexender Hamilton", "George Washington", "Thomas Jeferson", "Aaron Burr", "Yorktown", "Virginia", "New York", "Eliza", "Angelica Schyler", "Philip", "Peggy", "Hurcules Muligan", "John Laurens", "Shot", "America", "imigrants", "write", "Lafayette"];
var classicLit = ["Dracula", "Animal Farm", "Catcher in the Rye", "Shakespeare", "Much Ado About Nothing", "Hamlet", "McBeth", "Duncan", "Romeo and Juliet", "Troilus and Cressida", "Othello", "Julius Ceasar", "Pericles", "Tempest", "Taming of the Shrew", "Les Miserables", "Frankenstein", "Great Expectations", "The Scarlet Letter", "Ninteen Eighty Four", "Odesy", "Tom Sawyer", "Secret Garden", "Heart of Darkness", "Brave New World"];
var nerdfighteria = ["John Green", "World Suck", "Hank Green", "Nerd", "YouTube", "Dear Hank and John", "tuatara", "Turtles All the Way Down", "Paper Towns", "Looking for Alaska", "Hankler Fish", "spiral", "An Abundance of Kathrines", "An Absolutely Remarkable Thing", "Fault in Our Stars", "Ester Earl", "Hazel", "Aza Holmes", "Maureen Johnson"];
var disney = ["Rapunzel", "Cinderella", "Aurora", "Sleeping Beauty", "Belle", "Lion King", "Simba", "Nala", "Tarzan", "dalmation", "Cruela Devill", "Maleficent", "Ariel", "Merida", "Brave", "Tangled", "Flyn Rider", "Woody", "Buzz Lightyear", "Incredibles", "Dumbo", "Snow White", "Mickey", "mouse", "Goofy", "Donald Duck", "Duck Tales", "Tiana", "Scar", "Prince Eric"];

var wordPrint = [];
var guessesLeft = 8;
var incorectGuesses = [];
var wordSelect = "";
var wordChoice = "";

var gameTitle = $("#title").html();
var gameBody = $(document.body);
var gameContent = $("#mainContent");

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
		if (targetWord[i] == " "){
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

	if(word.indexOf(letter) == -1){
		guessRepeat(letter);
	}
	else if(word.indexOf(letter !== -1)){
		addLetter(word, letter);
	}
}

function guessRepeat(currentLetter) {

	console.log("guessRepeat triggered.");

	if (incorectGuesses.indexOf(currentLetter) == -1){
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

function winAlert() {
	console.log("winAlert triggered");
	var alert = $("#win");
   	alert.style.display = "block";
   	setTimeout( function() {
   		alert.style.display = "none";
   		}, 2000);
}


function loseAlert() {
	var alert = $("#lose");
	alerßt.innerHTML = "Lose :( Word was " + wordChoice;
   	alert.style.display = "block";

   	setTimeout( function() {
   		alert.style.display = "none";
   		}, 4000);
}

function winCheck() {
	console.log("winCheck triggered");
	console.log(wordSelect);
	console.log($("#currentWord").html);
	if (wordSelect === $("#currentWord").html){
		console.log("win");
		winAlert();
		setUp();
	}
	else if (guessesLeft === 0) {
		console.log("lose");
		loseAlert();
		setUp();
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

document.onkeyup = function(event) {
	var letterChoice = event.key;

	if ($("#pressKey").css("color", "red")){
		$("#pressKey").css("color", "blue");
	}

	console.log(letterChoice);
	checkGuess(letterChoice, wordChoice);
	winCheck();
};

function changeTheme() {
	
}

setUp();
