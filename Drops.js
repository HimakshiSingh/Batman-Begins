class Drop {
    constructor(x,y){
        var options = {
            friction:0.1,
            restitution:0.2,
        }
        this.body = Bodies.circle(x,y,5,options)
        this.radius=5
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body ,({x:random(0,1200),y:random (0,1200)}))
        }
    }

    display(){
        fill("lightblue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}