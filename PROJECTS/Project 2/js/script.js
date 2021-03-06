"use strict";

/**************************************************
Project 2 - To Infinity and Beyond
Shirin Zafarmand

This is a game about and astronaut that is lost in the space. This game has 4 stages in which the user must follow the instructions to win.
Gradually the game gets tougher too. In the beginning of the each stage there is a instruction.
**************************************************/
let trashes=[];
let numTrashes=50;

let osc;
let playing;
let freq;
let amp;

let bulletsFired = [];
let targetBalloons = [];
let bulletsNum=9

let turPosX = 1600;
let turPosY = 800;
var onOff;

let aliens=[];
let numAliens= 10;
let x1=250;
let x2=260;

let mic;
let r;

// Angle and angular velocity, accleration
let theta;
let theta_vel;
let theta_acc;

let stage4Condition=7
let stage2Condition=20


let bg={
  r:24,
  g:18,
  b:110,
};

let astronaut={
  x:1200,
  y:{
    max:650,
    min:450,
    normal:550
  },
  width:500,
  height:300,
  vx:0,
  vy:0,
  ax:0,
  ay:0,
  speed:1,
  fill:{ r:0, g:0, b:0},
  image:undefined,
  state:true,
  shrink:0.05,
  tremble:0,
};


let moon={
  x:1500,
  y:1300,
  width:3100,
  height:1500,
  image:undefined,
  movement:1,
};

let timer={
  x:0,
  y:0,
  width:30,
  height:2500,
  fill:255,
  shrink:1.15,
  state:false,
};

let spaceship={
  width:0,
  height:0,
  image:undefined,
  expansion:0.25,
  shrink:0.5,
  shift:500,
};

let weapon1={
  fill:{
    r:24,
    g:18,
    b:110,
  },
  x:200,
  y:750,
  size:100,
};

let blackHole={
  x:0,
  y:0,
  width:10,
  height:10,
  image:undefined,
  angle:0,
  varticalExpansion:1,
  horizontalExpansion:1,
  angle:0,
};

let instruction1={
  x:0,
  y:0,
  width:1000,
  height:400,
  image:undefined,
};

let instruction2={
  x:0,
  y:0,
  width:900,
  height:400,
  image:undefined,
};

let instruction3={
  x:0,
  y:0,
  width:1000,
  height:400,
  image:undefined,
};

let instruction4={
  x:0,
  y:0,
  width:900,
  height:400,
  image:undefined,
};

let state ='title1';
let stageOne=true;
let stageTwo=true;
//------------------------------------------PreLoad---------------------------------------//

function preload(){
  astronaut.image=loadImage("assets/images/astronaut.png");
  moon.image=loadImage("assets/images/moon2.png");
  spaceship.image=loadImage("assets/images/spaceship.png");
  blackHole.image=loadImage("assets/images/blackhole.png");
  instruction1.image=loadImage("assets/images/Instruction1.png");
  instruction2.image=loadImage("assets/images/Instruction2.png");
  instruction3.image=loadImage("assets/images/Instruction3.png");
  instruction4.image=loadImage("assets/images/Instruction4.png");
};

//------------------------------------------SetUp---------------------------------------//
function setup() {
  let cnv=createCanvas(windowWidth,windowHeight);
  userStartAudio();
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');

  textSize(32);
  textAlign(CENTER,CENTER);
  angleMode(DEGREES);
  noStroke();

  //constructing tarshes
  for (let i = 0; i<numTrashes; i++){
    let x=random(0,width);
    let y= random(0,height);
    let trash = new Trash(x,y);
    trashes.push(trash);
  };

  //constructiong Aliens
  for( let i=0; i <numAliens; i++){
    let x=random(x1,x2);
    x1=x1+100;
    x2=x2+100;
    let rotationSpeed=random(0.01,0.03);
    let alien = new Alien(x,rotationSpeed);
    aliens.push(alien);
  }

  //microphone starts functioning
  mic= new p5.AudioIn();
  mic.start();

  // Initializing all values for the absorption towards the blackhole
  r = height * 0.45;
  theta = 0;
  theta_vel = 0;
  theta_acc = 0.0001/2;
}


