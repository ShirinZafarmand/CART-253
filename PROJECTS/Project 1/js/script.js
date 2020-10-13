"use strict";

/**************************************************
Project 1- Life As We Know It
Shirin Zafarmand

A game in which one tries to achieve life goals that are illustrated as green rectangles. In this simulation the user has control over
the circle's movement with page up, down, left, right keys.the user must avoid enteracting with toxic people(grey rectangles) and attain
goals before they vanish. In the meantime there is a floating small gift on the screen that if touched, accelarates user's movements.
**************************************************/
let bg={
  r:51,
  g:50,
  b:49
};

let user={
  fill:{
    r:173,
    g:135,
    b:29
  },
  x:1000,
  y:900,
  size:98,
  movement:-10
};

let warning={
  x:0,
  y:0,
  size:0,
  speed:110,
  fill:{
    r:100,
    g:0,
    b:0,
    alpha:100}
  };

  let barrier1={
    fill:{
      r:117,
      g:117,
      b:117},
      size1:100,
      size2:0,
      expansion:64
    };

    let barrier2={
      size1:0,
      size2:100,
      expansion:66
    };

    let barrier3={
      size1:0,
      size2:110,
      expansion:68
    };

    let barrier4={
      size1:110,
      size2:0,
      expansion:70
    };

    let lifeGoals={
      fill:{
        r:73,
        g:115,
        b:36
      },
      x:600,
      y:500,
      size:100
    };

    let ancillaryPack={
      fill:{
        r:255,
        g:244,
        b:125
      },
      x:1200,
      y:1000,
      size:40,
      speed:7,
      vx:0,
      vy:0,
      angle:0.05
    };

    let state ='title';

    function setup() {
      createCanvas(windowWidth,windowHeight);
      noStroke();
      textSize(32);
      textAlign(CENTER,CENTER);
      ancillaryPack.vx=ancillaryPack.speed;
    };



    function draw() {
      background(bg.r,bg.g,bg.b);

      //starting screen title
      if(state==='title'){
        fill(255);
        text('A life simulation.Try to avoid toxic people that are hoping to distract you. Do not hesitate, achieve your life goals before they fade away! you ready? click right! ',width/2,height/2);}
        else if(state==='start!'){

          //life barrier 1 display
          barrier1Display();

          //life barrier 2 display
          barrier2Display();

          //life barrier 3 display
          barrier3Display();

          //life barrier 4 display
          barrier4Display();

          //displaying warning for a collision between toxic rectangles and user
          warningDisplay();
          
          // the forbidden areas
          //between user and barrier 1
          barrier1UserEncounter();

          //betweem user and barrier 2
          barrier2UserEncounter();

          //betweem user and barrier 3
          barrier3UserEncounter();

          //between user and barrier 4
          barrier4UserEncounter();

          //user's display and control
          userControl();

          //life goal dislay
          lifeGoalsDisplay();

          //acheiving life goals(reaching the green rectangle)
          achievment();

          //having a premium speed in form of a small yellow rectangle
          ancillaryDisplay();
        }
        //ending titration
        else if(state==='end'){
          endingTitration();
        };
      };


      function barrier1Display(){
        //life barrier 1 display
        fill(barrier1.fill.r,barrier1.fill.g,barrier1.fill.b);
        rect(windowWidth/4,0,barrier1.size1,barrier1.size2);
        barrier1.size2 = barrier1.size2 + barrier1.expansion;
        if (barrier1.size2>windowHeight/2){
          barrier1.expansion= -barrier1.expansion;
        };
        if (barrier1.size2===0){
          barrier1.expansion= -barrier1.expansion;
        };
      };


      function barrier2Display(){
        //life barrier 2 display
        rect(0,2*windowHeight/3,barrier2.size1,barrier2.size2);
        barrier2.size1 = barrier2.size1 + barrier2.expansion;
        if (barrier2.size1>windowWidth/4){
          barrier2.expansion= -barrier2.expansion;
        };
        if (barrier2.size1===0){
          barrier2.expansion= -barrier2.expansion;
        };
      };


      function barrier3Display(){
        //life barrier 3 display
        rect(3*windowWidth/4,windowHeight/3,windowWidth/4,100);
        rect(3*windowWidth/4,windowHeight/2,100,windowHeight/2);
        push();
        fill(bg.r,bg.g,bg.b);
        stroke(bg.r,bg.g,bg.b);
        strokeWeight(50);
        rect(3*windowWidth/4,windowHeight/3,barrier3.size1,barrier3.size2);
        barrier3.size1 = barrier3.size1 + barrier3.expansion;
        if (barrier3.size1>windowWidth/4){
          barrier3.expansion= -barrier3.expansion;
        };
        if (barrier3.size1===0){
          barrier3.expansion= -barrier3.expansion;
        };
      };


      function barrier4Display(){
        //life barrier 4 display
        rect(3*windowWidth/4,windowHeight/2,barrier4.size1,barrier4.size2);
        barrier4.size2 = barrier4.size2 + barrier4.expansion;
        if (barrier4.size2>windowHeight/2){
          barrier4.expansion= -barrier4.expansion;
        };
        if (barrier4.size2===0){
          barrier4.expansion= -barrier4.expansion;
        };
        pop();
      };


      function barrier1UserEncounter(){
        if(user.x<windowWidth/4+100 && user.x>windowWidth/4 && user.y>0 && user.y<windowHeight/2){
          rect(warning.x,warning.y,warning.size,windowHeight);
          warning.size=warning.size+warning.speed;
        };
      };


      function barrier2UserEncounter(){
        if(user.x<3*windowWidth/4+100 && user.x>3*windowWidth/4 && user.y>windowHeight/2 && user.y<windowHeight){
          rect(warning.x,warning.y,warning.size,windowHeight);
          warning.size=warning.size+warning.speed;
        };
      };


      function barrier3UserEncounter(){
        if(user.y<windowHeight/3+100 && user.y>windowHeight/3 && user.x>3*windowWidth/4 && user.x<windowWidth){
          rect(warning.x,warning.y,warning.size,windowHeight);
          warning.size=warning.size+warning.speed;
        };
      };


      function barrier4UserEncounter(){
        if(user.x<windowWidth/4 && user.x>0 && user.y>2*windowHeight/3 && user.y<2*windowHeight/3+100){
          rect(warning.x,warning.y,warning.size,windowHeight);
          warning.size=warning.size+warning.speed;
        };
      };


      function warningDisplay(){
        fill(warning.fill.r,warning.fill.g,warning.fill.b,warning.fill.alpha);
        if(warning.size>windowWidth){
          state='end';
        };
      };


      function userControl(){
        //user display and control
        fill(user.fill.r,user.fill.g,user.fill.b)
        ellipse(user.x,user.y,user.size);
        if (keyIsDown(37)){
          user.x= user.x + user.movement;
        }
        else if(keyIsDown(39)){
          user.x=user.x - user.movement;
        }
        else if(keyIsDown(38)){
          user.y=user.y + user.movement;
        }
        else if(keyIsDown(40)){
          user.y=user.y - user.movement;
        };
        user.x=constrain(user.x,0,windowWidth);
        user.y=constrain(user.y,0,windowHeight);
      };


      function lifeGoalsDisplay(){
        //life goals dislay(reaching the green rectangle)
        push();
        rectMode(CENTER);
        fill(lifeGoals.fill.r,lifeGoals.fill.g,lifeGoals.fill.b);
        rect(lifeGoals.x,lifeGoals.y,lifeGoals.size);
        lifeGoals.size=lifeGoals.size-0.3;
        pop();
      };


      function achievment(){
        //acheiving life goals
        let d=dist(user.x,user.y,lifeGoals.x,lifeGoals.y);
        if(d<lifeGoals.size/2 + user.size/2){
          lifeGoals.x=lifeGoals.x+random(-windowWidth,windowWidth);
          lifeGoals.y=lifeGoals.y+random(-windowHeight,windowHeight);
          lifeGoals.size=100;
          lifeGoals.x=constrain(lifeGoals.x,0,windowWidth);
          lifeGoals.y=constrain(lifeGoals.y,0,windowHeight);
        };

        if(d>lifeGoals.size/2 + user.size/2 && lifeGoals.size<1){
          state='end';
        };
      };


      function ancillaryDisplay(){
        //ancillary pack automated movement
        let change=random();
        if (change<0.03){
          ancillaryPack.vx=random(-ancillaryPack.speed,ancillaryPack.speed);
          ancillaryPack.vy=random(-ancillaryPack.speed,ancillaryPack.speed);
        };

        ancillaryPack.x=ancillaryPack.x+ancillaryPack.vx;
        ancillaryPack.y=ancillaryPack.y+ancillaryPack.vy;

        //speed ancillary Pack display
        fill(ancillaryPack.fill.r,ancillaryPack.fill.g,ancillaryPack.fill.b);
        rect(ancillaryPack.x,ancillaryPack.y,ancillaryPack.size);

        //ancillary pack's influence on user's speed
        let d2=dist(user.x,user.y,ancillaryPack.x,ancillaryPack.y);
        if(d2<ancillaryPack.size/2+user.size/2){
          user.movement=user.movement-2.5;
          ancillaryPack.size=0;
        };
      };


      function endingTitration(){
        if (state === 'end'){
          fill(255)
          text('You lost your chances. Well life is not all about the acheivments and goals, it is about enjoying life. Did you have fun playing the game? If so Consider it a small life acheivment ;)' ,width/2,height/2)
        };
      };


      function mousePressed(){
        //click to start the game
        if(state==='title'){
          state='start!'}
        };
