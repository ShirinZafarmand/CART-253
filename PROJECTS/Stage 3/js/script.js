"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let alien;

let bg={
  r:24,
  g:18,
  b:110,
};

let moon={
  x:1500,
  y:1300,
  width:3100,
  height:1500,
  image:undefined,
  movement:1,
};

let astronaut={
  x:1490,
  y:590,
  width:500,
  height:300,
  fill:{ r:0, g:0, b:0},
  image:undefined,
  shrink:0.05,
}

let arrow={
  x:0,
  y:0,
  width:10,
  height:80,
  angle:0,
  rotation:0,
  fill:255,
  expansion:0,
  reduction:0
};

function preload(){
  moon.image=loadImage("assets/images/moon2.png");
  astronaut.image=loadImage("assets/images/astronaut.png");
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  textSize(32);
  textAlign(CENTER,CENTER);
  noStroke();

  //constrictiong the Aliens
  alien= new Aliens();
}


function draw() {
  background(bg.r,bg.g,bg.b);

  // making the moon surface slowly disapear from the screen
  moon.y = moon.y + moon.movement;

  //displaying moon
  image(moon.image,moon.x,moon.y,moon.width,moon.height);

  // Draw the astronaut
  image(astronaut.image,astronaut.x,astronaut.y,astronaut.width,astronaut.height);

  //arrow
  arrowDisplay();

  //aiming a lover
  aimingArrow();

  //shooting the arrow
  shootingArrow();

  //displaying Aliens
  push();
  alien.displayAlien1();
  alien.displayAlien2();
  alien.displayAlien3();
  alien.displayAlien4();
  alien.displayAlien5();
  pop();
}

function aimingArrow(){
  if (keyIsDown(37)){
    arrow.rotation=0.1;
    arrow.angle=arrow.angle+arrow.rotation}
    else if(keyIsDown(39)){
      arrow.rotation=-0.1;
      arrow.angle=arrow.angle+arrow.rotation}
    };

function arrowDisplay(){
  push();
  translate(1510,640);
  rotate(arrow.angle);
  fill(255);
  rect(arrow.x,arrow.y,arrow.width,arrow.height);
  pop();
};

function shootingArrow(){
  arrow.height=arrow.height+arrow.expansion;
  if(arrow.height>1000){
  noLoop();
 }
};

//shoot the arrow
function keyPressed(){
  if (keyCode===38){
    arrow.expansion=750}
  };
