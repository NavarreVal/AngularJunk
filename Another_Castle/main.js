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
    
    setName: "Mario",
    
//    function() {
//        var namePicked = "Mario";
//    },
   
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
        if (this.status == "Dead") {
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
            this.totalCoins++; {
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
    
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

var randomInt = getRandomNum(0, 2)
    if (randomInt === 0) {
        player.gotHit();
    } else if (randomInt === 1){
        player.gotPowerup();
    } else {
        player.addCoin();
    };

player.print();