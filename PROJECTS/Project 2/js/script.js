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
  shrink:8,
};

let spaceship={
  x:200,
  y:200,
  width:0,
  height:0,
  image:undefined,
  expansion:1,
  shift:500,
};

let weapon1={
  fill:255,
  size:100
}
//let weapon1xLocations = [700, 200, 1700];
//let weapon1yLocation = [400,500,200];

let weapon1Locations = [{x: 0, y: 0}, {x: 50, y: 0}, {x: 150, y: 150}];

function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png");
  moon.image=loadImage("assets/images/moon2.png");
  spaceship.image=loadImage("assets/images/spaceship.png")
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


  //spaceship display
    if (timer.height <= 0){

      //making spaceships apear slowly
      spaceship.width=spaceship.width+spaceship.expansion+1
      spaceship.height=spaceship.height+spaceship.expansion

      spaceship.width=constrain(spaceship.width,0,450)
      spaceship.height=constrain(spaceship.height,0,300)


      image(spaceship.image,spaceship.x,spaceship.y,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x,spaceship.y+spaceship.shift/2,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x,spaceship.y+spaceship.shift,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x,spaceship.y+1.5*spaceship.shift,spaceship.width,spaceship.height)

      image(spaceship.image,spaceship.x+spaceship.shift,spaceship.y,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+spaceship.shift,spaceship.y+spaceship.shift/2,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+spaceship.shift,spaceship.y+spaceship.shift,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+spaceship.shift,spaceship.y+1.5*spaceship.shift,spaceship.width,spaceship.height)

      image(spaceship.image,spaceship.x+2*spaceship.shift,spaceship.y,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+2*spaceship.shift,spaceship.y+spaceship.shift/2,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+2*spaceship.shift,spaceship.y+spaceship.shift,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+2*spaceship.shift,spaceship.y+1.5*spaceship.shift,spaceship.width,spaceship.height)

      image(spaceship.image,spaceship.x+3*spaceship.shift,spaceship.y,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+3*spaceship.shift,spaceship.y+spaceship.shift/2,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+3*spaceship.shift,spaceship.y+spaceship.shift,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+3*spaceship.shift,spaceship.y+1.5*spaceship.shift,spaceship.width,spaceship.height)

      image(spaceship.image,spaceship.x+4*spaceship.shift,spaceship.y,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+4*spaceship.shift,spaceship.y+spaceship.shift/2,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+4*spaceship.shift,spaceship.y+spaceship.shift,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+4*spaceship.shift,spaceship.y+1.5*spaceship.shift,spaceship.width,spaceship.height)

      image(spaceship.image,spaceship.x+5*spaceship.shift,spaceship.y,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+5*spaceship.shift,spaceship.y+spaceship.shift/2,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+5*spaceship.shift,spaceship.y+spaceship.shift,spaceship.width,spaceship.height)
      image(spaceship.image,spaceship.x+5*spaceship.shift,spaceship.y+1.5*spaceship.shift,spaceship.width,spaceship.height)
  };

  //displaying the  2 weapons that are hidden under spaceships
  if (spaceship.width>= 450){
    push();
    fill(255);
    ellipse(random(weapon1Locations),weapon1.size)
    pop();
  };
}



  //displaying timer
  function displayTimer(){
    fill(timer.fill);
    rect(timer.x,timer.y,timer.width,timer.height);
    timer.height=timer.height-timer.shrink;
  };
