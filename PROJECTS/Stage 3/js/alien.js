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
    // Rotate the circle around this
    rotate(this.angle);
    // Translate to draw the circle itself at its position relative to the centre
    translate(this.x, this.y);
    fill(this.r,this.g,this.b);
    ellipse(0,0,this.size);
    pop();
    this.angle += this.rotationSpeed;
  };


  mouseOverCircle(bullet) {
    // Calculate distance from the circle to the centre of rotation
    let circleDistanceFromCentre = sqrt(pow(this.x, 2) + pow(this.y, 2));

    // Calculate the actual position of the circle on the canvas
    let circleActualX = width / 2 + circleDistanceFromCentre * cos(this.angle);
    let circleActualY = height / 2 + circleDistanceFromCentre * sin(this.angle);

    // Check if the mouse overlaps the circle's actual position
    if (dist(bullet.x, bullet.y, circleActualX, circleActualY) < this.size) {
      bg.r=255
    }
    else {
      bg.r=0
    }

  }
};
