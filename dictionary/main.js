var readline = require('readline-sync');

var dictionaryIsRunning = true;
var dictionary = {
    "Bob": "An Angular Coding Campus Instructor",
    "Blah": "The word I put when I don't know what else to put"
};

function displayWordDefinition() {
    var word = readline.question("What word would you like to look up?: ");
    var definition = dictionary[word];
    console.log(word + " : " + definition);
}

function addNewWordToDictionary(word, definition) {
    dictionary[word] = definition; // this line could be added to the end of the 'newWordAndDefinition' function instead of being in its own function.
}

function newWordAndDefinition() {
    var newWord = readline.question("What word would you like to add?: ");
    var newDefinition = readline.question("What is the definition of '" + newWord + "'?: ");
    addNewWordToDictionary(newWord, newDefinition);
}

function runUsersChoice(choice) {
    
    switch(choice) {
    case "1":
        displayWordDefinition();
        break;
    
    case "2":
        newWordAndDefinition();
        break;
    
    case "3":
        console.log("");
        console.log("Goodbye");
        console.log("");
        process.exit();
    
    default:
        console.log("You must choose either 1, 2, or 3!");
        break;
    }
    console.log("");
}

while (true) {
    console.log("*********************************************************");
    console.log("* Welcome to the dictionary! What would you like to do? *");
    console.log("*********************************************************");
    console.log("");
    console.log("[1]: Lookup a word");
    console.log("[2]: Add a new word");
    console.log("[3]: Quit the program (and lose all the words you added!)");
    var choice = readline.question("Please type 1, 2, or 3: ");
    runUsersChoice(choice);
}