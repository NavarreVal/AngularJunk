/*capital letter! */
var Person = function(personName, personAge, personOccupation) {
    this.name = personName;
    this.age = personAge;
    this.occupation = personOccupation;
    this.speak = function() {
        console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.");
    }
}
    
Person.prototype.complain = function() {
    console.log("My name is " + this.name + " and I'm bored!");
}

var bob = new Person("Bob", 30, "Burgers");
bob.complain();
//bob.speak();
    
var julie = new Person("Julie", 14, "Student");
//julie.speak();

//var bob = {
//  name: "Bob",
//  age: 30,
//  occupation: "Burgers",
//}

//console.log(bob.name);
//console.log(julie.name);