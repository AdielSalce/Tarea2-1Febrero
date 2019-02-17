function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	if (mouseIsPressed){
		if(mouseX > 175 && mouseX <=225){
			if(mouseY > 175 && mouseY <=225){
				background(0,0,255);
			}
		}
  }
	rect(175,175,50,50);
	console.log(mouseX,mouseY);
}
