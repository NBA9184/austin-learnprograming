export const MAX_RADIUS = 20;

export class Ball {
  constructor(ctx, maxRadius = MAX_RADIUS) {
    this.ctx = ctx;
    this.maxRadius = maxRadius;
    // random postion
    this.x = parseInt(Math.random() * ctx.canvas.width, 10);
    this.y = parseInt(Math.random() * ctx.canvas.height, 10);
    this.color = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    this.xSpeed = parseInt(Math.random() * 5, 10);
    this.xSpeed = this.xSpeed === 0 ? 1 : this.xSpeed;
    this.ySpeed = parseInt(Math.random() * 5, 10);
    this.ySpeed = this.ySpeed === 0 ? 1 : this.ySpeed;
    this.radius = parseInt(Math.random() * this.maxRadius, 10);
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
    if (this.x + this.radius > this.ctx.canvas.width && this.xSpeed > 0) {
      this.xSpeed = -this.xSpeed;
    }

    // bottom
    if (this.y + this.radius > this.ctx.canvas.height && this.ySpeed > 0) {
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
