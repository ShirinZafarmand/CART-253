class Aliens{

  constructor(){
    //Aliens
    this.alien1={
      x:400,
      y:50,
      size:70,
      r:255,
      g:66,
      b:88,
      angle:0
    };

    this.alien2={
      x:500,
      y:50,
      size:70,
      r:255,
      g:66,
      b:88,
      angle:0
    };

    this.alien3={
      x:250,
      y:50,
      size:70,
      r:255,
      g:66,
      b:88,
      angle:0,
    };
}

  displayAlien1(){
    translate(1100,550);
    rotate(this.alien1.angle);
    fill(this.alien1.r,this.alien1.g,this.alien1.b);
    rect(this.alien1.x,this.alien1.y,this.alien1.size,this.alien1.size);
    this.alien1.angle=this.alien1.angle+0.05;
  };

  displayAlien2(){
    rotate(this.alien2.angle);
    rect(this.alien2.x,this.alien2.y,this.alien2.size,this.alien2.size);
    this.alien2.angle=this.alien2.angle+0.01;
  };

  displayAlien3(){
    rotate(this.alien3.angle);
    rect(this.alien3.x,this.alien3.y,this.alien3.size);
    this.alien3.angle=this.alien3.angle+0.01;
  };
}
