//PAGE VARIABLES 
var canvas = document.querySelector('canvas');

//Resizes the Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Canvas Context (Paint Brush)
var c = canvas.getContext('2d');


function Circle(x, y, dx, dy, radius) {
	this.x = x ;
	this.y = y ; 
	this.dx = dx ; 
	this.dy = dy ; 
	this.radius = radius ; 

	this.draw = function () {

	c.beginPath();
	c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();

	 
	}

	this.update = function() {
	if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
		this.dx = dx * -1 ; 
	}
	if(this.y-this.radius < 0 || this.y + this.radius > innerHeight) {
		console.log("out");
		this.dy = dy * -1 ; 
	}



	this.x-= this.dx;
	this.y-= this.dy ;

	this.draw() ; 
 
	}
}


var circleArray = [];


for(var i = 0; i <= 100; i++) {
	var y = Math.random() * (innerHeight); 
var x = Math.random() * (innerWidth); 
var dx = (Math.random() - 0.5)  * 8;
var dy = (Math.random() - 0.5)  * 8;  
var radius = 30;

circleArray.push(new Circle(x, y, dx, dy, radius) ; 

}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth, innerHeight);


	circle.update();
	
}

animate();


