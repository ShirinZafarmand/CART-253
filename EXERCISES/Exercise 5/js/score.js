class Score{
  constructor(){
    this.x=0;
    this.y=0;
    this.width=50;
    this.height=10;
    this.growth=4;
  }

  scaleDisplay(){
    push()
    rectMode(CORNER)
    fill(200,0,0)
    rect(this.x,this.y,this.width,this.height)
    pop()
  }
}
