var tempF = parseFloat(document.getElementById("fahrenheit").value);
var speed = parseFloat(document.getElementById("wind").value);

var chillF;
var chillC;
if (tempF > 50 || speed < 3.0) {
    chillF = "N/A";
    chillC = "N/A";
} else {
    chillF = 35.74 + (0.6215*tempF) - (35.75 * (speed ** 0.16)) + (0.4275 * tempF * (speed ** 0.16));        
    chillC = (tempF - 32) * (5/9);
}
     
document.getElementById("windchillF").innerHTML = chillF;
document.getElementById("windchillC").innerHTML = chillC;