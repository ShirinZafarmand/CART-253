/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

//Setting variables
let covid={
  x:0,  y:250,  size:100,  vx:0,  vy:0, ax:0, ay:0, speed:0.2,  fill:{ r:255, g:0, b:0}};

let victim={
  x:0, y:0, size:70, fill:{r:0, g:255, b:0 }};

let bg={
  r:0, g:0, b:0}

let floatingCovid={
  x:400, y:550, size:7 , expansion:0.5, strech:0, fill:{r:255, g:0, b:0}}

let floatingCovid2={
  x:1800, y:550, size:7 , expansion:0.5, strech:0, fill:{r:255, g:0, b:0}}

let floatingCovid3={
  x:1100, y:550, size:7 , expansion:0.5, strech:0, fill:{r:255, g:0, b:0}}




function setup() {
  createCanvas(windowWidth,windowHeight);

  covid.y=random(0,height);
  covid.vx=covid.speed;
  }



function draw() {
  background(bg.r,bg.g,bg.b)


  //covid chase path
  covid.x=covid.x+covid.vx;
  covid.y=covid.y+covid.vy;

  covid.vy=covid.vy+covid.ay
  covid.vx=covid.vx+covid.ax

  if(mouseX < covid.x){
    covid.ax=-covid.speed}

  else{covid.ax=covid.speed}

  if(mouseY < covid.y){
    covid.ay=-covid.speed}

  else{covid.ay=covid.speed}



  //covid display
  fill(covid.fill.r,covid.fill.g,covid.fill.b);
  ellipse(covid.x,covid.y,covid.size);

  if(covid.x>width){
    covid.x=0
    covid.y=random(0,height);}



  //floating covids
  //one on the left side of screen
    fill(floatingCovid.fill.r,floatingCovid.fill.g,floatingCovid.fill.b)

    ellipse(floatingCovid.x,floatingCovid.y,floatingCovid.size)

    floatingCovid.size=floatingCovid.size + floatingCovid.expansion

  //one on the right side of screen
    fill(floatingCovid2.fill.r,floatingCovid2.fill.g,floatingCovid2.fill.b)

    ellipse(floatingCovid2.x,floatingCovid2.y,floatingCovid2.size)

    floatingCovid2.size=floatingCovid2.size + floatingCovid2.expansion

  //one in the middle
    fill(floatingCovid3.fill.r,floatingCovid3.fill.g,floatingCovid3.fill.b)

    ellipse(floatingCovid3.x,floatingCovid3.y,floatingCovid3.size)

    floatingCovid3.size=floatingCovid3.size + floatingCovid3.expansion



  //victim
  victim.x=mouseX;
  victim.y=mouseY;

  fill(victim.fill.r,victim.fill.g,victim.fill.b);
  ellipse(victim.x,victim.y,victim.size);



  //interaction between the floatingCovids and victim
  let d2 =dist(floatingCovid.x,floatingCovid.y,victim.x,victim.y)
  let d3 =dist(floatingCovid2.x,floatingCovid2.y,victim.x,victim.y)
  let d4 =dist(floatingCovid3.x,floatingCovid3.y,victim.x,victim.y)
  if(d2<floatingCovid.size/2 + victim.size/2 || d3<floatingCovid2.size/2 + victim.size/2 || d4<floatingCovid3.size/2 + victim.size/2){
    noLoop()}



  //interaction between covid and victim
  let d =dist(covid.x,covid.y,victim.x,victim.y)

  if(d<covid.size/2 + victim.size/2){
  noLoop()}
}



//sanatizing the floating covids
function keyPressed(){
 floatingCovid.expansion= -floatingCovid.expansion
 floatingCovid2.expansion= -floatingCovid2.expansion
 floatingCovid3.expansion= -floatingCovid3.expansion
}
