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

  ballsOnBody(px, py) {
    px = floor(this.x);
    py = floor(this.y);
    // 2. Calculate the 1D index inside the mask's pixel array
    let index = 4 * (py * width + px);
    let maskAlpha = segmentation.mask.pixels[index + 3];
    let maskRed = segmentation.mask.pixels[index + 0];
    // If the mask pixel at this position is not black/transparent, it's a person
    if (maskAlpha > 0 && maskRed > 0) {
      this.color = "red";
    } else {
      this.color = this.originalColor;
    }
  }
}
