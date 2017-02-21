//******************** What follows is code from class ***************************
var readline = require("readline-sync");

function isShip() {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (randomNumber === 1) {
        return true;
    } else {
        return false;
    }
}

var Location = function() {
    this.ship = isShip(),
    this.hit = false,
    this.display = "~"
}

var grid = []

function createGrid() {
    var count = 0
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var x = 0; x < 10; x++) {
            var newLocation = new Location();
            row.push(newLocation);
            if (newLocation.ship) {
                count += 1;
            }
        }
        grid.push(row);
    }
    return count
}


function printGrid() {
    var displayGrid = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for(var x = 0; x < 10; x++) {
            var currentLocation = grid[i][x];
            row.push(currentLocation.display);
        }
        displayGrid.push(row.join(" "));
    }
    console.log(displayGrid.join("\n"));
}

function updateGrid(row, column) {
    var currentLocation = grid[row][column];

    if (currentLocation.ship) {
        console.log("Hit!! You sank this ship!\n");
        currentLocation.hit = true;
        currentLocation.display = "X";
        shipCount -= 1;
    } else {
        console.log("Missed :(");
        currentLocation.display = "M";
    }
    printGrid();
}

var shipCount = createGrid();

while (shipCount > 0) {

    printGrid();

    var column = readline.question("Choose a column between 0-9: ");
    var row = readline.question("Choose a row between 0-9: ");

    updateGrid(row, column);
    console.log("There are " + shipCount + " ships left.")

}


//******************** What follows is Bob's github solution ***************************

var readline = require("readline-sync");

// This is a way to modularize your code using standard nodejs practices. You could copy
// the contents of locationModel.js, paste them in place of this "require('./locationModel')" line
// and everything would work exactly the same!
var Location = require('./locationModel');

var board = [];

function populateBoard() {
    var count = 0
    for (var i = 0; i < 3; i++) {

        var row = [];

        for (var j = 0; j < 3; j++) {
            var newLocation = new Location()
            row.push(newLocation);
            if (newLocation.ship) {
                count += 1;
            }
        }

        board.push(row);
    }
    return count;
}

function updateBoard(x, y) {
    var currentLocation = board[x][y];

    console.log("");

    if (currentLocation.ship && !currentLocation.hit) {
        console.log("Hit!! You sank a ship!\n");
        numOfShips -= 1;
        currentLocation.hit = true;

    } else if (currentLocation.hit) {
        console.log("You already hit this location! What a waste of a turn.");

    } else {
        console.log("Miss :(");
        currentLocation.hit = false;
    }
    currentLocation.updateDisplay();
    printBoard();
}

function printBoard() {
    console.log("");
    if (board.length) {
        var displayBoard = [];
        for (var i = 0; i < 3; i++) {
            var row = [];
            for (var j = 0; j < 3; j++) {
                var currentLocation = board[i][j];
                row.push(currentLocation.display);
            }
            displayBoard.push(row.join("  "));
        }
        console.log(displayBoard.join("\n"));
    }
    console.log("");
}

function initializeBoard() {
    var numOfShips = populateBoard();
    printBoard();
    return numOfShips;
}

var numOfShips = initializeBoard();

while (numOfShips > 0) {

    if (numOfShips === 1) {
        console.log("There is only " + numOfShips + " ship left on the board!");
    } else {
        console.log("There are " + numOfShips + " ships on the board.");
    }

    var column = readline.question("Please choose a column (0-9): ");
    var row = readline.question("Please choose a row (0-9): ");

    if (column && column <= 9 && row && row <= 9) {
        updateBoard(row, column);
    } else {
        console.log("You must use a number between 0-9 for both column and row!");
        continue;
    }

}

if (numOfShips === 0) {
    console.log("\nYou beat the game!\n");
}

//******************** What follows is part of locationModel.js ***************************
/*-*-*-*-*-*
Generate random number between 1 and 5. If it is a 1, return true.
This will be called whenever a new location is created with the function constructor
to determine if there is a ship at that location.
*-*-*-*-*-*-*/
function isShip() {
    var number = Math.floor(Math.random() * 5) + 1;

    if (number === 1) {
        return true;
    }
    return false;
}

var Location = function () {
    this.ship = isShip();
    this.hit = null;
    this.display = ".";

    this.updateDisplay = function () {
        if (this.ship && this.hit) {
            this.display = "X";
        } else if (this.hit === false) {
            this.display = "M";
        }
    }
}

module.exports = Location;