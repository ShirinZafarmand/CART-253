class Box{

  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.maxSpeed=35;
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

  display(){
    push();
    fill(20,100,100);
    stroke(0);
    rect(this.x,this.y,this.size);
    pop();
  }

  checkIfTouched(){
    let d =dist (this.x,this.y,gate.x,gate.y)
    if( d < this.size/2+gate.width/2){
      state='lose';
    }
  }

}
