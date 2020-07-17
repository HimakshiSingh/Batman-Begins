class RainDrops{
 constructor(){
    
   var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
    this.body = Bodies.rectangle(this.x, this.y,this.radiusX,this.radiusY, options);
    //var charstring = "||||||||||||||||||||||||||||||||||||||||||||||||||||||"
    this.x = Math.round(random(0,1200))
    this.y = Math.round(random(-500,-50))
    this.yspeed = Math.round(random(0,20))
    this.radiusX = 30
    this.radiusY = 30
    World.add(world, this.body);
    //var num = Math.round(random(0,46))
    //this.displaychar = charstring.charAt(num)

 }
 fall(){
    this.y = this.y+this.yspeed;
    if(this.rain>height){
        Matter.Body.setPosition(this.rain ,({x:random(0,400),y:random (0,400)}))
    }
 }   
 

 display(){
   var pos = this.body.position
   strokeWeight(2)
   stroke("black")
   fill ("white")
   
   ellipseMode(RADIUS);

    ellipse(pos.x,pos.y,this.radiusX,this.radiusY)
    //stroke ("blue")
    //textSize(random(12,20))
   /// ellipseMode(CENTER)
    //ellipse(this.rain,this.x,this.y)
    
 }
}
/*class Circle{

   constructor(x,y,radiusX,radiusY){
   
       var options = {
   
       isStatic:true
   
       }
       this.body = Bodies.rectangle(x, y, radiusX,radiusY, options);
       this.radiusX = radiusX
       this.radiusY = radiusY
       
       World.add(world, this.body);
   
   }
   
   
   display(){
       var pos = this.body.position
       strokeWeight(2)
       stroke("black")
       fill ("white")
       
       ellipseMode(RADIUS);

   ellipse(pos.x,pos.y,this.radiusX,this.radiusY)
   
       }
       
   
       
       
       
       }
       */
       
       