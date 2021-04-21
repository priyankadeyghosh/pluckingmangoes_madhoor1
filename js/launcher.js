class launcher{
    constructor(bodyA, pointA){
        var options = {
            bodyA: bodyA,
            pointB: pointA,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA=bodyA;
        this.pointB = pointA;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    
    
    display(){
        if(this.launcher.bodyA !=null){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    fly(){
        this.launcher.bodyA = null;
    }

    attach(object1){
        this.launcher.bodyA = object1;

    }

}