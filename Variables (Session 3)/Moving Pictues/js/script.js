/**************************************************
Moving Images.
Shirin Zafarmand

Moving Pictures to Create an Eclipse!
**************************************************/

//setting variables
let circle1 = {
  x:0,
  y:250,
  size:100,
  fill:255,
  alpha:200,
  speed:1,
  expansion:0.5
}

let circle2 = {
  x:500,
  y:250,
  size:20,
  fill:255,
  speed:-1,
  expansion:0.5
}

let bg = {
  r:0,
  g:0,
  b:0,
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500)

}

// draw()
//
// Description of draw() goes here.
function draw() {

//Background
background(bg.r,bg.g,bg.b)
bg.r=bg.r+1;

//circle1
fill(circle1.fill,circle1.alpha)
noStroke()
ellipse(circle1.x,circle1.y,circle1.size)
circle1.x=circle1.x+circle1.speed;
circle1.x=constrain(circle1.x,0,width/2)
circle1.size=circle1.size+circle1.expansion;

//circle2
fill(circle2.fill)
noStroke()
ellipse(circle2.x,circle2.y,circle2.size)
circle2.x=circle2.x+circle2.speed;
circle2.x=constrain(circle2.x,width/2,500);
circle2.size=circle2.size+circle2.expansion;

}
