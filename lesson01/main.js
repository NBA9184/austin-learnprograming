var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var dx = 1;
var dy = 1;

function resize() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight - 20;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)'
  ctx.font = ctx.font.replace(/\d+px/, "28px");
  ctx.fillText("Happy Halloween!", x, y, 200);

  x = x + dx;
  y = y + dy;

  if (x + 200 > canvas.width) dx = -1;
  if (y > canvas.height) dy = -1;
  if (x < 0) dx = 1;
  if (y - 28 < 0) dy = 1;
}

window.onresize = resize;

resize();
setInterval(draw, 20);
