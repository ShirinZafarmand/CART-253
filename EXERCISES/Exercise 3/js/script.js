/**************************************************
Exercise 3- looking For Love
Shirin Zafarmand

**************************************************/


//Setting variables
let loveSeeker={
  x:1100,
  y:550,
  size:90,
  fill:{ r:127, g:127, b:127},
  };

let lover1={
  x:400,
  y:50,
  size:70,
  fill:{r:209, g:119, b:175},
  angle:0};

let lover2={
  x:500,
  y:50,
  size:30,
  fill:{r:209, g:119, b:175},
  angle:0};

let lover3={
  x:700,
  y:50,
  size:70,
  fill:{r:209, g:119, b:175},
  angle:0};

let lover4={
  x:1000,
  y:50,
  size:90,
  fill:{r:209, g:119, b:175},
  angle:0};

  let bg={
    r:0,
    g:0,
    b:0};

function setup() {
  createCanvas(windowWidth,windowHeight);

}



function draw() {
  background(bg.r,bg.g,bg.b)


// a blue sad circle love seeker in the middle of screen looking for love
  fill(loveSeeker.fill.r,loveSeeker.fill.g,loveSeeker.fill.b)
  noStroke()
  ellipse(loveSeeker.x,loveSeeker.y,loveSeeker.size)


  //orbits
    noFill()
    stroke(255)
    ellipse(1100,550,2100)
    ellipse(1100,550,1450)
    ellipse(1100,550,1040)
    ellipse(1100,550,880)


//lover 1 display
  push()
  translate(1100,550)
  rotate(lover1.angle)
  fill(lover1.fill.r,lover1.fill.g,lover1.fill.b)
  rect(lover1.x,lover1.y,lover1.size,lover1.size)
  lover1.angle=lover1.angle+0.05


//lover 2 display
  rotate(lover2.angle)
  rect(lover2.x,lover2.y,lover2.size,lover2.size)
  lover2.angle=lover2.angle+0.01


//lover 3 display
  rotate(lover3.angle)
  rect(lover3.x,lover3.y,lover3.size,lover3.size)
  lover3.angle=lover3.angle+0.017


//lover 4 display
  rotate(lover4.angle)
  rect(lover4.x,lover4.y,lover4.size,lover4.size)
  lover4.angle=lover4.angle+0.001
  pop()
}
