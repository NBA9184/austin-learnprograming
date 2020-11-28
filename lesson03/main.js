var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const BALL_NUMBER = 50;
const MAX_RADIUS = 20;

class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    // random postion
    this.x = parseInt(Math.random() * ctx.canvas.width, 10);
    this.y = parseInt(Math.random() * ctx.canvas.height, 10);
    this.color = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    this.xSpeed = parseInt(Math.random() * 5, 10);
    this.ySpeed = parseInt(Math.random() * 5, 10);
    this.radius = parseInt(Math.random() * MAX_RADIUS, 10);
    this.radius = this.radius === 0 ? 1 : this.radius;
    this.live = true;
  }

  distance(ball) {
    var a = this.x - ball.x;
    var b = this.y - ball.y;

    return parseInt(Math.sqrt(a * a + b * b), 10);
  }

  eat(ball) {
    // must convert to Number, here we use int to compare.
    // var d = parseInt(this.distance(ball), 10);
    // var c = parseInt(this.radius - ball.radius, 10);
    if (ball.radius + this.distance(ball) < this.radius) {
      ball.live = false;
    }
  }

  draw() {
    if (this.live === false) return;
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

function resize() {
  ctx.canvas.width = window.innerWidth - MAX_RADIUS;
  ctx.canvas.height = window.innerHeight - MAX_RADIUS;
}

function draw() {
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

// when windows resized, call resize function to resize canvas
window.onresize = resize;

// resize canvas at begining
resize();
var balls = [];
for (var i = 0; i < BALL_NUMBER; ++i) {
  balls.push(new Ball(ctx));
}
setInterval(draw, 20);
