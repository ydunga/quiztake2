var can1 = document.getElementById('canvas1')
var ctx1 = can1.getContext('2d');

class Circle {
  constructor(x,y,dx,dy, radius) {
    this.x = x;
    this.y = y; 
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
  }
  
  draw() {
    ctx1.beginPath();
ctx1.arc(this.x,this.y,5,0,Math.PI*2, false);
ctx1.strokeStyle = "black";
ctx1.fillStyle = "red";
ctx1.fill();
    
  }
  
  update() {
    
    if (this.x + this.radius > 200 || this.x - this.radius < 0){
    this.dx = -this.dx
  }
  if(this.y + this.radius > 200 || this.y - this.radius < 0) {
     this.dy = -this.dy
     }
  
  this.x += this.dx;
  this.y += this.dy;
    this.draw();
    
  }
}
const circleArray = [];
for (let i = 0; i < 10; i++) {
  //starting positions of x and y
let radius = 1;  
let x = Math.random()* 200;
let y = Math.random()*200;
//starting velocity of x and y
let dx = (Math.random()-0.5)*5;
let dy = (Math.random()-0.5)*5;

  
  circleArray.push(new Circle(x,y,dx,dy,radius))
}



const animate = () => {
  requestAnimationFrame(animate);
  
  ctx1.clearRect(0,0, 200,200)
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()

var can2 = document.getElementById("canvas2");
var ctx2 = can2.getContext('2d');

class Circle2 {
  constructor(x2,y2,dx2,dy2, radius2) {
    this.x2 = x2;
    this.y2 = y2; 
    this.dx2 = dx2;
    this.dy2 = dy2;
    this.radius2 = radius2
  }
  
  draw2() {
    ctx2.beginPath();
ctx2.arc(this.x2,this.y2,5,0,Math.PI*2, false);
ctx2.strokeStyle = "black";
ctx2.fillStyle = "red";
ctx2.fill();
    
  }
  
  update2() {
    
    if (this.x2 + this.radius2 > 200 || this.x2 - this.radius2 < 0){
    this.dx2 = -this.dx2
  }
  if(this.y2 + this.radius2 > 200 || this.y2- this.radius2 < 0) {
     this.dy2 = -this.dy2
     }
  
  this.x2+= this.dx2;
  this.y2 += this.dy2;
    this.draw2();
    
  }
}
const circleArray2 = [];
for (let i = 0; i < 10; i++) {
  //starting positions of x and y
let radius2 = 1;  
let x2 = Math.random()* 200;
let y2 = Math.random()*200;
//starting velocity of x and y
let dx2 = (Math.random()-0.5)*15;
let dy2 = (Math.random()-0.5)*15;

  
  circleArray2.push(new Circle2(x2,y2,dx2,dy2,radius2))
}



const animate2 = () => {
  requestAnimationFrame(animate2);
  
  ctx2.clearRect(0,0, 200,200)
  for (let i = 0; i < circleArray2.length; i++) {
    circleArray2[i].update2()
  }
}

animate2()




