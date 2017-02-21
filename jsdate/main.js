
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "Augutst", "September", "October", "November", "December"];

var date = new Date();
var dayName = days[date.getDay()];
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var time = date.toLocaleTimeString();

console.log(day, monthNames[monthIndex], year);
document.write("The Date is: " + dayName + ' ' + monthNames[monthIndex] + ' ' + day + ', ' + year + "  <br>The time is: " + time);