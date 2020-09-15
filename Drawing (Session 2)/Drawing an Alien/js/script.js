/**************************************************
Activity Number 2: Drawing an Alien
Shirin Zafarmand

Drawing an Alien on The Canvas.
**************************************************/

// setup()
//
// Drew an Alien:
function setup() {

//Expanded Canvas
createCanvas(640,480);

//set the background color to Orange
background(255, 205, 140);
noStroke();

//Drew body for my alein
fill(77, 164, 196)
ellipse(320,480,180,200);
rect(300,200,40,200)

//Drew head for my alien
fill(82, 181, 217);
ellipse(300,265,80,80);
ellipse(340,265,80,80);//unconsciously drew a cute nose :)
rect(300,265,40,40)
ellipse(260,200,125,120);
ellipse(380,200,125,120)

//Drew layers of Bright Green eyes
fill(255, 255, 255);
ellipse(260,200,80,80);
ellipse(380,200,80,80);
fill(111, 194, 105);
ellipse(260,200,70,70);
ellipse(380,200,70,70);
fill(53, 138, 47)
ellipse(260,200,35,35);
ellipse(380,200,35,35);
fill(24, 59, 21);
ellipse(260,200,15,15);
ellipse(380,200,15,15);

//Drew a Smile for my alien
stroke(107, 18, 18)
strokeWeight(2)
fill(255, 255, 255)
arc(320,250,35,28,0,3.14159)
}

// draw()
//
// Does Nothing.
function draw() {

}
