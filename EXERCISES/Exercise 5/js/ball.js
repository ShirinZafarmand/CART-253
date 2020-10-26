class Ball{

  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.maxSpeed=7;
    this.size=60;
    this.active=true;
  }

  gravity(force){
    this.ay=this.ay+force;
  }

  move(){
    this.vx=this.vx+this.ax;
    this.vy=this.vy+this.ay;

    this.vx=constrain(this.vx,-this.maxSpeed,this.maxSpeed);
    this.vy=constrain(this.vy,-this.maxSpeed,this.maxSpeed);

    this.x= this.x+this.vx;
    this.y= this.y+this.vy;


    if (this.y - this.size/2 >height){
      this.active=false;
    }
  }

framing(){
  if(this.x>=width){
    this.vx = -this.vx;
    this.ax = 0;
  }
}
  bounce(paddle){
    if(this.x>paddle.x-paddle.width/2 &&
       this.x<paddle.x+paddle.width/2 &&
       this.y+this.size/2>paddle.y-paddle.height/2 &&
       this.y-this.size/2<paddle.y+paddle.height/2){

      this.vy = -this.vy;
      this.ay = 0;

      let dx= this.x-paddle.x;
      this.vx=this.vx+ map(dx,-paddle.width/2,paddle.width/2,-5,5)
    }
  }

checkIfGoal(){
  let d =dist (this.x,this.y,gate.x,gate.y)
  if( d < this.size/2+gate.width/2){
    this.size=0

  }
}

  display(){
    push();
    fill(200,10,10);
    stroke(0);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
