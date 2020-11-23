var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const BALL_NUMBER = 50;
const MAX_RADIUS = 20;

class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    // random postion
    this.x = Math.random() * ctx.canvas.width;
    this.y = Math.random() * ctx.canvas.height;
    this.color = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    this.xSpeed = Math.random() * 5;
    this.ySpeed = Math.random() * 5;
    this.radius = Math.random() * MAX_RADIUS;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bouncing
    // right side
    if (this.x + this.radius > canvas.width && this.xSpeed > 0) {
      this.xSpeed = -this.xSpeed;
    }

    // bottom
    if (this.y + this.radius > canvas.height && this.ySpeed > 0) {
      this.ySpeed = -this.ySpeed;
    }
    // left side
    if (this.x - this.radius < 0 && this.xSpeed < 0) {
      this.xSpeed = -this.xSpeed;
    }
    // top
    if (this.y - this.radius < 0 && this.ySpeed < 0) {
      this.ySpeed = -this.ySpeed;
    }
  }
}

var balls = [];
for (var i = 0; i < BALL_NUMBER; ++i) {
  balls.push(new Ball(ctx));
}

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

setInterval(draw, 20);
