class Timer{

  constructor(){
    this.x=0;
    this.y=0;
    this.width=windowWidth;
    this.height=windowHeight;
    this.diminish=-0.2;
  }

  display(){
    push();
    rectMode(CORNER)
    fill(10)
    rect(this.x,this.y,this.width,this.height)
    pop();
  }

  shrink(){
    this.height=this.height+this.diminish
  }

  timeOver(){
    if(this.height<=0 &&
       score.height>=500){
         state='win'
       }
  }
}
