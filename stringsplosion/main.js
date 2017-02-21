var string_in = "Code";
var array = [string_in];
            
function stringSplosion(string_in){
  var string_array = [];
  for(var i = 1; i <= string_in.length; i++){
    var string_out = string_in.substr(0, i);
    string_array.push(string_out);
  }
  return string_array.join('');
}

console.log(stringSplosion("Code"));// → "CCoCodCode" 
console.log(stringSplosion("abc"));// → "aababc" 
console.log(stringSplosion("ab"));// → "aab"
