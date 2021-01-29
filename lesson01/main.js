import { resize } from "/modules/utils.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var xSpeed = 1;
var ySpeed = 1;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = ctx.font.replace(/\d+px/, "28px");
  ctx.fillText("Happy Halloween!", x, y, 200);

  x = x + xSpeed;
  y = y + ySpeed;

  if (x + 200 > canvas.width) xSpeed = -1;
  if (y > canvas.height) ySpeed = -1;
  if (x < 0) xSpeed = 1;
  if (y - 28 < 0) ySpeed = 1;
}

window.onresize = resize;
resize(ctx);

setInterval(draw, 0);
