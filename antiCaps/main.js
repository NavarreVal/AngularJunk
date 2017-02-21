function antiCaps(word) {  
  var output = '';
  for (var i = 0; i < word.length; i++) {
    if (isCaps(word[i])) {
      output += word[i].toLowerCase();
    } else {
      output += word[i].toUpperCase();
    }
  }
    
  return output;
    
}

function isCaps(letter) {
  return letter === letter.toUpperCase();
}

console.log(antiCaps('PepperMint Butler is a MoFo.'));