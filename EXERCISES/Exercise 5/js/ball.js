class Ball{

  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.maxSpeed=6;
    this.size=40;
    this.active=true;
  }

  gravity(force){
    this.ay=this.ay+force;
  }

  move(){
    this.vx=this.vx+this.ax;
    this.vy=this.vy+this.ay;

    this.vx=constrain(this.vx,-this.maxSpeed,this.maxSpeed);
    this.vv=constrain(this.vy,-this.maxSpeed,this.maxSpeed);

    this.x= this.x+this.vx;
    this.y= this.y+this.vy;

    if (this.y - this.size/2 >height){
      this.active=false;
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
      this.vx=this.vx+ map(dx,-paddle.width/2,paddle.width/2,-2,2)
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
