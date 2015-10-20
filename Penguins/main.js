var attackParty = function (partyToAttack, onHit, onMiss) {
    var hit = Math.floor(Math.random() * (10 - 5));
    if (hit <= 5) {
        var nukeDrop = new Nuke();
        console.log(Nuke.name);
        partyToAttack.getAttacked(nukeDrop);
        onHit(partyToAttack, nukeDrop.kill);
    } else {
        onMiss(partyToAttack);
    }
};

var Party = function (pop, name) {
    var self = this;
    this.population = pop;
    this.name = name;
    this.getAttacked = function (nukeDrop) {
        self.population -= nukeDrop.kill;
    };
};
var Nuke = function () {
    this.kill = Math.floor(Math.random() * (1000000 - 5000));
};

var penguins = new Party(1000000, "penguins");
var communists = new Party(1000000, "communists");
var printAttack = function (attacker, defender, loss) {
    console.log(defender.name + " were attacked by " + attacker.name + " and " + loss + "  were killed!");
    console.log(defender.name + " population is now: " + defender.population);
};

var successfulAttack = function (partyDefending, loss) {
    if (partyDefending === penguins) {
        printAttack(communists, penguins, loss);
        if (penguin.population <= 0) {
            console.log(penguins.name + "are goners!");
        } else {
            console.log(penguins.name + "were missed!");
            setTimeout(function () {
                attackParty(communists, successfulAttack, failedAttack);
            }, 2000);
        }
    } else {
        printAttack(penguins, communists, loss);
        if (communists.population <= 0) {
            console.log(communists.name + " are hit!");
            setTimeout(function () {
                attackParty(penguins, successfulAttack, failedAttack);
            }, 2000);
        }
    }
};

var failedAttack = function (partyDefending) {
    if (partyDefending === penguins) {
        console.log(communists.name + "nuke fell into the sea.");

        console.log(penguins.name + " were missed!");
        setTimeout(function () {
            attackParty(communists, successfulAttack, failedAttack);
        }, 2000);
    } else {
        console.log(penguins.name + "nuke was a dud.");
        console.log(communists.name + " getting ready...");
        setTimeout(function () {
            attackParty(penguins, successfulAttack, failedAttack);
        }, 2000);
    }
};


attackParty(communists, successfulAttack, failedAttack);