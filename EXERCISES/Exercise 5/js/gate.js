class Gate{

  //building the gates structure
  constructor(){
    this.x=500;
    this.y=900;
    this.width=200;
    this.height=10;
    this.speed=55;
  };

  //the user control over the gate
  movement(){
    if (keyIsDown(37)){
      this.x=this.x-10;}

      if(keyIsDown(39)){
        this.x=this.x+10;}
      };

      //displaying the gate
      display(){
        push();
        fill(255);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
      };
    }
