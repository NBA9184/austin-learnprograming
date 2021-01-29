import { Ball } from "/modules/ball.js";
import { resize } from "/modules/utils.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// when windows resized, call resize function to resize canvas
window.onresize = resize;

// resize canvas at begining
resize(ctx);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillRect(20, 40, 80, 10);

  ball.draw();
}

var ball = new Ball(ctx);
ball.setSpeed(3, 4);
ball.setRadius(20);
ball.setColor("white");

setInterval(draw, 20);
