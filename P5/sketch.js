function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(220);
  fill(200,100,150);
  noStroke();
  ellipse(200,200,200,200);

  fill(100,150,200);
  noStroke();
  ellipse(600,150,500,500);

  fill(150,200,100);
  noStroke();
  ellipse(400,500,400,400);

  fill(200,150,200);
  noStroke();
  ellipse(800, 500, 500, 500);

  fill(100,200,150);
  noStroke();
  rect(700, 200, 150, 150);

  fill(150,100,200);
  noStroke();
  rect(100, 400, 250, 250);

  fill(200,150,100);
  noStroke();
  rect(500, 350, 300, 300);

  fill(100,200,200);
  noStroke();
  rect(300, 100, 200, 200);

  fill(150,200,150);
  noStroke();
  ellipse(mouseX, 250, 100, 100);

  fill(200,100,100);
  noStroke();
  rect(300, mouseY, 75, 75);

  fill(200,150,100);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}
