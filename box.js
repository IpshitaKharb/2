class Box{
    constructor(x,y,w,h){
     var options={
            isStatic:false,
}
       this.width = w;
       this.height = h;
       this.body = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
       this.color=color(random(0,255) , random(0,255) , random(0,255));
       this.Visiblity = 255;
    }

    display(){
       fill(this.color);
       if(this.body.speed < 6){
         rectMode(CENTER);
         //console.log(this.body.speed)
         var angle = this.body.angle;
  
         this.Visiblity -= 5;
         tint(255,this.Visiblity);
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         rect(0,0,this.width,this.height)
         pop();
       }else{
         World.remove(world,this.body);
       }
    }
}