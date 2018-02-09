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

//output random word from array 
function choseWord() {
	console.log("choseWord triggered.");
	wordSelect = words[Math.floor(Math.random() * words.length)];
	wordChoice = wordSelect.toLowerCase();
	console.log("word is " + wordSelect);
	console.log("output is " + wordChoice);
	createBlanks(wordChoice);
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
	printWord()
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

function winAlert() {
	console.log("winAlert triggered");
	var alert = document.getElementById("win");
   	alert.style.display = "block";
   	setTimeout( function() {
   		alert.style.display = "none";
   		}, 2000);
}


function loseAlert() {
	var alert = document.getElementById("lose");
	alert.innerHTML += " word was " + wordChoice;
   	alert.style.display = "block";

   	setTimeout( function() {
   		alert.style.display = "none";
   		}, 4000);
}


//check if won or lost 
function winCheck() {
	console.log("winCheck triggered");
	if (wordSelect === document.getElementById("currentWord").innerHTML){
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

//reset word, guesses, and letters
function setUp() {
	console.log("setUp triggered");
	incorectGuesses = [];
	wordPrint = [];
	wordChoice = "";
	wordSelect = "";
	guessesLeft = 8;
	console.log(guessesLeft);
	document.getElementById("guessesSpot").innerHTML = guessesLeft;
	console.log(guessesLeft);
	document.getElementById("currentWord").innerHTML = "";
	console.log(document.getElementById("currentWord").innerHTML);
	document.getElementById("lettersGuessed").innerHTML = "";
	choseWord();
}


// call onClick

document.onkeyup = function(event) {
	var letterChoice = event.key;

	if (document.getElementById("pressKey").style.color == "red"){
		document.getElementById("pressKey").style.color = "blue";
	}

	console.log(letterChoice);
	checkGuess(letterChoice, wordChoice);
	winCheck();
};

function changeTheme() {

	if (document.getElementById("title").innerHTML == "Nerdfighter Hangman!"){
		document.getElementById("title").innerHTML = "Disney Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Disney Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'Walt-Disney-Script-v41'; font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/cinderellaCastle.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'Cinzel'; text-shadow: 2px 2px #484848; background-color: rgba(0, 0, 255, 0.5);");
		
		words = disney;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Classic Literature Hangman!"){
		document.getElementById("title").innerHTML = "Nerdfighter Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Nerdfighter Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'Roboto', sans-serif; font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/nerdfighter.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'Roboto', sans-serif; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");
		
		words = nerdfighteria;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Hamilton Hangman!"){
		document.getElementById("title").innerHTML = "Classic Literature Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Classic Literature Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'Jim Nightshade', cursive; font-size: 12em; margin-top:25px;");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/trinityLibrary.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'Mrs Saint Delafield', cursive; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");
		
		words = classicLit;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Jane Austen Hangman!"){
		document.getElementById("title").innerHTML = "Hamilton Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Hamilton Hangman!");
		document.getElementById("title").setAttribute("style", "color: black; font-family: Cinzel; font-weight: 700; font-size: 12em; text-shadow: none;");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/hamilton.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family:Cinzel; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");
		
		words = hamilton;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Marvel Hangman!"){
		document.getElementById("title").innerHTML = "Jane Austen Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Jane Austen Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'Mr Dafoe', cursive; font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/janeAusten.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'Miss Fajardose', cursive; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");
		
		words = janeAusten;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Harry Potter Hangman!"){
		document.getElementById("title").innerHTML = "Marvel Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Marvel Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'avengeance_mightiest_avengeRg'; font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/marvel-civil-war.jpg) no-repeat fixed center;");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'avengeance_heroic_avengerIt'; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");		
		
		words = marvel;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Middle Earth Hangman!"){
		document.getElementById("title").innerHTML = "Harry Potter Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Harry Potter Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'harry_pregular'; font-size: 12em; margin-top:15px;");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/hogwarts.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4); font-family: 'hpposterregular'; color: white; text-shadow: 2px 2px #484848");
		document.getElementById("currentWord").setAttribute("style", "font-family: 'Cinzel';")
		words = harryPotter;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Star Trek Hangman!"){
		document.getElementById("title").innerHTML = "Middle Earth Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Middle Earth Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'ringbearermedium'; font-size: 10em; margin-top:15px;");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/HoweEowyn.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4); color:white; font-family: 'half-elvenregular'; text-shadow: 2px 2px #484848;");
		
		words = lotr;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "STAR WARS HANGMAN!"){
		document.getElementById("title").innerHTML = "Star Trek Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Star Trek Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'federationregular'; font-size: 12em");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/enterprise.jpg) no-repeat fixed center");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'trek_tng_monitorsregular'; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");

		words = starTrek;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Doctor Who Hangman!"){
		document.getElementById("title").innerHTML = "STAR WARS HANGMAN!";
		document.getElementById("title").setAttribute("data-shadow", "STAR WARS HANGMAN!");
		document.getElementById("title").setAttribute("style", "font-family:'STARWARS'; font-size: 10em; margin-top:10px;");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/xwing.jpg) no-repeat fixed center");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "color: white");
		document.getElementsByTagName("DIV")[0].setAttribute("style", "text-shadow: 2px 2px #484848");
		document.getElementById("mainContent").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4); font-family: 'endorregular';");
		
		words = starWars;
		setUp();
	}

	if (document.getElementById("title").innerHTML == "Fandom Hangman!"){
		document.getElementById("title").innerHTML = "Doctor Who Hangman!";
		document.getElementById("title").setAttribute("data-shadow", "Doctor Who Hangman!");
		document.getElementById("title").setAttribute("style", "font-family: 'doctor_whoregular'; font-size: 12em; text-shadow: .03em .03em 0 #003b6f;");
		document.getElementsByTagName("BODY")[0].setAttribute("style", "background: url(assets/images/doctor_who.jpg) no-repeat fixed center;");
		document.getElementById("mainContent").setAttribute("style", "color: white; font-family: 'dalekregular'; text-shadow: 2px 2px #484848; background-color: rgba(255, 255, 255, 0.4);");
		
		words = doctorWho;
		setUp();
	}
	

}


setUp();



