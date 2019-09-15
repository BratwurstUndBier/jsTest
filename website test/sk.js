/*
 * @name Mouse 2D
 * @description Moving the mouse changes the position and
 * size of each box.
 */
function setup() {
  createCanvas(1280,200);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(230);
  fill(244,122,158);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(random(0,255),34,93);
  var inverseX = width-mouseX;
  var inverseY = height-mouseY;
  rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
}
