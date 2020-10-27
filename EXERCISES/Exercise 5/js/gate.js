class Gate{

  constructor(){
    this.x=500;
    this.y=900;
    this.width=200;
    this.height=10;
    this.speed=55;
  }

  movement(){
    if (keyIsDown(37)){
      this.x=this.x-10;}

    if(keyIsDown(39)){
      this.x=this.x+10;}
  }

  display(){
    push()
    fill(255)
    rect(this.x,this.y,this.width,this.height)
    pop()
  }
}
