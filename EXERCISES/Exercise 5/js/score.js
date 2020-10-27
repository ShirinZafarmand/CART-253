class Score{

  //building the scoring structure
  constructor(){
    this.x=0;
    this.y=0;
    this.width=50;
    this.height=10;
    this.growth=4;
  };

  //displaying scale
  scaleDisplay(){
    push();
    rectMode(CORNER);
    fill(200,0,0);
    rect(this.x,this.y,this.width,this.height);
    pop();
  };
}
