
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj,groundObject,paperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,550);
	paperObj = new Paper(200,650,65,65);

	Engine.run(engine);
  
}


function draw() {
  background(230);
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperObj.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:270,y:-400});
	}
}
