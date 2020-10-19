"use strict";

let beeSquad=[];
let squadSize=250;

let bg={
  r:0,
  g:0,
  b:0
};



function setup() {
createCanvas(windowWidth,windowHeight);
noStroke();
for (let i = 0; i < squadSize; i++){
  beeSquad[i]= createBee(random(0,width),random(0,height));
}
}

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
}



function draw() {
  background(bg.r,bg.g,bg.b);
  for (let i = 0; i<beeSquad.length; i++){
    moveBee(beeSquad[i])
  }



  for (let i=0; i<beeSquad.length; i++){
      displayBee(beeSquad[i]);
  }
}




function moveBee(bee){
  let change=random(0,40)
  if (change<0.5){
    bee.vx=random(-bee.speed,bee.speed);
    bee.vy=random(-bee.speed,bee.speed);
  }

bee.x=bee.x+bee.vx;
bee.y=bee.y+bee.vy;

bee.x=constrain(bee.x,0,width);
bee.y=constrain(bee.y,0,height)
}


function displayBee(bee){
  push()
  fill(200,0,10)
  ellipse(bee.x,bee.y,bee.size)
  pop()
}
