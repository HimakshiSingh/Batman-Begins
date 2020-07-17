class Umbrella
    {
        constructor(x,y) 
        {
            var options = 
            {
                isStatic : true
            }
            this.body = Bodies.rectangle(x, y, options);
            this.image = loadImage("Umbrella.png");
            World.add(world, this.body);
            
        }
          display()
          {
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 600 , 300);
            pop();
          }
    }
    