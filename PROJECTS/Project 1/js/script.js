"use strict";

/**************************************************
Project 1-
Shirin Zafarmand

Here is a description of this template p5 project.
**************************************************/
let bg={
  r:0,
  g:0,
  b:0
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
  x:600,
  y:600,
  size:98,
};

let troublesome1={
  size1:100,
  size2:0,
  expansion:5,
};

let troublesome2={
  size1:100,
  size2:0,
  expansion:5,
};

let troublesome3={
  size1:0,
  size2:100,
  expansion:5,
};


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
};



function draw() {
  background(bg.r,bg.g,bg.b);


//user
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
