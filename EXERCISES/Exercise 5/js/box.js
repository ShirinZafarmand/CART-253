class Box{

  //bilding the boxs structure
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.maxSpeed=25;
    this.size=60;
    this.active=true;
    this.fill={
      r:20,
      g:100,
      b:100
    };
  };

  //a more realistic falling using the gravity
  gravity(force){
    this.ay=this.ay+force;
  };
  //boxs movement of falling
  move(){
    this.vx=this.vx+this.ax;
    this.vy=this.vy+this.ay;

    this.vx=constrain(this.vx,-this.maxSpeed,this.maxSpeed);
    this.vy=constrain(this.vy,-this.maxSpeed,this.maxSpeed);

    this.x= this.x+this.vx;
    this.y= this.y+this.vy;


    if (this.y - this.size/2 >height){
      this.active=false;
    };
  };

  //displaying the boxs
  display(){
    push();
    fill(this.fill.r,this.fill.g,this.fill.b);
    stroke(0);
    rect(this.x,this.y,this.size);
    pop();
  };

  //check if the gate has mistakely touched the green boxes
  checkIfTouched(){
    let d =dist (this.x,this.y,gate.x,gate.y)
    if( d < this.size/2+gate.width/2){
      state='lose';
    };
  };
}
