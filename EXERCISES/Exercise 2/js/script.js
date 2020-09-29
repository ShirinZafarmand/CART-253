/**************************************************
Exercise 2-Dodging covid 19
Shirin Zafarmand

A game in which the victim must avoid interaction between the virus which follows, and floating covid19s on the screen that get bigger by time
unless the user sanatizes them by clicking on the keyboard.
**************************************************/


//Setting variables
let covidEmoji={
  x:0,
  y:250,
  size:200,
  vx:0,
  vy:0,
  ax:0,
  ay:0,
  speed:0.4,
  fill:{ r:255, g:0, b:0},
  image:undefined};

let victim={
  x:0,
  y:0,
  size:70,
  fill:{r:255, g:255, b:255 }};

let bg={
  r:255,
  g:255,
  b:255};

let floatingCovid={
  x:400,
  y:550,
  size:7 ,
  expansion:0.9,
  fill:{r:0, g:255, b:0}};

let floatingCovid2={
  x:1800,
  y:550,
  size:7 ,
  expansion:0.9,
  fill:{r:0, g:255, b:0}};

let floatingCovid3={
  x:1100,
  y:550,
  size:7 ,
  expansion:0.9,
  fill:{r:0, g:255, b:0}};




function preload(){
  covidEmoji.image=loadImage("assets/images/covid3.png")}




function setup() {
  createCanvas(windowWidth,windowHeight);

  covidEmoji.vx=covidEmoji.speed;}




function draw() {

  background(bg.r,bg.g,bg.b)


  //covid emoji chase path
  covidEmoji.x=covidEmoji.x+covidEmoji.vx;
  covidEmoji.y=covidEmoji.y+covidEmoji.vy;

  covidEmoji.vy=covidEmoji.vy+covidEmoji.ay
  covidEmoji.vx=covidEmoji.vx+covidEmoji.ax

  if(mouseX < covidEmoji.x){
    covidEmoji.ax=-covidEmoji.speed}

  else{covidEmoji.ax=covidEmoji.speed}

  if(mouseY < covidEmoji.y){
    covidEmoji.ay=-covidEmoji.speed}

  else{covidEmoji.ay=covidEmoji.speed}



  //covid emoji display
  fill(covidEmoji.fill.r,covidEmoji.fill.g,covidEmoji.fill.b);


  if(covidEmoji.x>width){
    covidEmoji.x=0
    covidEmoji.y=random(0,height);}

  imageMode(CENTER)
  image(covidEmoji.image,covidEmoji.x,covidEmoji.y,covidEmoji.size,covidEmoji.size)


  //floating covids
  //ones on the left side of screen
     floatingCovid.x=random(0,windowWidth/4)
     floatingCovid.y=random(windowHeight/4,3*windowHeight/4)
     fill(floatingCovid.fill.r,floatingCovid.fill.g,floatingCovid.fill.b)

     ellipse(floatingCovid.x,floatingCovid.y,floatingCovid.size)

      floatingCovid.size=floatingCovid.size + floatingCovid.expansion

  //ones on the right side of screen
     floatingCovid2.x=random(3*windowWidth/4,windowWidth)
     floatingCovid2.y=random(windowHeight/4,3*windowHeight/4)
     fill(floatingCovid2.fill.r,floatingCovid2.fill.g,floatingCovid2.fill.b)

     ellipse(floatingCovid2.x,floatingCovid2.y,floatingCovid2.size)

     floatingCovid2.size=floatingCovid2.size + floatingCovid2.expansion

  //one in the middle
     fill(floatingCovid3.fill.r,floatingCovid3.fill.g,floatingCovid3.fill.b)

     ellipse(floatingCovid3.x,floatingCovid3.y,floatingCovid3.size)

     floatingCovid3.size=floatingCovid3.size + floatingCovid3.expansion



  //victim(users mouse)
  victim.x=mouseX;
  victim.y=mouseY;

  fill(victim.fill.r,victim.fill.g,victim.fill.b);
  ellipse(victim.x,victim.y,victim.size);



  //interaction between the floatingCovids and victim(users mouse)
  let d2 =dist(floatingCovid.x,floatingCovid.y,victim.x,victim.y)
  let d3 =dist(floatingCovid2.x,floatingCovid2.y,victim.x,victim.y)
  let d4 =dist(floatingCovid3.x,floatingCovid3.y,victim.x,victim.y)
  if(d2<floatingCovid.size/2 + victim.size/2 || d3<floatingCovid2.size/2 + victim.size/2 || d4<floatingCovid3.size/2 + victim.size/2){
 bg.r=255
 bg.b=0
 bg.g=0}

 else(bg.r=0,bg.b=0,bg.g=0)



  //interaction between covid emoji and victim
  let d =dist(covidEmoji.x,covidEmoji.y,victim.x,victim.y)

  if(d<covidEmoji.size/2.5 + victim.size/2){
  noLoop()}
}



//sanatizing the floating covids
function keyPressed(){
 floatingCovid.expansion= -floatingCovid.expansion
 floatingCovid2.expansion= -floatingCovid2.expansion
 floatingCovid3.expansion= -floatingCovid3.expansion
}
