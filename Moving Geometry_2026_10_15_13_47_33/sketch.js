function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 10, 30);

  let s = 100 + sin(frameCount * 0.05) * 50;

  noStroke();

  fill(0, 150, 255, 180);
  ellipse(width / 2, height / 2, s * 2);

  fill(255, 100, 200, 120);
  ellipse(width / 2 + 40, height / 2, s * 1.5);

  fill(255, 255, 100, 100);
  ellipse(width / 2 - 40, height / 2, s);

fill(255);
textSize(32);
textAlign(CENTER);
text("Moving Geometry", width / 2, 80);

fill(180);
textSize(16);
text("Creative Coding Experiment", width / 2, 120);
}