class bird {
  constructor() {
    this.pos = createVector(100, height / 2);
    this.gravity = createVector(0, 2);
    this.r = 15;
  }
  display() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
  move() {
    if (this.pos.y + this.r <= height) {
      this.pos.add(this.gravity);
    }
  }
  jump() {
    if (keyCode == 32) {
      this.pos.y -= 5;
    }
  }
}
