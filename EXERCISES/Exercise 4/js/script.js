"use strict";

let beeSquad=[];
let squadSize=170;

let bg={
  r:0,
  g:0,
  b:0
};

let queenBee={
  fill:{
    r:92,
    g:212,
    b:76,
  },
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:2
};

let user={
  x:0,
  y:0,
  size:50,
};


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  for (let i = 0; i < squadSize; i++){
    beeSquad[i]= createBee(random(0,width),random(0,height));
  };
  queenBee.x=random(0,width);
  queenBee.y=random(0,height);
};


function createBee(x,y){
  let bee={
    x:x,
    y:y,
    size:50,
    vx:0,
    vy:0,
    speed:5,
  };
  return bee;
};


function draw() {
  background(bg.r,bg.g,bg.b);

  for (let i = 0; i<beeSquad.length; i++){
    moveBee(beeSquad[i]);
  };
  for (let i=0; i<beeSquad.length; i++){
    displayBee(beeSquad[i]);
  };

  displayQueenBee();

  moveQueenBee();

  displayUser();

  beeUserEncounter();
};




function moveBee(bee){
  let change=random(0,40)
  if (change<0.5){
    bee.vx=random(-bee.speed,bee.speed);
    bee.vy=random(-bee.speed,bee.speed);
  }

  bee.x=bee.x+bee.vx;
  bee.y=bee.y+bee.vy;

  bee.x=constrain(bee.x,0,width);
  bee.y=constrain(bee.y,0,height);
};


function displayBee(bee){
  push();
  fill(235, 180, 52);
  ellipse(bee.x,bee.y,bee.size);
  pop();
};


function moveQueenBee(){
  let change=random(0,20)
  if (change<0.5){
    queenBee.vx=random(-queenBee.speed,queenBee.speed);
    queenBee.vy=random(-queenBee.speed,queenBee.speed);
  };

  queenBee.x=queenBee.x+queenBee.vx;
  queenBee.y=queenBee.y+queenBee.vy;

  queenBee.x=constrain(queenBee.x,0,width);
  queenBee.y=constrain(queenBee.y,0,height);
};



function displayQueenBee(){
  push();
  fill(96, 114, 230);
  ellipse(queenBee.x,queenBee.y,queenBee.size);
  pop();
};


function displayUser(){
  push();
  fill(230, 112, 96);
  user.x=mouseX;
  user.y=mouseY;
  ellipse(user.x,user.y,user.size);
  pop();
};


function beeUserEncounter(){
  let d =dist(user.x,user.y,bee.x,bee.y)
  if(d<user.size/2+bee.size/2){
    noLoop();
  };
};
