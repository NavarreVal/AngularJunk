var readlineSync = require('readline-sync');

var theWord = readlineSync.question("What is the word? :");

console.log("Number of Vowels: " + theWord.match(/[aeiou]/gi).length);

console.log("Number of Consonants: " + (theWord.length - theWord.match(/[aeiou]/gi).length));




//var syl = 0;
//
//for (i = 0; i < theWord.length; i++) {
//    if ('aeiou'.search(theWord[i]) > -1) {
//        syl++;
//    }
//}
//
//console.log(syl+" vowels")