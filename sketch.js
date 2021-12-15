//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
//varibles
var snow = [];
var backgroundImg;
var elsa, elsaImg ;

function preload(){
  //preload Images
    backgroundImg=loadImage("Bground.jpg");
    elsaImg =loadImage("elsa.png") 

 }
function setup() {
  createCanvas(950,700);
  engine = Engine.create();
  world = engine.world;

  //create elsa
  elsa = createSprite(100,500);
  elsa.addImage(elsaImg);
  elsa.scale = 1.5;

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount%5===0){
    snow.push(new Snow(random(0,400),-50,90))
  }
   for (var i = 0; i < snow.length; i++) {
       snow[i].display();    }

       elsa.display();
}

