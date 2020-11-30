class Aliens{

  constructor(){
    //Aliens
    this.alien5={
      x:500,
      y:50,
      size:70,
      r:14,
      g:0,
      b:65,
      angle:0
    };

    this.alien4={
      x:600,
      y:50,
      size:70,
      angle:0
    };

    this.alien3={
      x:850,
      y:50,
      size:70,
      angle:0,
    };

    this.alien2={
      x:680,
      y:50,
      size:70,
      angle:0,
    };

    this.alien1={
      x:730,
      y:50,
      size:70,
      angle:0,
    };

    this.alien6={
      x:900,
      y:50,
      size:70,
      angle:0,
    };

    this.alien7={
      x:1050,
      y:50,
      size:70,
      angle:0,
    };
  }


  displayAlien1(){
    translate(width/2,height/2);
    rotate(this.alien1.angle);
    this.alien5.g= random(0,250)
    fill(this.alien5.r,this.alien5.g,this.alien5.b);
    rect(this.alien1.x,this.alien1.y,this.alien1.size,this.alien1.size);
    this.alien1.angle=this.alien1.angle+0.01/2;
  };

  displayAlien2(){
    if(this.alien1.angle>=1.5){
      rotate(this.alien2.angle);
      rect(this.alien2.x,this.alien2.y,this.alien2.size,this.alien2.size);
      this.alien2.angle=this.alien2.angle+0.01/2;
    }
  };

  displayAlien3(){
    if (this.alien2.angle>=1.5){
      rotate(this.alien3.angle);
      rect(this.alien3.x,this.alien3.y,this.alien3.size);
      this.alien3.angle=this.alien3.angle+0.01/2;
    }
  };

  displayAlien4(){
    if(this.alien3.angle>=1.5){
      rotate(this.alien4.angle);
      rect(this.alien4.x,this.alien4.y,this.alien4.size);
      this.alien4.angle=this.alien4.angle+0.01/2;
    }
  };

  displayAlien5(){
    if(this.alien3.angle>=1.5){
      rotate(this.alien5.angle);
      rect(this.alien5.x,this.alien5.y,this.alien5.size);
      this.alien5.angle=this.alien5.angle+0.01/2;
    }
  };

  displayAlien6(){
    if(this.alien5.angle>=1.5){
      rotate(this.alien5.angle);
      rect(this.alien6.x,this.alien6.y,this.alien6.size);
      this.alien6.angle=this.alien6.angle+0.01/2;
    }
  };

  displayAlien7(){
    if(this.alien6.angle>=1.5){
      rotate(this.alien7.angle);
      rect(this.alien7.x,this.alien7.y,this.alien7.size);
      this.alien7.angle=this.alien7.angle+0.01/2;
    }
  };

  checkAttack(){
    let d = dist(arrow.x,arrow.y,this.alien1.x,this.alien1.y)
    if(d<=50){
      noLoop();
    }
  }
}
