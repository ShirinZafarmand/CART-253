"use strict";

/**************************************************
Exercise 4- Age of Aquariums
Shirin Zafarmand

A game in which the user must avoid contact with little bees on the screen and get to to their queen before the time ends.
**************************************************/

// setting variables and arrays
let beeSquad=[];
let squadSize=180;

let bg={
  r:0,
  g:0,
  b:0,
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
  accelerationLimit:500,
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
  shrink:3,
};

let state ='title';

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  textSize(32);
  textAlign(CENTER,CENTER);

  //creating small bees all over the screen
  for (let i = 0; i < squadSize; i++){
    beeSquad[i]= createBee(random(0,width),random(0,height));
  };

  // random position for queen bee
  queenBee.x=random(width/2,width);
  queenBee.y=random(0,height);
};


function createBee(x,y){
  let bee={
    x:x,
    y:y,
    size:55,
    vx:0,
    vy:0,
    speed:3,
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
        //bees movements and display
        moveBee(bee);

        //bees encounter with user
        beeUserEncounter(bee);

        //displaying bees
        displayBee(bee);
      };

      //disoleying queen bee
      displayQueenBee();

      // queen bee's movements
      moveQueenBee();

      //user's control and display
      displayUser();

      // user and queeb bee contact
      queenUserEncounter();

      // queen bee's speed acceleration everytime user comes close to it
      speedAcceleration();

      //timer diaplay
      displayTimer();

      //checking the time user has left
      timerCheck();
    }

    else if(state==='end'){
      endingTitration();
    };
  };


  //bee's movement
  function moveBee(bee){
    let change=random(0,20)
    if (change<0.5){
      bee.vx=random(-bee.speed,bee.speed);
      bee.vy=random(-bee.speed,bee.speed);
    };

    bee.x=bee.x+bee.vx;
    bee.y=bee.y+bee.vy;

    bee.x=constrain(bee.x,0,width);
    bee.y=constrain(bee.y,0,height);
  };

  //displaying bees
  function displayBee(bee){
    push();
    fill(235, 180, 52);
    ellipse(bee.x,bee.y,bee.size);
    pop();
  };

  //queen bee's movement
  function moveQueenBee(){
    let change=random(0,10);
    if (change<0.5){
      queenBee.vx=random(-queenBee.speed,queenBee.speed);
      queenBee.vy=random(-queenBee.speed,queenBee.speed);
    };

    queenBee.x=queenBee.x+queenBee.vx;
    queenBee.y=queenBee.y+queenBee.vy;

    queenBee.x=constrain(queenBee.x,0,width);
    queenBee.y=constrain(queenBee.y,0,height);
  };


  //displaying queen bee
  function displayQueenBee(){
    push();
    fill(96, 114, 230);
    ellipse(queenBee.x,queenBee.y,queenBee.size);
    pop();
  };

  //user display and movement
  function displayUser(){
    push();
    fill(255, 60, 33);
    user.x=mouseX;
    user.y=mouseY;
    ellipse(user.x,user.y,user.size);
    pop();
  };

  //bee and user encounter
  function beeUserEncounter(bee){
    let d =dist(user.x,user.y,bee.x,bee.y)
    if(d<user.size/2 + bee.size/2){
      state='end';
    }
  };

  //queen bee and user encounter
  function queenUserEncounter(){
    let d =dist(user.x,user.y,queenBee.x,queenBee.y)
    if(d<user.size/2 + queenBee.size/2){
      noLoop();
    };
  };

  // queen bee's speed acceleration when mouse comes too close
  function speedAcceleration(){
    let a=dist(user.x,user.y,queenBee.x,queenBee.y);
    if (a<queenBee.accelerationLimit){
      queenBee.speed=10;
    };
  };

  //displaying timer
  function displayTimer(){
    fill(timer.fill);
    rect(timer.x,timer.y,timer.size1,timer.size2);
    timer.size2=timer.size2-timer.shrink;
  };

  //the time that user has till catching queen bee
  function timerCheck(){
    let a=dist(user.x,user.y,queenBee.x,queenBee.y);
    if(a>user.size/2 + queenBee.size/2 && timer.size2<1){
      state='end';
    };
  };

  //ending titration
  function endingTitration(){
    if (state === 'end'){
      fill(255);
      text("You could not make it. Let's try another round" ,width/2,height/2);
    };
  };

  //click to start
  function mousePressed(){
    if(state==='title'){
      state='start!'};
    };
