var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 10;
var y = 10;
var xSpeed = 2;
var ySpeed = 2;

function resize() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight - 20;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  x = x + xSpeed;
  y = y + ySpeed;

  // Bouncing
  // right side
  if (x + 10 > canvas.width) xSpeed = -xSpeed;
  // bottom
  if (y + 10 > canvas.height) ySpeed = -ySpeed;
  // left side
  if (x - 10 < 0) xSpeed = -xSpeed;
  // top
  if (y - 10 < 0) ySpeed = -ySpeed;
}

window.onresize = resize;

resize();
setInterval(draw, 20);
