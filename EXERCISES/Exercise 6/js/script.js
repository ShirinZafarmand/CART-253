"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let mic;
let r;

// Angle and angular velocity, accleration
let theta;
let theta_vel;
let theta_acc;

let bg={
  r:24,
  g:18,
  b:110,
};

let astronaut={
  size:70,
  shrink:0.01,
  fill:{
    r:245,
    g:203,
    b:66,
  },
};

let moon={
  x:1500,
  y:1300,
  width:3100,
  height:1500,
  image:undefined,
  movement:1,
};

let blackHole={
  x:0,
  y:0,
  width:10,
  height:10,
  image:undefined,
  angle:0,
  varticalExpansion:1,
  horizontalExpansion:1,
  angle:0,
};


function preload(){
  moon.image=loadImage("assets/images/moon2.png");
  blackHole.image=loadImage("assets/images/blackHole.png");
};


function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);

  mic= new p5.AudioIn();
  mic.start();

  // Initializing all values for the absorption towards the blackhole
  r = height * 0.45;
  theta = 0;
  theta_vel = 0;
  theta_acc = 0.0001/2;
};


function draw() {
  background(bg.r,bg.g,bg.b);

  //displaying moon
  image(moon.image,moon.x,moon.y,moon.width,moon.height);

  //transition to the different dimension
     // making the moon surface slowly disapear from the screen
     moon.y = moon.y + moon.movement;

     //making the screen a little more darker(for spookier effect)
     bg.b = bg.b -1;


  // if the moon is outside of the canvas the black hole apears rotating around itself
  push()
  if (moon.y >= 1700){
    translate(width / 2, height / 2);
    rotate(blackHole.angle);
    image(blackHole.image,blackHole.x,blackHole.y,blackHole.width,blackHole.height);
    // blackhole rotation
    blackHole.angle=blackHole.angle+0.02;
    //the feeling o blackhole getting closer
    blackHole.height=blackHole.height+blackHole.varticalExpansion;
    blackHole.width=blackHole.width+blackHole.horizontalExpansion;
    //constraing blackholes size
    blackHole.width=constrain(blackHole.width,10,1500);
    blackHole.height=constrain(blackHole.height,10,1500);
  }
  pop()


  //mic input
  let level = mic.getLevel();

  //converting the level into the distance between the user and the blackhole
  let movement = map( level,0,1,0,110)
  r = r + movement

  //blackhole absorbtion
  push()
  // Translate the origin point to the center of the screen
  translate(width / 2, height / 2);
  // Converting polar to cartesian
  let x = r * cos(theta);
  let y = r * sin(theta);
  //decreasing the distance between the astronaut and the blackhole
  r = r - 0.3
  //shrinking astronauts size to have a diving effect
  astronaut.size=astronaut.size-astronaut.shrink

  // Draw the astronaut at the cartesian coordinate
  ellipseMode(CENTER);
  noStroke();
  fill(astronaut.fill.r,astronaut.fill.g,astronaut.fill.b);
  ellipse(x,y,astronaut.size);
  pop()

  // Applying acceleration and velocity to angle
  theta_vel += theta_acc /2;
  theta += theta_vel /2;
}
