class Link{

    contructor(bodyA, bodyB){
        var lastindex = bodyA.body.bodies.length - 2;
        this.link = Constraint.create({
            bodyA: bodyA.body.bodies[lastindex],
            pointA: {x:0, y:0},
            bodyB: bodyB, 
            pointB: {x:0, y:0},
            length: 0,
            stiffness: 0.01
        })
        World.add(engine.world, this.link)
    }
}