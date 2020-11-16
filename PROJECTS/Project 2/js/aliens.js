class Aliens{

  constructor(){
    //borders that aliens revolve on
    this.border1.x=1100,
    this.border1.y=550,
    this.border1.size=600,
    this.border2.size=870,
    this.border3.size=1030,

    //Aliens
    this.alien1.x=400,
    this.alien1.y=50,
    this.alien1.size=70,
    this.alien1.fill={
      r:255,
      g:66,
      b:88},
    this.alien1.angle=0,

    this.alien2.x=500,
    this.alien2.y=50,
    this.alien2.size=30,
    this.alien2.fill={
      r:255,
      g:66,
      b:88},
    this.alien2.angle=0,

    this.alien3.x=250,
    this.alien3.y=50,
    this.alien3.size=70,
    this.alien3.fill={
      r:255,
      g:66,
      b:88},
    this.alien3.angle=0,
  }
}
  displayAlien1(){
    push();
    translate(1100,550);
    rotate(this.alien1.angle);
    fill(this.alien1.fill.r,this.alien1.fill.g,this.alien1.fill.b);
    rect(this.alien1.x,this.alien1.y,this.alien1.size,this.alien1.size);
    this.alien1.angle=this.alien1.angle+0.05;
    pop();
  };

  displayAlien2(){
    push();
    translate(1100,550);
    rotate(this.alien2.angle);
    rect(this.alien2.x,this.alien2.y,this.alien2.size,this.alien2.size);
    this.alien2.angle=this.alien2.angle+0.01;
    pop();
  };

  displayAlien3(){
    push();
    translate(1100,550);
    rotate(this.alien3.angle);
    rect(this.alien3.x,this.alien3.y,this.alien3.size);
    this.alien3.angle=this.alien3.angle+0.01;
    pop();
  };
}
