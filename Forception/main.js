var people = ["Jon", "Jacob", "Jingle", "Heimer", "Smith"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var finalArray = [];

for (var i in people) {
    finalArray.push(people[i]);
    for (var j in alphabet) {
        finalArray.push(alphabet[j].toUpperCase());
    }
}
console.log(finalArray);
