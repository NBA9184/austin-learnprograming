import { HungryBall } from "./hungry_ball.js";
import { resize } from "/modules/utils.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const BALL_NUMBER = 50;

function gameover() {
  ctx.font = "80px Dosis";
  ctx.fillStyle = "Teal";

  ctx.fillText(
    "GAME OVER",
    ctx.canvas.width / 2 - 200,
    ctx.canvas.height / 2,
    400
  );
}

function draw() {
  if (lives === 1) {
    gameover();
    clearInterval(interval);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < BALL_NUMBER - 1; i++) {
    if (balls[i].live !== true) continue;
    for (var j = i + 1; j < BALL_NUMBER; j++) {
      if (balls[j].live !== true) continue;
      if (balls[i].radius < balls[j].radius) {
        balls[j].eat(balls[i]);
      } else {
        balls[i].eat(balls[j]);
      }
    }
  }

  for (var k = 0; k < BALL_NUMBER; k++) {
    balls[k].draw();
  }
}

var balls = [];
var lives = BALL_NUMBER;
var interval;

function initinalize() {
  for (var i = 0; i < BALL_NUMBER; ++i) {
    balls.push(new HungryBall(ctx));
  }
}
// when windows resized, call resize function to resize canvas
window.onresize = resize;

// resize canvas at begining
resize(ctx);
initinalize();
interval = setInterval(draw, 20);