//------------------------------------------Draw---------------------------------------//
function draw() {


  //--------------------------------------------------------stage one-------------------------------------------------------------//
  //stage one instructions to follow
  if(state==='title1'){
    background(bg.r,bg.g,bg.b);
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    image(instruction1.image,instruction1.x,instruction1.y,instruction1.width,instruction1.height);
    pop();
  }

  // stage 1 starts
  else if(state==='stageOne' && stageOne===true){
    background(bg.r,bg.g,bg.b);

    //displaying the timer that gets shorter gradually; indicating the time left for collecting 15 trashes
    timer.state=true;
    displayTimer();

    //dsiplaying the surface of moon
    image(moon.image,moon.x,moon.y,moon.width,moon.height);

    //displaying astronaut
    astronautMovement();

    //displaying space trashes
    for( let i=0; i < trashes.length; i++){
      let trash = trashes[i];
      if (trash.active){
        //trashes' random movements
        trash.move();
        //displaying trashes
        trash.display();
        //when the astronaut collects the trash, it disapears
        trash.tarshUserEncounter();
      };
    };

    //if the astronaut collect 15 trashes then stage 2 instructions apear
    if(stage2Condition<1){
      state='title2';
    }

    //if the astronaut doesn't collect trashes in the given time, the game is over
    else if(timer.height<=0){
      state='gameOver';
    }
  }

  //--------------------------------------------------------stage two-------------------------------------------------------------//
  //second stage instructions
  else if(state==='title2'){
    background(bg.r,bg.g,bg.b);
    stageOne=false;
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    image(instruction2.image,instruction2.x,instruction2.y,instruction2.width,instruction2.height);
    pop();
  }

  //stage 2 starts
  else if(state==='secondStage'){
    background(bg.r,bg.g,bg.b);

    //dsiplaying the surface of moon
    image(moon.image,moon.x,moon.y,moon.width,moon.height);

    //displaying the timer that gets shorter gradually; indicating the time left for finding the weapon
    timer.state=true;
    timer.shrink=1;
    displayTimer();

    //displaying astronaut
    astronautMovement();

    //making spaceships' size bigger slowly
    spaceship.width=spaceship.width+spaceship.expansion+0.25;
    spaceship.height=spaceship.height+spaceship.expansion;

    //constraining the size of the spaceships
    spaceship.width=constrain(spaceship.width,0,300);
    spaceship.height=constrain(spaceship.height,0,200);

    //displaying spaceships images
    spaceships(200,200);
    spaceships(200,450);
    spaceships(200,700);
    spaceships(200,950);

    //displaying the weapon that is hidden under a spaceship
    if (spaceship.width>= 450){
      push();
      noStroke();
      fill(weapon1.fill.r,weapon1.fill.g,weapon1.fill.b);
      ellipse(weapon1.x,weapon1.y,weapon1.size);
      pop();
    };

    //when the astronaut gets closer to the weapon, the sound gets lower
    let d=dist(astronaut.x,astronaut.y.normal,weapon1.x,weapon1.y);

    //maping the distance into the frequency
    freq = constrain(map(d, 0, 1000, 100, 500), 100, 500);
    amp = constrain(map(d, 0, 1000, 0, 1), 0, 1);

    //apply the sound effects when the audio is playing
    if (playing) {
      osc.freq(freq, 0.1);
      osc.amp(amp, 0.1);
    }

    //if the astronaut find the weapon then the stage 3 instructions apear
    if (d<=50){
      state='title3';
      spaceship.x = spaceship.x - 3;
      weapon1.size=0;
    };

    //if the astronaut doesn't find the weapon in the given time, the game is over
    if(timer.height<=1){
      state='gameOver';
    }
  }

  //--------------------------------------------------------stage three-------------------------------------------------------------//
  else if(state==='title3'){
    background(bg.r,bg.g,bg.b);
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    image(instruction3.image,instruction3.x,instruction3.y,instruction3.width,instruction3.height);
    pop();
    playing = false;
  }

  //stage 2 starts
  else if(state==='thirdStage'){
    background(bg.r,bg.g,bg.b);

    // making the moon surface slowly disapear from the screen
    moon.y = moon.y + moon.movement;

    //displaying the surface of moon
    image(moon.image,moon.x,moon.y,moon.width,moon.height);

    //make the astronaut tremble from the troubling signals radiated by aliens
    astronautTrembling();

    //if the user doesn't kill the aliens, the astronaut explodes and the game is over
    astronautExplosion();

    //displaying bullets fired from the weapon
    for (var i = 0; i < bulletsFired.length; i++){
      let bullet=bulletsFired[i];
      //displaying bulletsFired
      bullet.display();
      //bullets moving slightly slower when fired
      bullet.update();
      //check if the user has used all of the bullets
      bullet.bulletQuantity();
    };

    //displaying aliens that rotate around the astronaut
    for( let i=0; i<aliens.length; i++){
      let alien=aliens[i];
      //displaying Aliens
      alien.display();
      for (let j = 0; j < bulletsFired.length; j++) {
        let bullet=bulletsFired[j]
        //check if the attack was succesful and the bullet hit the alien, if so make the alien dispear
        alien.collision(bullet);
      }
    };

    //if the astronaut kills enough aliens then stage 3 instructions apear
    if(stage4Condition<=0){
      state ='title4';
    }
  }

  //--------------------------------------------------------stage four-------------------------------------------------------------//
  else if(state==='title4'){
    background(bg.r,bg.g,bg.b);
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    image(instruction4.image,instruction4.x,instruction4.y,instruction4.width,instruction4.height);
    pop();
  }

  //stage 3 starts
  else if(state==='fourthStage'){
    background(bg.r,bg.g,bg.b);

    //displaying the surface of moon
    image(moon.image,moon.x,moon.y,moon.width,moon.height);

    // making the moons surface slowly disapear from the screen
    moon.y = moon.y + moon.movement;

    //making the screen a little more darker(for spookier effect)
    bg.b = bg.b -1;

    // if the moon is outside of the canvas the black hole apears rotating around itself
    push()
    if (moon.y >= 1500){
      //center of rotation is in the middle of the screen
      translate(width / 2, height / 2);
      angleMode(RADIANS);

      //Rotate the blackhole around this
      rotate(blackHole.angle);
      blackHole.angle=blackHole.angle+0.02;

      //displaying blackholes image
      image(blackHole.image,blackHole.x,blackHole.y,blackHole.width,blackHole.height);

      //the feeling of blackhole getting closer by enlarging the size of it
      blackHole.height=blackHole.height+blackHole.varticalExpansion;
      blackHole.width=blackHole.width+blackHole.horizontalExpansion;

      //constraining the size of the blackhole
      blackHole.width=constrain(blackHole.width,10,1500);
      blackHole.height=constrain(blackHole.height,10,1500);
    };
    pop();

    //mic input
    let level = mic.getLevel();

    //converting the level into the distance between the user and the blackhole
    let movement = map( level,0,1,0,75);
    r = r + movement;

    //blackhole absorbtion
    push();
    // Translating the origin point to the center of the screen
    translate(width / 2, height / 2);

    // Converting polar to cartesian
    let x = r * cos(theta);
    let y = r * sin(theta);

    //decreasing the distance between the astronaut and the blackhole for absorption effect
    r = r - 0.3;

    //shrinking astronauts size to have a diving effect
    astronaut.width=astronaut.width-2*astronaut.shrink;
    astronaut.height=astronaut.height-astronaut.shrink;

    //Draw the astronaut at the cartesian coordinate
    astronaut.x=x;
    astronaut.y=y;
    image(astronaut.image,x,y,astronaut.width,astronaut.height);

    //Applying acceleration and velocity to angle
    theta_vel =theta_vel+ theta_acc /2;
    theta = theta + theta_vel ;

    //if the blackhole sucked the astronaut, then the game is over
    if (r<= 10){
      astronaut.size=0;
      state ='gameOver';
    }

    //if the astronaut is far from the blackhole then survives
    if (r>= 750){
      state ='win';
    }
  }

  //game over text
  else if (state==='gameOver'){
    background(bg.r,bg.g,bg.b);
    text('game over!' ,width/2,height/2);
  }

  //winning text
  else if (state==='win'){
    background(bg.r,bg.g,bg.b);
    fill(255);
    text('I made it! You saved me my friend. wait... are you an alien too?.. cause your genuine help was out of this world ;) ' ,width/2,height/2);
  }
}



