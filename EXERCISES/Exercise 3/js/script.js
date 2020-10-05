/**************************************************
Exercise 3- looking For Love
Shirin Zafarmand

**************************************************/


//Setting variables
let loveSeeker={
  x:1100,
  y:550,
  size:50,
  fill:{ r:127, g:127, b:127},
  };

let arrow={
  x:0,
  y:0,
  width:10,
  height:80,
  angle:0,
  rotation:0,
  fill:255,
  expansion:0,
  reduction:0}

let lover1={
  x:400,
  y:50,
  size:70,
  fill:{r:255, g:66, b:88},
  angle:0};

let lover2={
  x:500,
  y:50,
  size:30,
  fill:{r:255, g:66, b:88},
  angle:0};

let lover3={
  x:250,
  y:50,
  size:70,
  fill:{r:255, g:66, b:88},
  angle:0};

let bg={
  r:0,
  g:0,
  b:0};

let acceptableDifference=10
let state ='title'


function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(32)
  textAlign(CENTER,CENTER)
}



function draw() {
  background(bg.r,bg.g,bg.b)

//screen title
if(state==='title'){
  fill(255)
  text('love is shooting a shot in the dark',width/2,height/2)}
else if(state==='start!'){

  // a blue sad circle love seeker in the middle of screen looking for love
loveSeekerDisplay()

  //arrow
arrowDisplay()

  //aiming a lover
aimingArrow()


  //shooting the arrow
shootingArrow()


  //if the seeker gets lucky the Cupid arrow meets the love of his/her life
arrowLoverEncounter()  


  //orbits
orbits()


  //lover 1 display
    push()
displayLover1()


  //lover 2 display
displayLover2()


  //lover 3 display
displayLover3()
    pop()}
}


function loveSeekerDisplay(){
  fill(loveSeeker.fill.r,loveSeeker.fill.g,loveSeeker.fill.b)
  noStroke()
  ellipse(loveSeeker.x,loveSeeker.y,loveSeeker.size)}

function displayLover1(){
  translate(1100,550)
  rotate(lover1.angle)
  fill(lover1.fill.r,lover1.fill.g,lover1.fill.b)
  rect(lover1.x,lover1.y,lover1.size,lover1.size)
  lover1.angle=lover1.angle+0.05}

function displayLover2(){
  rotate(lover2.angle)
  rect(lover2.x,lover2.y,lover2.size,lover2.size)
  lover2.angle=lover2.angle+0.01}

function displayLover3(){
  rotate(lover3.angle)
  rect(lover3.x,lover3.y,lover3.size)
  lover3.angle=lover3.angle+0.01}

function aimingArrow(){
  if (keyIsDown(37)){
    arrow.rotation=0.1
    arrow.angle=arrow.angle+arrow.rotation}
  else if(keyIsDown(39)){
    arrow.rotation=-0.1
    arrow.angle=arrow.angle+arrow.rotation}}

function arrowDisplay(){
  push()
  translate(1100,550)
  rotate(arrow.angle)
  fill(255)
  rect(arrow.x,arrow.y,arrow.width,arrow.height)
  pop()}

function shootingArrow(){
  arrow.height=arrow.height+arrow.expansion
  if(arrow.height>510){
    noLoop()}}

function orbits(){
  noFill()
  stroke(255)
  ellipse(1100,550,600)
  ellipse(1100,550,870)
  ellipse(1100,550,1030)}

function arrowLoverEncounter(){
  let d1= dist(lover1.x,lover1.y,arrow.x,arrow.y)
  if(d1< lover1.size/2 +arrow.height && arrow.angle<lover1.angle+acceptableDifference){
    bg.r=200}
  let d2= dist(lover2.x,lover2.y,arrow.x,arrow.y)
  if(d2< lover2.size/2 +arrow.height && arrow.angle<lover2.angle+acceptableDifference){
    bg.r=200}
  let d3= dist(lover3.x,lover3.y,arrow.x,arrow.y)
  if(d3< lover3.size/2 +arrow.height && arrow.angle<lover3.angle+acceptableDifference){
    bg.r=200}}


//click to start the game
function mousePressed(){
  if(state==='title'){
      state='start!'}}



//shoot the arrow
  function keyPressed(){
    if (keyCode===38){
    arrow.expansion=100}}
