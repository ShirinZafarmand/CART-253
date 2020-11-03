class Trash{

  constructor(x,y){
    this.x=x,
    this.y=y,
    this.size=55,
    this.vx=0,
    this.vy=0,
    this.speed=3,
    this.shrink=3,
    this.fill={
      r:235,
      g:180,
      b:52}
    };


  move(){
    //astronaut hover mode
    astronaut.y.normal= astronaut.y.normal+ astronaut.speed
    if (astronaut.hover= true &&
      astronaut.y.normal>=astronaut.y.max){
        astronaut.speed=-astronaut.speed
      }
      if (astronaut.hover= true &&
        astronaut.y.normal<=astronaut.y.min){
          astronaut.speed=-astronaut.speed
        }

        //user control
        if (keyIsDown(39)){
          astronaut.x=astronaut.x+5;
        }

        if (keyIsDown(37)){
          astronaut.x=astronaut.x-5;
        }

        if (keyIsDown(40)){
          astronaut.y.normal=astronaut.y.normal+4
        }

        if (keyIsDown(38)){
          astronaut.y.normal=astronaut.y.normal-4
        }
     }

     display(){
       //astronaut display
       imageMode(CENTER)
       image(astronaut.image,astronaut.x,astronaut.y.normal,astronaut.width,astronaut.height)
     }
  }
