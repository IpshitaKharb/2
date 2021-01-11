class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = pointB;
    }
    fly () {
        this.chain.bodyA=null;
    }
    attach(bodyA){
        this.chain.bodyA=bodyA;
    }
    display(){
        if(this.chain.bodyA){
            var PointA = this.chain.bodyA.position;
            var PointB = this.pointB;
            push ();
            strokeWeight(4);
            fill ("white");
            line(PointA.x,PointA.y,PointB.x,PointB.y);
            pop ();
        }
    }
}