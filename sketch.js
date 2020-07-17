

const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
var  raindrop=[]

var symbol
var maxDrops = 100
var umb
var thunder
var thunder1 , thunder2


function preload(){
  thunder1 = loadImage("thunder.png");
  thunder2 = loadImage("thunder1.png");
}

function setup() {
  createCanvas(1200,400);
  engine= Engine.create();
  world=engine.world;

  umb = new Umbrella (200,350)
  

 
for(i=0;i<maxDrops;i++)
{
  raindrop.push(new Drop(random(0,1200),random(0,1200)));
}

  
}

function draw() {
  
  background("black");  
  Engine.update(engine)
  
  if(frameCount % 80 === 0){
    thunder = createSprite(random(50,1000),random(0,20));
       var rand = Math.round(random(1,2));
        switch(rand) {
         case 1: thunder.addImage(thunder1);
              break;
         case 2: thunder.addImage(thunder2);
              break;
          default : break ;
    }
  }

  if(frameCount % 120 === 0){
    if(thunder !== undefined ){
      thunder.destroy();
    }
  }


  for(i=0;i<raindrop.length;i++)
  {
    raindrop[i].display();
    raindrop[i].update();
   
  }
  
  umb.display()

  
 // raindrop.display()
 drawSprites();
}