//------------------------------------------------------------------------------------------------------------------------------//
function playOscillator() {
  osc.start();
  playing = true;
};


function keyPressed(){
  if(keyCode===49){
    state='stageOne';
  }
  else if(keyCode===50){
    state='secondStage';
  }
  else if(keyCode===51){
    state='thirdStage';
  }
  else if(keyCode===52){
    state='fourthStage';
  };
}


//displaying timer
function displayTimer(){
  if(timer.state==true){
    fill(timer.fill);
    rect(timer.x,timer.y,timer.width,timer.height);
    timer.height=timer.height-timer.shrink;
  }
};

//displaying spaceships image
function spaceships(x,y){
  for(let j=0; j<6 ;j++){
    image(spaceship.image,x,y,spaceship.width,spaceship.height);
    x = x + 500;
  }
};

//displaying the astronaut
function astronautMovement(){
  if (astronaut.state=true){
    //astronaut display
    imageMode(CENTER);
    image(astronaut.image,astronaut.x,astronaut.y.normal,astronaut.width,astronaut.height);

    //astronaut hover mode
    astronaut.y.normal= astronaut.y.normal+ astronaut.speed;

    if (astronaut.hover= true &&
      astronaut.y.normal>=astronaut.y.max){
        astronaut.speed=-astronaut.speed;
      };

      if (astronaut.hover= true &&
        astronaut.y.normal<=astronaut.y.min){
          astronaut.speed=-astronaut.speed;
        };


        //astronauts user control
        if (keyIsDown(39)){
          astronaut.x=astronaut.x+5;
        };

        if (keyIsDown(37)){
          astronaut.x=astronaut.x-5;
        };

        if (keyIsDown(40)){
          astronaut.y.normal=astronaut.y.normal+4
        };

        if (keyIsDown(38)){
          astronaut.y.normal=astronaut.y.normal-4
        };
      };
    }


    //astronaut explosion from the aliens signals
    function astronautExplosion(){
      if (astronaut.tremble>=20){
        text('oh no',width/2,height/2);
        astronaut.state=false;
        state='gameOver'
      };
    };

    //a bullet is fired where the mouse was clicked
    function mousePressed(){
      let mouseVector = getMouseVector();
      let oneBullet = new bullet(mouseVector.x, mouseVector.y);
      bulletsNum=bulletsNum-1;
      bulletsFired.push(oneBullet);
    };


    function getMouseVector(){
      let mouseXalt = mouseX - turPosX;
      let mouseYalt = mouseY - turPosY;
      let mouseDir = createVector(mouseXalt, mouseYalt);
      mouseDir.normalize();
      return mouseDir;
    };

    //astronauts trembling mode
    function astronautTrembling(){
      push();
      if(onOff==true){
        translate(random(-astronaut.tremble,astronaut.tremble),random(-astronaut.tremble,astronaut.tremble));
      }
      astronaut.tremble=astronaut.tremble+0.01;
      if (astronaut.state=true){
        //displaying astronaut
        imageMode(CENTER);
        astronaut.x=width/2;
        astronaut.y=height/2;
        image(astronaut.image,astronaut.x,astronaut.y,astronaut.width,astronaut.height);
      }

      if(onOff==true){
        onOff=false;
      }
      else{onOff=true;
      };
      pop();
    }
