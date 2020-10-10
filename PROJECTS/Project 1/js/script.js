"use strict";

/**************************************************
Project 1-
Shirin Zafarmand

Here is a description of this template p5 project.
**************************************************/
let bg={
  r:51,
  g:50,
  b:49
};

let border={
  x:60,
  y:0,
  fill:{r:176, g:117, b:28},
  size1:1,
  size2:1200,
  space:100
};

let border2={
  x:0,
  y:100,
  fill:{r:176, g:117, b:28},
  size1:1200,
  size2:1,
  space:100
};

let user={
  fill:{
    r:162,
    g:176,
    b:95},
  x:1000,
  y:900,
  size:98,
  movement:-10
};

let life={
  x:0,
  y:0,
  size:0,
  speed:100,
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
    expansion:60
  };

  let barrier2={
    size1:0,
    size2:100,
    expansion:60
  };

  let barrier3={
    size1:0,
    size2:110,
    expansion:60
  };

  let barrier4={
    size1:110,
    size2:0,
    expansion:60
  };

  let lifeGoals={
    fill:{
      r:255,
      g:137,
      b:33
    },
    x:600,
    y:500,
    size:100
  };

  let state ='title';

  function setup() {
    createCanvas(windowWidth,windowHeight);
    noStroke();
    textSize(32);
    textAlign(CENTER,CENTER);
  };



  function draw() {
    background(bg.r,bg.g,bg.b);

    //screen title
    if(state==='title'){
      fill(255);
      text('A life simulation.Try to avoid toxic people that are hoping to distract you. Do not hesitate, reach your life goals before they fade away! you ready? click right! ',width/2,height/2);}
      else if(state==='start!'){

        //life barrier 1 display
        barrier1Display();

        //life barrier 2 display
        barrier2Display();

        //life barrier 3 display
        barrier3Display()

        //life barrier 4 display
        barrier4Display()

        //users life color display
        fill(life.fill.r,life.fill.g,life.fill.b,life.fill.alpha);
        if(life.size>windowWidth){
          noLoop()
        };

        // the forbidden areas

        //between user and barrier 1
        barrier1UserEncounter()

        //betweem user and barrier 2
        barrier2UserEncounter()

        //betweem user and barrier 3
        barrier3UserEncounter()

        //between user and barrier 4
        barrier4UserEncounter()

        //user display and control
        userControl()

        //life goals dislay
        lifeGoalsDisplay()

        //acheiving life goals
        achievment()

        //horizontal borders
      //  horizontalBorders()

        //vertical borders
      //  verticalBorders()
      };
    };



    function barrier1Display(){
      //life barrier 1 display
      fill(barrier1.fill.r,barrier1.fill.g,barrier1.fill.b);
      rect(windowWidth/4,0,barrier1.size1,barrier1.size2);
      barrier1.size2 = barrier1.size2 + barrier1.expansion;
      if (barrier1.size2>windowHeight/2){
        barrier1.expansion= -barrier1.expansion
      };
      if (barrier1.size2===0){
        barrier1.expansion= -barrier1.expansion
      };
    };


    function barrier2Display(){
      //life barrier 2 display
      rect(0,2*windowHeight/3,barrier2.size1,barrier2.size2);
      barrier2.size1 = barrier2.size1 + barrier2.expansion;
      if (barrier2.size1>windowWidth/4){
        barrier2.expansion= -barrier2.expansion
      };
      if (barrier2.size1===0){
        barrier2.expansion= -barrier2.expansion
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
        barrier3.expansion= -barrier3.expansion
      };
      if (barrier3.size1===0){
        barrier3.expansion= -barrier3.expansion
      };
    };


    function barrier4Display(){
      //life barrier 4 display
      rect(3*windowWidth/4,windowHeight/2,barrier4.size1,barrier4.size2);
      barrier4.size2 = barrier4.size2 + barrier4.expansion;
      if (barrier4.size2>windowHeight/2){
        barrier4.expansion= -barrier4.expansion
      };
      if (barrier4.size2===0){
        barrier4.expansion= -barrier4.expansion
      };
        pop()
    };


    function barrier1UserEncounter(){
      if(user.x<windowWidth/4+100 && user.x>windowWidth/4 && user.y>0 && user.y<windowHeight/2){
        rect(life.x,life.y,life.size,windowHeight);
        life.size=life.size+life.speed
      };
    };


    function barrier2UserEncounter(){
      if(user.x<3*windowWidth/4+100 && user.x>3*windowWidth/4 && user.y>windowHeight/2 && user.y<windowHeight){
        rect(life.x,life.y,life.size,windowHeight);
        life.size=life.size+life.speed
      };
    };


    function barrier3UserEncounter(){
      if(user.y<windowHeight/3+100 && user.y>windowHeight/3 && user.x>3*windowWidth/4 && user.x<windowWidth){
        rect(life.x,life.y,life.size,windowHeight);
        life.size=life.size+life.speed
      };
    };


    function barrier4UserEncounter(){
      if(user.x<windowWidth/4 && user.x>0 && user.y>2*windowHeight/3 && user.y<2*windowHeight/3+100){
        rect(life.x,life.y,life.size,windowHeight);
        life.size=life.size+life.speed
      };
    };


    function userControl(){
      //user display and control
      fill(user.fill.r,user.fill.g,user.fill.b)
      ellipse(user.x,user.y,user.size);
      if (keyIsDown(37)){
        user.x= user.x + user.movement
      }
      else if(keyIsDown(39)){
        user.x=user.x - user.movement
      }
      else if(keyIsDown(38)){
        user.y=user.y + user.movement
      }
      else if(keyIsDown(40)){
        user.y=user.y - user.movement
      };
      user.x=constrain(user.x,0,windowWidth);
      user.y=constrain(user.y,0,windowHeight);
    };


    function lifeGoalsDisplay(){
      //life goals dislay
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
        lifeGoals.y=constrain(lifeGoals.y,0,windowHeight)
      }

      if(d>lifeGoals.size/2 + user.size/2 && lifeGoals.size<1){
        noLoop()
      };
    };


    function horizontalBorders(){
      //horizontal borders
      border.x=60;
      for(let i = 0; i < 25; i++){
        fill(border.fill.r,border.fill.g,border.fill.b);
        rect(border.x,border.y,border.size1,border.size2);
        border.x = border.x + border.space;
      };
    };


    function verticalBorders(){
      //vertical borders
      border2.x=0;
      for(let b = 0; b < 25; b++){
        rect(border2.x,border2.y,border2.size1,border2.size2);
        border2.x = border2.x + border2.space;
      };
    };


    //click to start the game
    function mousePressed(){
      if(state==='title'){
        state='start!'}
      };
