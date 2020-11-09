"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bg={
  r:24,
  g:18,
  b:110,
};

let astronaut={
  x:1200,
  y:{
    max:650,
    min:450,
    normal:550
  },
  width:500,
  height:300,
  vx:0,
  vy:0,
  ax:0,
  ay:0,
  speed:1,
  fill:{ r:0, g:0, b:0},
  image:undefined,
  hover: true,
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
  x:1500,
  y:800,
  width:10,
  height:10,
  image:undefined,
  angle:0,
  varticalExpansion:1,
  horizontalExpansion:1,
  angle:0,
};

function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png");
  moon.image=loadImage("assets/images/moon2.png");
  blackHole.image=loadImage("assets/images/blackHole.png");
};


function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
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


    push()
    // if the moon is outside of the canvas the black hole apears rotating around itself
        if (moon.y >= 1700){
          translate(1500,800);
          rotate(blackHole.angle);
          image(blackHole.image,blackHole.x,blackHole.y,blackHole.width,blackHole.height);
          blackHole.angle=blackHole.angle+0.05;
          blackHole.height=blackHole.height+blackHole.varticalExpansion;
          blackHole.width=blackHole.width+blackHole.horizontalExpansion;
          blackHole.width=constrain(blackHole.width,10,1500);
          blackHole.height=constrain(blackHole.height,10,1500);
        }
    pop()


    //astronaut display
    imageMode(CENTER)
    image(astronaut.image,astronaut.x,astronaut.y.normal,astronaut.width,astronaut.height);


    //astronaut hover mode
    astronaut.y.normal= astronaut.y.normal+ astronaut.speed;

    if (astronaut.hover= true &&
      astronaut.y.normal>=astronaut.y.max){
        astronaut.speed=-astronaut.speed
      }

    if (astronaut.hover= true &&
      astronaut.y.normal<=astronaut.y.min){
        astronaut.speed=-astronaut.speed
      }

  //blackhole absorbtion

}
