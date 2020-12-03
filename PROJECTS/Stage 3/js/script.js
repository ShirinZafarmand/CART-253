"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bulletsFired = [];
let targetBalloons = [];
let turPosX = 1490;
let turPosY = 590;
var onOff;
let aliens=[];
let numAliens= 2;
let x1=600;
let x2=610;

let bg={
  r:24,
  g:18,
  b:110,
};

let moon={
  x:1500,
  y:1300,
  width:3100,
  height:1500,
  image:undefined,
  movement:1,
};


let astronaut={
  x:0,
  y:0,
  width:500,
  height:300,
  fill:{ r:0, g:0, b:0},
  image:undefined,
  shrink:0.05,
  tremble:0.1,
  state:true,
}


function preload(){
  moon.image=loadImage("assets/images/moon2.png");
  astronaut.image=loadImage("assets/images/astronaut.png");
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  textSize(32);
  textAlign(CENTER,CENTER);
  noStroke();
  angleMode(DEGREES);

  //constrictiong the Aliens
  for( let i=0; i <numAliens; i++){
    let alien = new Alien();
    aliens.push(alien);
  }
};


function draw() {
  background(bg.r,bg.g,bg.b);

  // making the moon surface slowly disapear from the screen
  moon.y = moon.y + moon.movement;

  //displaying moon
  image(moon.image,moon.x,moon.y,moon.width,moon.height);

  //make the astronaut tremble from the troubling signals radiates by aliens
  astronautTrembling()

  //if the user doesn't kill the aliens, the astronaut explodes
  astronautExplosion();


  for (var i = 0; i < bulletsFired.length; i++){
    let bullet=bulletsFired[i]
    //displaying bulletsFired
    bullet.display();
    bullet.update();
  };


  for( let i=0; i<aliens.length; i++){
    let alien=aliens[i];
      //displaying Aliens
      alien.display();
      for (let j = 0; j < bulletsFired.length; j++) {
        let bullet=bulletsFired[j]
        //check if the attack was succesful
        alien.mouseOverCircle(bullet);
     }


  };
};


function astronautExplosion(){
  if (astronaut.tremble>=20){
    text('oh no',width/2,height/2);
    astronaut.state=false;
  };
};


function mousePressed(){
	let mouseVector = getMouseVector();
	let oneBullet = new bullet(mouseVector.x, mouseVector.y);
	bulletsFired.push(oneBullet);
};


function getMouseVector(){
	let mouseXalt = mouseX - turPosX;
	let mouseYalt = mouseY - turPosY;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
};

function astronautTrembling(){
  push();
  if(onOff==true){
    translate(random(-astronaut.tremble,astronaut.tremble),random(-astronaut.tremble,astronaut.tremble));
  }
    astronaut.tremble=astronaut.tremble+0.01
  if ( astronaut.state==true){
    astronaut.x=width/2
    astronaut.y=height/2
    image(astronaut.image,astronaut.x,astronaut.y,astronaut.width,astronaut.height);
  }
  if(onOff==true){
    onOff=false;
  }
  else{onOff=true;
  };
  pop();
}
