export default class Ball {
  constructor(ctx, canvas, MAX_RADIUS) {
    this.ctx = ctx;
    // random postion
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.color = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    this.xSpeed = Math.random() * 5;
    this.ySpeed = Math.random() * 5;
    this.radius = Math.random() * MAX_RADIUS;
    this.radius = this.radius === 0 ? 1 : this.radius;
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
    if (this.x + this.radius > this.canvas.width && this.xSpeed > 0) {
      this.xSpeed = -this.xSpeed;
    }

    // bottom
    if (this.y + this.radius > this.canvas.height && this.ySpeed > 0) {
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
