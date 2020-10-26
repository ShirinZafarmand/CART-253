"use strict";

/**************************************************
Exercise 5-
Shirin Zafarmand

Here is a description of this template p5 project.
**************************************************/
let paddle;
let gravityForce=0.00025;
let balls=[];
let numBalls= 100;
let bg={
  r:0,
  g:0,
  b:0,
};

let gate={
  x:500, y:900 , width:200, height:20,
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(32);
  textAlign(CENTER,CENTER);
  paddle = new Paddle(100,100);
  for( let i=0; i <numBalls; i++){
    let x=random(0,width)
    let y= random(-50000,-50)
    let ball = new Ball(x,y)
    balls.push(ball)
  }
}


function draw() {
background(bg.r,bg.g,bg.b);
push()
fill(255)
rect(gate.x,gate.y,gate.width,gate.height)
pop()
paddle.move();
paddle.display();


if (keyIsDown(37)){
  gate.x=gate.x-10;}

if(keyIsDown(39)){
  gate.x=gate.x+10;}

for( let i=0; i<balls.length; i++){
  let ball=balls[i];
  if (ball.active)
  ball.gravity(gravityForce);
  ball.move();
  ball.bounce(paddle);
  ball.display();
  ball.checkIfGoal();
  ball.framing();
 }
}
