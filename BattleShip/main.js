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
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var x = 0; x < 10; x++) {
            row.push(new Location().display);
        }
        grid.push(row);
    }
}

function printGrid() {
    var displayGrid = [];
    for(var i = 0; i < 10; i++) {
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
    
    if (currentLocation.ship === true) {
        console.log("Hit!\n");
        currentLocation.hit = true;
        currentLocation.display = "X";
    } else {
        console.log("Miss\n");
        currentLocation.display = "M";
    }
    printGrid();
}

createGrid();
printGrid();

var column = readline.question("Choose a column between 0-9: ");
var row = readline.question("Choose a row between 0-9: ");

updateGrid(row, column);




