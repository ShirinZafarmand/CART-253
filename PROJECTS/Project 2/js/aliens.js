class Alien{

  constructor(x,rotationSpeed){
    //Aliens
    this.x=x;
    this.y=0;
    this.size=70;
    this.r=14;
    this.g=0;
    this.b=65;
    this.angle=0;
    this.rotationSpeed= rotationSpeed;
  };


  display(){
    push();
    angleMode(RADIANS);
    // Center of rotation is the centre of the canvas
    translate(width / 2, height / 2);
    // Rotate the alien around this
    rotate(this.angle);
    // Translate to draw the alien itself at its position relative to the centre
    translate(this.x, this.y);
    fill(this.r,this.g,this.b);
    ellipse(0,0,this.size);
    pop();
    this.angle += this.rotationSpeed;
  };


  collision(bullet) {
    // Calculate distance from the alien to the centre of rotation
    let alienDistanceFromCentre = sqrt(pow(this.x, 2) + pow(this.y, 2));

    // Calculate the actual position of the alien on the canvas
    let alienActualX = width / 2 + alienDistanceFromCentre * cos(this.angle);
    let alienActualY = height / 2 + alienDistanceFromCentre * sin(this.angle);

    // Check if the bullet has attacked the alien
    if (dist(bullet.x, bullet.y, alienActualX, alienActualY) < this.size && this.size!=0) {
      this.size=0;
      stage4Condition=stage4Condition-1;
    }
  }
};
