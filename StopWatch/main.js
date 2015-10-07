//var h1 = document.getElementsByTagName('h1')[0],
//    start = document.getElementById('start'),
//    stop = document.getElementById('stop'),
//    clear = document.getElementById('clear'),
//    seconds = 0, minutes = 0, hours = 0,
//    t;
//
//function add() {
//    seconds++;
//    if (seconds >= 60) {
//        seconds = 0;
//        minutes++;
//        if (minutes >= 60) {
//            minutes = 0;
//            hours++;
//        }
//    }
//    
//    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
//
//    timer();
//}
//function timer() {
//    t = setTimeout(add, 1000);
//}
//timer();
//
//
///* Start button */
//start.onclick = timer;
//
///* Stop button */
//stop.onclick = function() {
//    clearTimeout(t);
//}

///* Clear button */
//clear.onclick = function() {
//    h1.textContent = "00:00:00";
//    seconds = 0; minutes = 0; hours = 0;
//}
//
//
//var currentTime = 0;
//
//document.getElementById('start').addEventListener('click'), function() {
//    incrementTime()
//}
//
//var incrementTime = function () {
//    setInterval(function() {
//        alert("Hello"); 
//    }, 3000);
//}
//
//document.getElementById('current-time').innerHTML = currentTime;

/*************/
/** Example **/
/*************/

var currentTime = 0
var clear = document.getElementById('clear');

var incrementTime = function () {
    intervalHandler = setInterval(function (){
        currentTime += .01;
        updateTime();
    })
}

var updateTime = function () {
    document.getElementById('current-time').innerHTML = currentTime.toFixed(2);    
}

document.getElementById('start').addEventListener('click', function (){
   incrementTime()
})

document.getElementById('stop').addEventListener('click', function () {
    stopTime()
})
