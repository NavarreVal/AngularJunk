var readlineSync = require('readline-sync');
var LineBreaker = require('linebreak');

console.log('Hola! Let\'s get to know you.' );


var firstName = readlineSync.question('What is your First Name? : ');
console.log('\n');
var upFN = firstName.toUpperCase();
var lastName = readlineSync.question('What is your Last Name? : ');
var upLN = lastName.toUpperCase();

console.log('Cool! Nice to meet you ' + upFN + '!')
console.log('\n');
var age = readlineSync.question('I am 2508 years old, how old are you? : ');
console.log('\n');
console.log('Great!  So far, I know that your name is ' + upFN + ' ' + upLN + ' and you are ' + age + ' years old!');
console.log('\n');
var response = readlineSync.question('Give me a short background about you, and I\'ll repeat back what I remember: ');
console.log('\n');
var half = (response.length / 2);

console.log('Ok, your response was ' + response.length + ' characters long.  This was the last half: ' + response.substring(half, response.length));
console.log('\n');
var start = readlineSync.question('Would you like me to start from somewhere else in your info?  Choose a number in the range [0-' + response.length + '] : ');
console.log('\n');
console.log('Here ya go: ' + response.substring(start, response.length));