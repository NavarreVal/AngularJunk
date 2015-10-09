//If you get hit in Mario

//Powered Up --> Big
//Big --> Small
//Small --> Dead

var player = {
    name: "Player1",
    totalCoins: 30,
    status: "Small",
//    ["Big", "Small", "Powered Up", "Dead"],
    star: false,
    
    setName: function() {
        var namePicked = "Mario";
    },
   
    gotHit: function() {
        if (this.status == "Powered Up") {
            this.status = "Big";
        } else if (this.status == "Big") {
            this.status = "Small";
        } else {
            this.status = "Dead";
        }
    },
      
    gameActive: function() {
        if (this.status = "Dead") {
            this.gameActive = false;
        } else {
            this.gameActive = true;
        }
    },

    gotPowerup: function() {
        if (true) {
            this.status = "Powered Up";
        }
    },

    addCoin: function() {
        if (true) {
            this.totalCoins(parseInt(totalCoins)++); {
            }
        }
    },

    print: function() {
        console.log("Name: " + this.setName + ","),
        console.log("Coins: " + this.totalCoins + ","),
        console.log("Status: " +  this.status + ","),
        console.log("Does he have the Star? " + this.star);
    }
};
    
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}
