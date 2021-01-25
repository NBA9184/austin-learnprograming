import { Ball } from "/modules/ball.js";
import { resize } from "/modules/utils.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const BALL_NUMBER = 50;
const MAX_RADIUS = 20;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < BALL_NUMBER; i++) {
    balls[i].draw();
  }
}

// when windows resized, call resize function to resize canvas
window.onresize = resize;

// resize canvas at begining
resize(ctx);

var balls = [];
for (var i = 0; i < BALL_NUMBER; ++i) {
  balls.push(new Ball(ctx, MAX_RADIUS));
}
setInterval(draw, 20);
