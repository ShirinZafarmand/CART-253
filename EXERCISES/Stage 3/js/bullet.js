class bullet{
  constructor(xSpd, ySpd){
    this.x = turPosX;
    this.y = turPosY;
    this.size= 50
    this.xSpd = 12*xSpd;
    this.ySpd = 12*ySpd;
  };

  display(){
    push()
    stroke(230, 255, 0);
    fill(255);
    ellipse(this.x, this.y, this.size);
    pop();
  };

  update(){
    this.x += this.xSpd;
    this.y += this.ySpd;
    this.xSpd *= 0.994;
    this.ySpd *= 0.994;
  };


  checkAttack(alien){
    let d= dist(this.x,this.y,alien.x,alien.y)
    if (d<=this.size/2+alien.size/2){
      noLoop();
    };
  };
}
