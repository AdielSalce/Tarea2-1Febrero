function setup() {
  createCanvas(400, 400);
  background(0);
  rect(175,175,50,50);
}

function draw() {
  
  if(mouseIsPressed && mouseX > 175 && mouseY > 175 && mouseX < 225 && mouseY < 225){
	  background(0,0,255);
    rect(175,175,50,50);
  }
  else
  {
	  background(0);
    rect(175,175,50,50);
  }
}
