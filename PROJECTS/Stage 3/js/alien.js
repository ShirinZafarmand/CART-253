class Alien{

  constructor(x){
    //Aliens
      this.x=x;
      this.y=50;
      this.size=70;
      this.r=14;
      this.g=0;
      this.b=65;
      this.angle=1;
      this.active=true;
      this.alienDisplayCondition=0.01/4
  };


  display(){
    push();
    translate(width/2,height/2);
    rotate(this.angle);
    this.g= random(0,250);
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.size,this.size);
    this.angle=this.angle+0.5;
    this.alienDisplayCondition= this.alienDisplayCondition + 1
    pop();
  };


  theSpot(){
    push();
    fill(255,0,0);
    ellipse(this.x,this.y,50)
    pop();
  }
};
