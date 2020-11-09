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
};



function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png");
  moon.image=loadImage("assets/images/moon2.png");
};



function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
    background(bg.r,bg.g,bg.b);

    //moon displaying
    image(moon.image,moon.x,moon.y,moon.width,moon.height)

    //astronaut display
    imageMode(CENTER)
    image(astronaut.image,astronaut.x,astronaut.y.normal,astronaut.width,astronaut.height)


    //astronaut hover mode
    astronaut.y.normal= astronaut.y.normal+ astronaut.speed

    if (astronaut.hover= true &&
      astronaut.y.normal>=astronaut.y.max){
        astronaut.speed=-astronaut.speed
      }

      if (astronaut.hover= true &&
        astronaut.y.normal<=astronaut.y.min){
          astronaut.speed=-astronaut.speed
        }

}
