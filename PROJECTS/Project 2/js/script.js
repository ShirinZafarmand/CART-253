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

let trashes=[];
let numTrashes=50;

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
}

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
};

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
  for (let i = 0; i<numTrashes; i++){
    let x=random(0,width);
    let y= random(0,height);
    let trash = new Trash(x,y);
    trashes.push(trash)
    };
  };


  function draw() {
    background(bg.r,bg.g,bg.b);


    //timer diaplay
    displayTimer();


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

        //trash
        for( let i=0; i < trashes.length; i++){
          let trash = trashes[i];
          if (trash.active){
            //trashes' movements
            trash.move();
            //displaying trashes
            trash.display();
            //collecting the space trashes
            trash.tarshUserEncounter();
            //remove the trashes when the times over
            trash.removal()
          };
        };
      };



      //displaying timer
      function displayTimer(){
        fill(timer.fill);
        rect(timer.x,timer.y,timer.width,timer.height);
        timer.height=timer.height-timer.shrink;
      };
