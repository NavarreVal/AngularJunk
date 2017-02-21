function pokeParser(urlPath) {
    var xhr = new XMLHttpRequest();
    
    // open the request
    xhr.open("GET", urlPath, true);
    
    // handle the onReadyStateChange event
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var pokemonObjects = JSON.parse(xhr.responseText).objects[0].pokemon;
            var pokemonList = document.getElementById("pokemon-list");
            
            for (var i in pokemonObjects)
                var paragraph = document.createElement("p");
                var pTextNode = document.createTextNode(pokemonObjects[i].name);
                paragraph.appendChild(pTextNode);
                pokemonList.appendChild(paragraph);
        }
    }
        // Check if status === 200 && xhr.readyState === 4
            //create DOM elements in a for loop, adding the data retu8rned from your XHR.
    
    // Send the request
    xhr.send();

};

pokeParser("pokemon.json");



//function pokeParser(urlPath) {
//    var xhr = new XMLHttpRequest();
//
//    // open the request
//    xhr.open("GET", urlPath, true);
//
//    // handle the onReadyStateChange event
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            var pokemonObjects = JSON.parse(xhr.responseText).objects[0].pokemon;
//            var pokemonList = document.getElementById("pokemon-list");
//
//            for (var i in pokemonObjects) {
//                var paragraph = document.createElement("p");
//                var pTextNode = document.createTextNode(pokemonObjects[i].name);
//                paragraph.appendChild(pTextNode);
//                pokemonList.appendChild(paragraph);
//            }
//        }
//    }
//
//    // send the request
//    xhr.send();
//};
//
//pokeParser("pokemon.json");
















