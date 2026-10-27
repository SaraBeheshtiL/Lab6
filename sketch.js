let xposition, yposition;
let balls = [];
let numOfBalls = 2000;
let x, y, d, c;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < numOfBalls; i = i + 1) {
    x = random(0, width);
    y = random(0, height);
    d = 30 + random(-10, 10);
    c = color(0, 100, random([50, 255]), 100);
    balls[i] = new Ball(x, y, d, c);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < numOfBalls; i = i + 1) {
    balls[i].show();
    balls[i].move();
    balls[i].red();
  }
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
class Ball {
  constructor(x, y, d, c) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.color = c;
    this.originalColor = c;
  }

  show() {
    // let opacity= random( [100, 200])
    fill(this.color);
    stroke(120);
    circle(this.x, this.y, this.d / 2);
  }

  move() {
    xposition = random(-1, 1);
    yposition = random(-1, 1);
    this.x = this.x + xposition;
    this.y = this.y + yposition;
  }

  red() {
    let dd = dist(this.x, this.y, mouseX, mouseY);
    if (dd < this.d / 2) {
      this.color = "red";
    } else {
      this.color = this.originalColor;
    }
  }
}
