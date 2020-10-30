"use strict";

/**************************************************
Project 2-prototype stage
Shirin Zafarmand

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

  let surface={
    x:4000,
    y:400,
    width:400,
    height: 100,
    speed:-3,
  }

function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png")
  moon.image=loadImage("assets/images/moon2.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(bg.r,bg.g,bg.b)

  //star display
  fill(255)
  rectMode(CENTER)
  rect(surface.x,surface.y,surface.width,surface.height)

  //star enters the screen
  surface.x=surface.x+surface.speed,

//astronaut display
  imageMode(CENTER)
  image(astronaut.image,astronaut.x,astronaut.y.normal,astronaut.width,astronaut.height)
  image(moon.image,moon.x,moon.y,moon.width,moon.height)

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

//user control
  if (keyIsDown(39)){
    astronaut.x=astronaut.x+1;
  }

  if (keyIsDown(37)){
    astronaut.x=astronaut.x-1;
  }

//landing option
  if (keyIsDown(40)){
    astronaut.y.normal=astronaut.y.normal+4
  }


}
