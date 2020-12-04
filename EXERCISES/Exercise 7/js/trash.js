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
    //set a random position for trashes
    let change=random(0,20)
    if (change<0.5){
      //set a random speed
      this.vx=random(-this.speed,this.speed);
      this.vy=random(-this.speed,this.speed);
    };
    this.x=this.x+this.vx;
    this.y=this.y+this.vy;

    //constraing the trashes' position
    this.x=constrain(this.x,0,width);
    this.y=constrain(this.y,0,height);
     }


   display(){
    push();
    fill(235, 180, 52);
    //displaying the tarshes
    ellipse(this.x,this.y,this.size);
    pop();
     }


    tarshUserEncounter(){
      //measure the distance between the trash and the astronaut
      let d =dist(this.x,this.y,astronaut.x,astronaut.y.normal)
      //if the distance is less that this then the user has collected the trash
      if(d<80){
        this.size=0;
        stage2Condition =stage2Condition-1
      }
   }
}
