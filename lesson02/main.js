import { Ball } from "/common/ball.js";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
console.log("goodd");
const BALL_NUMBER = 50;
const MAX_RADIUS = 20;

function resize() {
  ctx.canvas.width = window.innerWidth - MAX_RADIUS;
  ctx.canvas.height = window.innerHeight - MAX_RADIUS;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < BALL_NUMBER; i++) {
    balls[i].draw();
  }
}

// when windows resized, call resize function to resize canvas
window.onresize = resize;

// resize canvas at begining
resize();

var balls = [];
for (var i = 0; i < BALL_NUMBER; ++i) {
  balls.push(new Ball(ctx, ctx.canvas, MAX_RADIUS));
}
console.log("ball created");
setInterval(draw, 20);
