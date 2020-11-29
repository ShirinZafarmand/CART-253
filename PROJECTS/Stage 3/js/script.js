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
  x:600,
  y:400,
  width:500,
  height:300,
  fill:{ r:0, g:0, b:0},
  image:undefined,
  shrink:0.05,
}

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

  //displaying moon
  image(moon.image,moon.x,moon.y,moon.width,moon.height);

  // Draw the astronaut
  image(astronaut.image,astronaut.x,astronaut.y,astronaut.width,astronaut.height);

  //absorbing the astronaut to the senter of the screen
  let dx = dist(astronaut.x,astronaut.y,width/2,height/2)
  let horizentalMovement= dx/100
  astronaut.x=astronaut.x+dx/100


  //displaying Aliens
  push();
  alien.displayAlien1();
  alien.displayAlien2();
  alien.displayAlien3();
  alien.displayAlien4();
  alien.displayAlien5();
  pop();

}
