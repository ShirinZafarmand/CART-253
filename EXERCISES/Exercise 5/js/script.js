"use strict";

/**************************************************
Exercise 5-
Shirin Zafarmand

Here is a description of this template p5 project.
**************************************************/
let paddle;
let score;
let gate;
let boxs=[];
let numBoxs=50;
let gravityForce=0.00025;
let balls=[];
let numBalls= 100;
let bg={
  r:0,
  g:0,
  b:0,
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(32);
  textAlign(CENTER,CENTER);
  score= new Score();
  gate = new Gate();
  paddle = new Paddle(100,100);
  for( let i=0; i <numBalls; i++){
    let x=random(0,width)
    let y= random(-50000,-50)
    let ball = new Ball(x,y)
    balls.push(ball)
  }

  for( let b=0; b <numBoxs; b++){
    let x=random(0,width)
    let y= random(-50000,-50)
    let box = new Box(x,y)
    boxs.push(box)
  }

}
function draw() {
background(bg.r,bg.g,bg.b);
gate.display()
gate.movement();
paddle.move();
paddle.display();
score.scaleDisplay();


for( let i=0; i<balls.length; i++){
  let ball=balls[i];
  if (ball.active)
  ball.gravity(gravityForce);
  ball.move();
  ball.display();
  ball.checkIfGoal();
  ball.framing();
 }

 for( let b=0; b<boxs.length; b++){
   let box=boxs[b];
   if (box.active)
   box.gravity(gravityForce);
   box.move();
   box.display();
   box.checkIfTouched();
  }
}
