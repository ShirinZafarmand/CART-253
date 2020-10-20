"use strict";

let beeSquad=[];
let squadSize=90;

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
  speed:6,
  accelerationLimit:500
};

let user={
  x:0,
  y:0,
  size:50,
};

let timer={
  x:0,
  y:0,
  size1:30,
  size2:1500,
  fill:255,
  shrink:3
};

  let state ='title';

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  textSize(32);
  textAlign(CENTER,CENTER);
  for (let i = 0; i < squadSize; i++){
    beeSquad[i]= createBee(random(0,width),random(0,height));
  };

  queenBee.x=random(width/2,width);
  queenBee.y=random(0,height);
};


function createBee(x,y){
  let bee={
    x:x,
    y:y,
    size:50,
    vx:0,
    vy:0,
    speed:1.5,
  };
  return bee;
};


function draw() {
  background(bg.r,bg.g,bg.b);
  if(state==='title'){
    fill(255);
    text("Try to avoid contact with bees and get to their queen before time's over. Simple! Ready? Click right",width/2,height/2);}
    else if(state==='start!'){
      for (let i = 0; i<beeSquad.length; i++){
        let bee=beeSquad[i];
        moveBee(bee);
        beeUserEncounter(bee);
        displayBee(bee);
      };

      for (let i=0; i<beeSquad.length; i++){
        let bee=beeSquad[i];
        moveBee(bee);
        beeUserEncounter(bee);
        displayBee(bee);

      };

      displayQueenBee();

      moveQueenBee();

      displayUser();

      queenUserEncounter();

      speedAcceleration();

      displayTimer();

      timerCheck();
    }
    else if(state==='end'){
      endingTitration();
    };
    }



function moveBee(bee){
  let change=random(0,20)
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
  let change=random(0,10)
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
  fill(255, 60, 33);
  user.x=mouseX;
  user.y=mouseY;
  ellipse(user.x,user.y,user.size);
  pop();
};


function beeUserEncounter(bee){
  let d =dist(user.x,user.y,bee.x,bee.y)
  if(d<user.size/2 + bee.size/2){
    state='end';
  }};

  function queenUserEncounter(){
    let d =dist(user.x,user.y,queenBee.x,queenBee.y)
    if(d<user.size/2 + queenBee.size/2){
      noLoop();
    };
  }

  function speedAcceleration(){
    let a=dist(user.x,user.y,queenBee.x,queenBee.y);
    if (a<queenBee.accelerationLimit){
      queenBee.speed=10
    }
  }

  function displayTimer(){
    fill(timer.fill)
    rect(timer.x,timer.y,timer.size1,timer.size2)
    timer.size2=timer.size2-timer.shrink
  }

  function timerCheck(){
    let a=dist(user.x,user.y,queenBee.x,queenBee.y);
    if(a>user.size/2 + queenBee.size/2 && timer.size2<1){
      state='end'
    }
  }

  function endingTitration(){
    if (state === 'end'){
      fill(255)
      text("You could not make it. Let's try another round" ,width/2,height/2)
    };
  };


  function mousePressed(){
    //click to start the game
    if(state==='title'){
      state='start!'}
    };
