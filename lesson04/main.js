import { Ball } from "/modules/ball.js";
import { resize } from "/modules/utils.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// when windows resized, call resize function to resize canvas
window.onresize = resize;

// resize canvas at begining
resize(ctx);

function draw() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw();
}

var ball = new Ball(ctx);
setInterval(draw, 20);
