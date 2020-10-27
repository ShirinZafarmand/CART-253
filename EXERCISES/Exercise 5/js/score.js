class Score{

  //building the scoring structure
  constructor(){
    this.x=0;
    this.y=0;
    this.width=50;
    this.height=10;
    this.growth=4;
    this.fill={
      r:200,
      g:0,
      b:0
    };
  };

  //displaying scale
  scaleDisplay(){
    push();
    rectMode(CORNER);
    fill(this.fill.r,this.fill.g,this.fill.b);
    rect(this.x,this.y,this.width,this.height);
    pop();
  };
}
