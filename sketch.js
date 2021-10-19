
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftWall;
var rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option = {
		isStatic : false,
		restitution : 0.3,
		density : 1.2,
		friction : 0

	}
	
	ball = Bodies.circle(260,100,10,ball_option);
	ground = new Ground(width/2,670,width,20);
	leftWall = new Ground(1100,600,20,120);
	rightWall = new Ground(1300,600,20,120);



	
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,10,10);
	ground.display();
	leftWall.display();
	rightWall.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85,y:-85});
	}
}



