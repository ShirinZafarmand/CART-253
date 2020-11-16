class Trash{

  constructor(x,y){
    this.x=x,
    this.y=y,
    this.size=55,
    this.vx=0,
    this.vy=0,
    this.speed=3,
    this.shrink=3,
    this.active=true,
    this.fill={
      r:235,
      g:180,
      b:52}
    };


  move(){
    let change=random(0,20)
    if (change<0.5){
      this.vx=random(-this.speed,this.speed);
      this.vy=random(-this.speed,this.speed);
    };
    this.x=this.x+this.vx;
    this.y=this.y+this.vy;

    this.x=constrain(this.x,0,width);
    this.y=constrain(this.y,0,height);
     }


   display(){
    push();
    fill(235, 180, 52);
    ellipse(this.x,this.y,this.size);
    pop();
     }


    tarshUserEncounter(){
    let d =dist(this.x,this.y,astronaut.x,astronaut.y.normal)
    if(d<80){
      this.size=0;
    }
  }

   removal(){
     if(timer.height <= 0){
       this.size=0;
     };
   }



}
