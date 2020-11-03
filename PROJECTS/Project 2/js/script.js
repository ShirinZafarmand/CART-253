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

let trashSquad=[];
let squadSize=50;

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

let timer={
  x:0,
  y:0,
  width:30,
  height:2500,
  fill:255,
  shrink:2,
};


function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png");
  moon.image=loadImage("assets/images/moon2.png");
};


function setup() {
  createCanvas(windowWidth,windowHeight);

  //tarshes
  for (let i = 0; i < squadSize; i++){
    trashSquad[i]= createTrash(random(0,width),random(0,height));
  };
};

function createTrash(x,y){
  let trash={
    x:x,
    y:y,
    size:55,
    vx:0,
    vy:0,
    speed:3,
    shrink:3,
    fill:{
      r:235,
      g:180,
      b:52}
    };
    return trash;
  };

  function draw() {
    background(bg.r,bg.g,bg.b);

    for (let i = 0; i<trashSquad.length; i++){
      let trash=trashSquad[i];
      //bees movements and display
      moveTrash(trash);

      //bees encounter with user
      tarshUserEncounter(trash);

      //displaying bees
      displayTrash(trash);
    };

    //timer diaplay
    displayTimer();

    //checking the time user has left
    timerCheck();

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

        //user control
        if (keyIsDown(39)){
          astronaut.x=astronaut.x+5;
        }

        if (keyIsDown(37)){
          astronaut.x=astronaut.x-5;
        }

        if (keyIsDown(40)){
          astronaut.y.normal=astronaut.y.normal+4
        }

        if (keyIsDown(38)){
          astronaut.y.normal=astronaut.y.normal-4
        }
      }


      //trashes' movements
      function moveTrash(trash){
        let change=random(0,20)
        if (change<0.5){
          trash.vx=random(-trash.speed,trash.speed);
          trash.vy=random(-trash.speed,trash.speed);
        };

        trash.x=trash.x+trash.vx;
        trash.y=trash.y+trash.vy;

        trash.x=constrain(trash.x,0,width);
        trash.y=constrain(trash.y,0,height);
      };

      //displaying trashes
      function displayTrash(trash){
        push();
        fill(235, 180, 52);
        ellipse(trash.x,trash.y,trash.size);
        pop();
      };

      //collecting the space trashes
      function tarshUserEncounter(trash){
        let d =dist(trash.x,trash.y,astronaut.x,astronaut.y.normal)
        if(d<80){
          trash.size=0;
        }
      };

      //displaying timer
      function displayTimer(){
        fill(timer.fill);
        rect(timer.x,timer.y,timer.width,timer.height);
        timer.height=timer.height-timer.shrink;
      };

      //the time that user has for collecting trashes
      function timerCheck(){
        if(timer.height<=0){
          squadSize===0
        };
      };
