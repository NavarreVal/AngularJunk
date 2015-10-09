var family = {
    members: [bob, sarah]
}

var sarah = {
    name: "Sarah",
    age: 30, 
    occupation: "Marketer",
    isMarried: true,
}


var bob = {
    name: "Bob",
    age: 30,
    occupation: "Burgers",
    business: "Bob's Burgers",
    isMarried: true,
    
    cars: [
        {
          make: "Toyota",
          model: "Camry",
          color: "Silver",
          powerSteering: true,
          sunroof: true, 
        },
        {
            make: "Tesla",
            model: "S",
            color: "Red",
            powerSteering: true,
            sunroof: true,
            awesomeness: true,
        }
     ],
    
//    cars: ["Tesla Model S", "Toyota Camry", "Pinto"],
    
//    car: {
//        make: "Toyota",
//        model: "Camry",
//        color: "Silver",
//        powerSteering: true,
//        sunroof: true,
//    },
    
    speak: function() {
        console.log("Hello! My name is " + this.name);
    },
    children: [
        {
            name: "Jessica",
            age: 4,
            favoriteToys: ["adas", "asdgfsdb", "sfgsa"],
        },
        {
            name: "Bob Jr.",
            age: 2,
            favoriteToys: ["adas", "asdgfsdb", "sfgsa"],
        }
      ]
}

bob.speak();

//for (key in bob) {
//    console.log(key + ": " + bob[key]);
//}

//console.log("Bob's car's color is " + bob.car.color + " and his son is " + //bob.children[1].age + " years old.");

//console.log(bob.car.color);

//console.log(bob.children[0].favoriteToys[1];
            
//bob.speak();
        
//for (var i = 0; i < bob.cars.length; i++) {
//            console.log(bob.cars[i]);
//    }