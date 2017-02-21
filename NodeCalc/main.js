//add
//sub
//mul
//div

var readlineSync = require('readline-sync');

var num1 = readlineSync.question('What is the first number? : ');
var num2 = readlineSync.question('What is the second number? : ');
var operation = readlineSync.question('Which operation would you like to perform? : ');

if (operation == "add") {
    var addResult = (parseInt(num1) + parseInt(num2));
    console.log("The result is: "+ addResult);
} else if (operation == "sub") {
    var subResult = (parseInt(num1) - parseInt(num2));
    console.log("The result is: " + subResult);
} else if (operation == 'mul') {
    var mulResult = (parseInt(num1) * parseInt(num2));
    console.log("The result is: " + mulResult);
} else {
    var divResult = (parseInt(num1) / parseInt(num2));
    console.log("The result is: " + divResult);
}
