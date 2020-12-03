
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1300, 900);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width/2,100,800,40);



	bobObject1 = new Bob(450,550,50);
	bobObject2 = new Bob(550,550,50);
	bobObject3 = new Bob(650,550,50);
	bobObject4 = new Bob(750,550,50);
	bobObject5 = new Bob(850,550,50);

	rope1 = new Rope(bobObject1.body,roof1.body,-100*2,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-50*2,0);
	rope3 = new Rope(bobObject3.body,roof1.body,0,0);
	rope4 = new Rope(bobObject4.body,roof1.body,100,0);
	rope5 = new Rope(bobObject5.body,roof1.body,200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");

  Engine.update(engine);

  roof1.display();
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();

  drawSprites();

  textSize(30);
  text("Up Arrow = Moves 1 Bob",200,750);
  text("Down Arrow = Moves 2 Bobs",700,750);
  text("Left Arrow = Moves 3 Bobs",200,850);
  text("Right Arrow = Moves 4 Bobs",700,850);

 
}

function keyPressed() { 
	if (keyCode === UP_ARROW){ 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-2000,y:2000}); 
	}

	if (keyCode === DOWN_ARROW){ 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-2000,y:2000}); 
	}
	if (keyCode === DOWN_ARROW){ 
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-2000,y:2000}); 
	}

	if (keyCode === LEFT_ARROW){ 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-2000,y:2000}); 
	}
	if (keyCode === LEFT_ARROW){ 
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-2000,y:2000}); 
	}
	if (keyCode === LEFT_ARROW){ 
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-2000,y:2000}); 
	}

	if (keyCode === RIGHT_ARROW){ 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-2000,y:2000}); 
	}
	if (keyCode === RIGHT_ARROW){ 
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-2000,y:2000}); 
	}
	if (keyCode === RIGHT_ARROW){ 
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-2000,y:2000}); 
	}	
	if (keyCode === RIGHT_ARROW){ 
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-2000,y:2000}); 
	}
}
