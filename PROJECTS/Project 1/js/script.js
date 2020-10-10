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
  x:1000,
  y:900,
  size:98,
};

let life={
  x:0,
  y:0,
  size:40,
  size2:0,
  fill:{
    r:100,
    g:0,
    b:0}
}

let troublesome1={
  size1:100,
  size2:0,
  expansion:50,
};

let troublesome2={
  size1:110,
  size2:0,
  expansion:50,
};

let troublesome3={
  size1:0,
  size2:110,
  expansion:50,
};

let troublesome4={
  size1:0,
  size2:100,
  expansion:50,
};

let lifeGoals={
  fill:{
    r:255,
    g:137,
    b:33,
    alpha:200},
  x:600,
  y:500,
  size:100,
}

let lifeLimit=1500;

let state ='title';

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke()
};



function draw() {
  background(bg.r,bg.g,bg.b);

//screen title
if(state==='title'){
  fill(255);
  text('Love is shooting a shot in the dark. Are you feeling lucky today? Right click to start!',width/2,height/2);}
  else if(state==='start!'){

//troublesome 1
  fill(117, 117, 117)
  rect(windowWidth/4,0,troublesome1.size1,troublesome1.size2);
  troublesome1.size2 = troublesome1.size2 + troublesome1.expansion;
  if (troublesome1.size2>windowHeight/2){
    troublesome1.expansion= -troublesome1.expansion
  };
  if (troublesome1.size2<2){
    troublesome1.expansion= -troublesome1.expansion
  };


//troublesome 4
  rect(40,2*windowHeight/3,troublesome4.size1,troublesome4.size2);
  troublesome4.size1 = troublesome4.size1 + troublesome4.expansion;
  if (troublesome4.size1>windowWidth/4){
    troublesome4.expansion= -troublesome4.expansion
  };
  if (troublesome4.size1<2){
    troublesome4.expansion= -troublesome4.expansion
  };



//troublesome 2
rect(3*windowWidth/4,windowHeight/3,windowWidth/4,100);
rect(3*windowWidth/4,windowHeight/2,100,windowHeight/2);
push()
  fill(bg.r,bg.g,bg.b)
  stroke(bg.r,bg.g,bg.b)
  strokeWeight(50)
  rect(3*windowWidth/4,windowHeight/2,troublesome2.size1,troublesome2.size2);
  troublesome2.size2 = troublesome2.size2 + troublesome2.expansion;
  if (troublesome2.size2>windowHeight/2){
    troublesome2.expansion= -troublesome2.expansion
  };
  if (troublesome2.size2<2){
    troublesome2.expansion= -troublesome2.expansion
  };


//troublesome 3
  rect(3*windowWidth/4,windowHeight/3,troublesome3.size1,troublesome3.size2);
  troublesome3.size1 = troublesome3.size1 + troublesome3.expansion;
  if (troublesome3.size1>windowWidth/4){
    troublesome3.expansion= -troublesome3.expansion
  };
  if (troublesome3.size1<2){
    troublesome3.expansion= -troublesome3.expansion
  };
pop()


//users lives display
fill(life.fill.r,life.fill.g,life.fill.b)


// the forbidden areas
  //between user and troublesome 1
if(user.x<windowWidth/4+100 && user.x>windowWidth/4 && user.y>0 && user.y<windowHeight/2){
rect(life.x,life.y,life.size,life.size2)
life.size2=life.size2+30

};
  //betweem user and troublesome 2
if(user.x<3*windowWidth/4+100 && user.x>3*windowWidth/4 && user.y>windowHeight/2 && user.y<windowHeight){
  rect(life.x,life.y,life.size,life.size2)
  life.size2=life.size2+30
};
  //betweem user and troublesome 3
if(user.y<windowHeight/3+100 && user.y>windowHeight/3 && user.x>3*windowWidth/4 && user.x<windowWidth){
  rect(life.x,life.y,life.size,life.size2)
  life.size2=life.size2+30
};
  //between user and troublesome 4
if(user.x<windowWidth/4 && user.x>0 && user.y>2*windowHeight/3 && user.y<2*windowHeight/3+100){
  rect(life.x,life.y,life.size,life.size2)
  life.size2=life.size2+30
}

if(life.size2>lifeLimit){
  noLoop()
}

//user display and control
  fill(255, 229, 181)
  ellipse(user.x,user.y,user.size);
  if (keyIsDown(37)){
      user.x= user.x - 10;
    }
    else if(keyIsDown(39)){
      user.x=user.x + 10;
    }
    else if(keyIsDown(38)){
      user.y=user.y - 10;
    }
    else if(keyIsDown(40)){
      user.y=user.y + 10
    };

//life goals dislay
push()
fill(lifeGoals.fill.r,lifeGoals.fill.g,lifeGoals.fill.b)
rectMode(CENTER);
rect(lifeGoals.x,lifeGoals.y,lifeGoals.size)
lifeGoals.size=lifeGoals.size-0.3


//acheiving life goals
let d=dist(user.x,user.y,lifeGoals.x,lifeGoals.y)
if(d<lifeGoals.size/2 + user.size/2){
  lifeGoals.x=lifeGoals.x+random(-windowWidth,windowWidth)
  lifeGoals.y=lifeGoals.y+random(-windowHeight,windowHeight)
  lifeGoals.size=100
  lifeGoals.x=constrain(lifeGoals.x,0,windowWidth)
  lifeGoals.y=constrain(lifeGoals.y,0,windowHeight)
}

if(d>lifeGoals.size/2 + user.size/2 && lifeGoals.size<1){
  noLoops()
}




pop()



//horizantal borders
  for(let i = 0; i < 25; i++){

    fill(border.fill.r,border.fill.g,border.fill.b);
    rect(border.x,border.y,border.size1,border.size2);
    border.x = border.x + border.space;
  };

//vertical borders
 for(let b = 0; b < 25; b++){
    rect(border2.x,border2.y,border2.size1,border2.size2);
    border2.x = border2.x + border2.space;
 }
}
}
//click to start the game
function mousePressed(){
  if(state==='title'){
    state='start!'}
  };
