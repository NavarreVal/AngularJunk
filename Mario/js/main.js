//>>>>>>>Alternate Method for counting clicks<<<<<<<
//
//*******in HTML button div:*******
//onclick="goomCount();"
//
//*******JS Follows*******
//var gcnt = 0;
//function goomCount() {
//    gcnt = parseInt(gcnt)+parseInt(1);
//    var goomData = document.getElementById("goombaClicks");
//    goomData.innerHTML = (gcnt);
//    
//}
//>>>>>>>>>End Alternate Method<<<<<<<<<<

//Goomba Button Clicks
var gcnt = 0;
var gbutton = document.getElementById("goom");
var gdisplay = document.getElementById("goombaClicks");
//var qBox = document.getElementById("qBox");
//var coinage = document.getElementById("coinage");

gbutton.onclick = function play() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        gcnt++;
        gdisplay.innerHTML = "Goombas Stomped: " + gcnt;
//        qBox.style.visibility='visible';
//        coinage.style.visibility='visible';
        
    } else {
        audio.currentTime = 0;
        gcnt++;
        gdisplay.innerHTML = "Goombas Stomped: " + gcnt;
//        qBox.style.visibility='visible';
//        coinage.style.visibility='visible';
}}  

//Bob-omb Button Clicks
var bcnt = 0;
var bbutton = document.getElementById("bob");
var bdisplay = document.getElementById("bobClicks");

bbutton.onclick = function play() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        bcnt++;
        bdisplay.innerHTML = "Bob-ombs popped: " + bcnt;
//        qBox.style.visibility='visible';
//        coinage.style.visibility='visible';
        
    } else {
        audio.currentTime = 0;
        bcnt++;
        bdisplay.innerHTML = "Bob-ombs popped: " + bcnt;
//        qBox.style.visibility='visible';
//        coinage.style.visibility='visible';
}}

//Cheep-cheep Button Clicks
var ccnt = 0;
var cbutton = document.getElementById("cheep");
var cdisplay = document.getElementById("cheepClicks");

cbutton.onclick = function play() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        ccnt++;
        cdisplay.innerHTML = "Cheep-cheeps slayed: " + ccnt;
//        qBox.style.visibility='visible';
//        coinage.style.visibility='visible';
        
    } else {
        audio.currentTime = 0;
        ccnt++;
        cdisplay.innerHTML = "Cheep-cheeps slayed: " + ccnt;
//        qBox.style.visibility='visible';
//        coinage.style.visibility='visible';
}}

//Totals
var gtotal = 0;
var btotal = 0;
var ctotal = 0;

document.getElementById('one').addEventListener('click', function() {
    var gnumberOne = gcnt + 1;
    var gnumberTwo = 5;
    
    var gresult = (parseInt(gnumberOne) * parseInt(gnumberTwo));
    
    document.getElementById('goomResult').innerHTML = "Goomba Total Due: $" + gresult;
    gtotal = gresult;
});

document.getElementById('two').addEventListener('click', function() {
    var bnumberOne = bcnt + 1;
    var bnumberTwo = 7;
    
    var bresult = (parseInt(bnumberOne) * parseInt(bnumberTwo));
    
    document.getElementById('bobResult').innerHTML = "Bob-omb Total Due: $" + bresult;
    btotal = bresult;
});

document.getElementById('three').addEventListener('click', function() {
    var cnumberOne = ccnt + 1;
    var cnumberTwo = 11;
    
    var cresult = (parseInt(cnumberOne) * parseInt(cnumberTwo));
    
    document.getElementById('cheepResult').innerHTML = "Cheep-cheep Total Due: $" + cresult;
    ctotal = cresult;
});

addEventListener('click', function() {
    var numberOne = gtotal;
    var numberTwo = btotal;
    var numberThree = ctotal;
    
    var result = "Grand Total Due: $" + ( numberOne + numberTwo + numberThree );
    
    document.getElementById('grandResult').innerHTML = result;
    
});