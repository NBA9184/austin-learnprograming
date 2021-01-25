import { Ball, MAX_RADIUS } from "/modules/ball.js";

export class HungryBall extends Ball {
  constructor(ctx, maxRadius = MAX_RADIUS) {
    super(ctx, maxRadius);
    this.live = true;
    this.eats = 0;
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
      this.radius += parseInt(ball.radius / 4, 10);
      this.eats += 1;
      this.lives--;
    }
  }

  draw() {
    if (this.live === false) return;

    super.draw();
    this.ctx.fillStyle = "white";
    this.ctx.font = this.ctx.font.replace(/\d+px/, "18px");
    this.ctx.fillText(this.eats, this.x - 6, this.y + 8, 20);
  }
}
