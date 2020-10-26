class Gate{

  constrctor(){
    this.x=0;
    this.y=height/2;
    this.width=50;
    this.height=400;
  }

  display(){
    push()
    fill(255)
    rect(this.x,this.y,this.width,this.height)
    pop()
  }
}
