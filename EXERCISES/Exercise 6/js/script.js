"use strict";

/**************************************************
Exercise 6- p5.sound use on project 2
shirin zafarmand

my main project consists of 4 different stages. one of them is when the astronaut (here represented as a yellow circle)
faces a blackhole as has to run away from it by the simple 3rd Einstein physics role that every force creates another force
with the same amount but in the opposite direction. in this simulation the users voice is THE force. the atronaut is slowly
disapearing the in black hole and the only thing that can save it, is the users mic!
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
  shrink:0.03,
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

let astronaut1={
  width:300,
  height:190,
  fill:{ r:0, g:0, b:0},
  image:undefined,
  shrink:0.05,
}

let state ='title';

function preload(){
  moon.image=loadImage("assets/images/moon2.png");
  blackHole.image=loadImage("assets/images/blackHole.png");
  astronaut1.image=loadImage("assets/images/astronaut.png");
};


function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  textSize(32);
  textAlign(CENTER,CENTER);

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
  if (moon.y >= 1500){
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
  let movement = map( level,0,1,0,70)
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
  astronaut1.width=astronaut1.width-astronaut1.shrink
  astronaut1.height=astronaut1.height-astronaut1.shrink


  // Draw the astronaut at the cartesian coordinate
  image(astronaut1.image,x,y,astronaut1.width,astronaut1.height)

  // Applying acceleration and velocity to angle
  theta_vel =theta_vel+ theta_acc /2;
  theta = theta + theta_vel ;

  //check if sucked by the blackhole
  if (r<= 10){
    astronaut.size=0;
    state ='lose'
  }

  if (state === 'lose'){
    fill(255);
    text('oh no! too late' ,width/2,height/2);
  };

  //check if survived
  if (r>= 700){
    state ='win'
  }

  if (state === 'win'){
    fill(255);
    text('made it!' ,width/2,height/2);
  };
}
