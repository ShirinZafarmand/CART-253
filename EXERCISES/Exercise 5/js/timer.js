class Timer{

  //building timer structure
  constructor(){
    this.x=0;
    this.y=0;
    this.width=windowWidth;
    this.height=windowHeight;
    this.diminish=-0.2;
  };

  //displaying thr timer that covers the whole screen
  display(){
    push();
    rectMode(CORNER);
    fill(10);
    rect(this.x,this.y,this.width,this.height);
    pop();
  };

  //the speed of the timer
  shrink(){
    this.height=this.height+this.diminish;
  };

  //when time is over then change the state
  timeOver(){
    if(this.height<=0 &&
      score.height>=500){
        state='win';
      };
    };
  }
