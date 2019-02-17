var x = 0,y = 200;
var velocidad = 5;
var vuelta = 0;
function setup() {
  createCanvas(400, 400);
	 background(0);
}

function draw() {
	
		background(0);
		fill(0,0,255);
		ellipse(x,y,50,50);
  
		if(x < 375 && vuelta == 0)
		{
			x=x+velocidad;
			if(x >= 375) 
        vuelta = 1;
		}
		else {
			x=x-velocidad;
			if(x <= 25) 
        vuelta = 0;
		}
			
}
