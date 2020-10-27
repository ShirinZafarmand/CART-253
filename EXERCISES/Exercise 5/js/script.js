"use strict";
/**************************************************
Exercise 5- Intermidiate juggling
Shirin Zafarmand

the user has to catch the red balls and avoid green rectangle before the time ends. if it does, based on the score the user has, he/she wins or loses
**************************************************/
let state ='title';
let timer;
let score;
let gate;
let boxs=[];
let numBoxs=40;
let gravityForce=0.00025;
let balls=[];
let numBalls= 100;
let bg={
  r:0,
  g:0,
  b:0,
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(32);
  textAlign(CENTER,CENTER);
  //constructing timer
  timer= new Timer();
  //constructing score
  score= new Score();
  //constructing gate
  gate = new Gate();
  //constructing balls
  for( let i=0; i <numBalls; i++){
    let x=random(0,width);
    let y= random(-50000,-50);
    let ball = new Ball(x,y);
    balls.push(ball);
  }

  //constructing box
  for( let b=0; b <numBoxs; b++){
    let x=random(0,width);
    let y= random(-50000,-50);
    let box = new Box(x,y);
    boxs.push(box);
  };
};

function draw() {
  if(state==='title'){
    fill(15,40,30);
    text('catch enough red balls and avoid green boxes before times is up! ready ? click right.',width/2,height/2);}
    else if(state==='start!'){

      background(bg.r,bg.g,bg.b);
      //displaying timer and showing the time that is left
      timer.display();
      timer.shrink();
      //when time is overm shoe the ending titration(win/lose)
      timer.timeOver();
      //gate control and display
      gate.display();
      gate.movement();
      //displaying the scores user has achieved
      score.scaleDisplay();


      for( let i=0; i<balls.length; i++){
        let ball=balls[i];
        if (ball.active){
          ball.gravity(gravityForce);
          ball.move();
          ball.display();
          //check if the ball has passed the gate
          ball.checkIfGoal();
        };
      };

      for( let b=0; b<boxs.length; b++){
        let box=boxs[b];
        if (box.active)
        box.gravity(gravityForce);
        box.move();
        box.display();
        //check if the box has touched the gate borders
        box.checkIfTouched();
      };

      //ending titration based on if you have whon or lose
      endingTitration();
    };
  };

  //click to start
  function mousePressed(){
    if(state==='title'){
      state='start!'}
    };

    //displaying losing titration
    function endingTitration(){
      if (state === 'lose'){
        noLoop();
      };
    };

    //displaying winning titration
    function endingTitration(){
      if (state === 'win'){
        fill(255);
        text('YAY! you made it!' ,width/2,height/2)
      };
    };
