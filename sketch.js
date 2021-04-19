
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1=new bob(280,325);
	bobObject2=new bob(340,325);
	bobObject3=new bob(400,325);
	bobObject4=new bob(460,325);
	bobObject5=new bob(520,325);
	roof1=new roof(400,100,600,50);
	rope1=new rope(bobObject1.body,roof1.body,-120,0);
	rope2=new rope(bobObject2.body,roof1.body,-60,0);
	rope3=new rope(bobObject3.body,roof1.body,0,0);
	rope4=new rope(bobObject4.body,roof1.body,60,0);
	rope5=new rope(bobObject5.body,roof1.body,120,0);
	
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
bobObject2.display();
  bobObject3.display();
 bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}




  
  drawSprites();
 
}



