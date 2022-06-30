var canvas = document.getElementById("saldoconta");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.fillText("Hello World", 10, 50);

var c = document.getElementById("saldoconta");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var canvas = document.getElementById("saldoconta");
var ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.fillText("Hello World", 10, 50);