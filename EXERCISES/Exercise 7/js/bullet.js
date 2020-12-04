class bullet{
  
  constructor(xSpd, ySpd){
    this.x = turPosX;
    this.y = turPosY;
    this.size= 20
    this.xSpd = 12*xSpd;
    this.ySpd = 12*ySpd;
  };

  display(){
    push()
    stroke(230, 255, 0);
    fill(255);
    //displaying circles as bullets
    ellipse(this.x, this.y, this.size);
    pop();
  };

  update(){
    this.x += this.xSpd;
    this.y += this.ySpd;
    //slowing the bullets speed as it get fra from the center of screen
    this.xSpd *= 0.994;
    this.ySpd *= 0.994;
  };
}
