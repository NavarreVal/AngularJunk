var names = ["Dallin", "Tanner", "Steve", "John", "Phillip", "Sarah", "Camryn", "Josh", "Tom", "Val"]

var dontCall = function(name) {
    console.log("You did not call " + name);
}

var call = function(name) {
    console.log("You talked to " + name);
}

var sendText = function(name) {
    console.log("You texted " + name);
}

var attemptCall = function(name, dontCall, call, sendText) {
    
    var aCount = 0;
    
    for(var i = 0; i < name.length; i++) {
        if (name[i].toLowerCase() === 'a') {
            aCount++;
        }
    }
    
    console.log("Contacting " + name + "...");
                
    setTimeout(function() {
        if (aCount > 1) {
        sendText(name);
        } else {    
            if (name.length % 2 === 1) {
                dontCall(name);
            } else {
                call(name);
            }
        }
    }, 2000);
}

for (var i = 0; 0 < names.length; i++) {
    console.log(i);
    attemptCall(names[i], dontCall, call, sendText);
}

