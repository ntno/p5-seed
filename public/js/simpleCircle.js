function setup() {
  var canvas = createCanvas(100, 100);
  canvas.parent('circleCanvasContainer')
  background(0);
}

function draw() {
  fill(255);
  ellipse(50, 50, 80, 80);
}
