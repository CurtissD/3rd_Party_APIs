// Current Date Script
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var n = new Date();
var y = n.getDay();
var m = n.getMonth();
var d = n.getDate();
document.getElementById("date").innerHTML = day[y] + " " + months[m] + " " + d + " ";

