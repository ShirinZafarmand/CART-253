/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

//setting variables
let rectangle = {
  x:20, y:0, width:760, height:1, color1:115, color2:40, color3:40, yExpansion:1};


let circle1 = {
  x:400,  y:600, yb:500, size:500, size2:250, speed:-0.5};

let circle2 = {
  x:400,  y:590, yb:490, size:430, size2:200, speed:-0.7};

let circle3 = {
  x:400,  y:580, yb:480, size:360, size2:150, speed:-0.9};

let circle4 = {
  x:400,  y:570, yb:470, size:290, size2:100, speed:-1.1};

let circle5 = {
  x:400,  y:560, yb:460, size:230, size2:70, speed:-1.3};

let circle6 = {
  x:400,  y:550, yb:450, size:162, size2:45, speed:-1.45};

let circle7 = {
  x:400,  y:540, yb:440, size:100, size2:20, speed:-1.6};


let bg = {
  color:255};

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(800,1000);
}

// draw()
//
// Description of draw() goes here.
function draw() {

  //background color acoorded to mouseX
  background(bg.color);
  bg.color=map(mouseX,0,width,0,255);


  //red eefect on background
  fill(rectangle.color1, rectangle.color2,rectangle.color3);
  noStroke();
  rect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);
  rectangle.height=rectangle.height+rectangle.yExpansion;


  //fisrt surface of the cone
  noFill();
  stroke(200);
  ellipse(circle1.x,circle1.y,circle1.size,circle1.size2);
  circle1.y=circle1.y+circle1.speed;
  circle1.y=constrain(circle1.y,400,500);
     //fisrt surface of the globe
     ellipse(circle1.x,circle1.yb,circle1.size,circle1.size2);
     circle1.yb=circle1.yb-circle1.speed;
     circle1.yb=constrain(circle1.yb,500,600);


  //second surface of the cone
  noFill();
  stroke(200);
  ellipse(circle2.x,circle2.y,circle2.size,circle2.size2);
  circle2.y=circle2.y+circle2.speed;
  circle2.y=constrain(circle2.y,350,500);
     //second surface of the globe
     ellipse(circle2.x,circle2.yb,circle2.size,circle2.size2);
     circle2.yb=circle2.yb-circle2.speed;
     circle2.yb=constrain(circle2.yb,500,660);


  //third surface of the cone
  noFill();
  stroke(200);
  ellipse(circle3.x,circle3.y,circle3.size,circle3.size2);
  circle3.y=circle3.y+circle3.speed;
  circle3.y=constrain(circle3.y,290,500);
     //third surface of the globe
     ellipse(circle3.x,circle3.yb,circle3.size,circle3.size2);
     circle3.yb=circle3.yb-circle3.speed;
     circle3.yb=constrain(circle3.yb,500,710);


  //fourth surface of the cone
  noFill();
  stroke(200);
  ellipse(circle4.x,circle4.y,circle4.size,circle4.size2);
  circle4.y=circle4.y+circle4.speed;
  circle4.y=constrain(circle4.y,225,500);
     //fourth surface of the globe
     ellipse(circle4.x,circle4.yb,circle4.size,circle4.size2);
     circle4.yb=circle4.yb-circle4.speed;
     circle4.yb=constrain(circle4.yb,500,745);


  //fifth surface of the cone
  noFill();
  stroke(200);
  ellipse(circle5.x,circle5.y,circle5.size,circle5.size2);
  circle5.y=circle5.y+circle5.speed;
  circle5.y=constrain(circle5.y,155,500);
     //fifth surface of the globe
     ellipse(circle5.x,circle5.yb,circle5.size,circle5.size2);
     circle5.yb=circle5.yb-circle5.speed;
     circle5.yb=constrain(circle5.yb,500,770);


  //sixth surface of the cone
  noFill();
  stroke(200);
  ellipse(circle6.x,circle6.y,circle6.size,circle6.size2);
  circle6.y=circle6.y+circle6.speed;
  circle6.y=constrain(circle6.y,85,500);
     //sixth surface of the globe
     ellipse(circle6.x,circle6.yb,circle6.size,circle6.size2);
     circle6.yb=circle6.yb-circle6.speed;
     circle6.yb=constrain(circle6.yb,500,790);


  //seventh surface of the cone
  stroke(200);
  noFill();
  ellipse(circle7.x,circle7.y,circle7.size,circle7.size2);
  circle7.y=circle7.y+circle7.speed;
  circle7.y=constrain(circle7.y,25,500);
     //seventh surface of the globe
     ellipse(circle7.x,circle7.yb,circle7.size,circle7.size2);
     circle7.yb=circle7.yb-circle7.speed;
     circle7.yb=constrain(circle7.yb,500,800);

}
