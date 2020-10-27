class Ball{

  //building balls
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.maxSpeed=0;
    this.size=60;
    this.active=true;
  };

  //a more realistic falling using the gravity
  gravity(force){
    this.ay=this.ay+force;
  };

  //balls falling down
  move(){
    this.vx=this.vx+this.ax;
    this.vy=this.vy+this.ay;
    //every ball has a different speed
    this.maxSpeed=random(10,15);

    this.vx=constrain(this.vx,-this.maxSpeed,this.maxSpeed);
    this.vy=constrain(this.vy,-this.maxSpeed,this.maxSpeed);

    this.x= this.x+this.vx;
    this.y= this.y+this.vy;

    if (this.y - this.size/2 >height){
      this.active=false;
    };
  };

  //if the ball has passed the gate, it's goal
  checkIfGoal(){
    let d =dist (this.x,this.y,gate.x,gate.y);
    if( d < this.size/2+gate.width/2){
      this.size=0;
      //if it's a goal then it adds to the score
      score.height=score.height+score.growth;
    };
  };

  //displying balss
  display(){
    push();
    fill(200,10,10);
    stroke(0);
    ellipse(this.x,this.y,this.size);
    pop();
  };
}
