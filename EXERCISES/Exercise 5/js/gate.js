class Gate{

  constrctor(){
    this.x=500;
    this.y=height/2;
    this.width=400;
    this.height=50;
  }

  display(){
    push()
    fill(255)
    rect(this.x,this.y,this.width,this.height)
    pop()
  }
}
