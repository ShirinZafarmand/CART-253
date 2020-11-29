class Aliens{

  constructor(){
    //Aliens
    this.alien5={
      x:500,
      y:50,
      size:70,
      r:14,
      g:204,
      b:65,
      angle:0
    };

    this.alien4={
      x:600,
      y:50,
      size:70,
      r:14,
      g:204,
      b:65,
      angle:0
    };

    this.alien3={
      x:850,
      y:50,
      size:70,
      r:14,
      g:204,
      b:65,
      angle:0,
    };

    this.alien2={
      x:680,
      y:50,
      size:70,
      r:14,
      g:204,
      b:65,
      angle:0,
    };

    this.alien1={
      x:730,
      y:50,
      size:70,
      r:14,
      g:204,
      b:65,
      angle:0,
    };
  }


  displayAlien1(){
    translate(width/2,height/2);
    rotate(this.alien1.angle);
    fill(this.alien1.r,this.alien1.g,this.alien1.b);
    rect(this.alien1.x,this.alien1.y,this.alien1.size,this.alien1.size);
    this.alien1.angle=this.alien1.angle+0.01/3;
  };

  displayAlien2(){
    if(this.alien1.angle>=3){
      rotate(this.alien2.angle);
      rect(this.alien2.x,this.alien2.y,this.alien2.size,this.alien2.size);
      this.alien2.angle=this.alien2.angle+0.01/3;
    }
  };

  displayAlien3(){
    rotate(this.alien3.angle);
    rect(this.alien3.x,this.alien3.y,this.alien3.size);
    this.alien3.angle=this.alien3.angle+0.01/3;
  };

  displayAlien4(){
    rotate(this.alien4.angle);
    rect(this.alien4.x,this.alien4.y,this.alien4.size);
    this.alien4.angle=this.alien4.angle+0.01/3;
  };

  displayAlien5(){
    rotate(this.alien5.angle);
    rect(this.alien5.x,this.alien5.y,this.alien5.size);
    this.alien5.angle=this.alien5.angle+0.01/3;
  };
}
