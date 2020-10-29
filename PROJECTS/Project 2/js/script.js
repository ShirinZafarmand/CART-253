"use strict";

/**************************************************
Project 2-prototype stage
Shirin Zafarmand

Here is a description of this template p5 project.
**************************************************/
let bg={
  r:24,
  g:18,
  b:110
};

let astronaut={
    x:200,
    y:250,
    width:500,
    height:300,
    vx:0,
    vy:0,
    ax:0,
    ay:0,
    speed:0.4,
    fill:{ r:0, g:0, b:0},
    image:undefined
  };


function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png")}


function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(bg.r,bg.g,bg.b)


  imageMode(CENTER)
  image(astronaut.image,astronaut.x,astronaut.y,astronaut.width,astronaut.height)
}
