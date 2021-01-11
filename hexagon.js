class Hexagon{
    constructor(x,y,r){
     var options={
            'restitution':1
            }
       this.body = Bodies.circle(x,y,r/2,options);
       this.radius = r;
       this.image=loadImage("polygon.png");
       World.add(world,this.body);
    }

    display(){
       ellipseMode(CENTER);
       imageMode(CENTER);
       push();
       var angle = this.body.angle;
       translate(this.body.position.x,this.body.position.y);
       rotate(angle);
       // ellipse(0,0,this.radius,this.radius);
       image(this.image,0,0,this.radius,this.radius);
       pop();

    }
}