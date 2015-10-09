function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

var randomInt = getRandomNum(2, 40);

console.log(randomInt);

//for (var i = 0; i < 10; i ++) {
//    console.log(Math.random());
//}

//console.log(Math.floor(1.99999999999));

//getRandomNum(2, 40);
