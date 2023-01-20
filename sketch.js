
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ball
var groundObj
var left
var right
function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
restituion:0.03,
density:1.2,
friction:0,
	}
	//Create the Bodies Here.
ball = Bodies.circle(200,200,20, ball_options)
World.add(world,ball)
keyPressed()
groundObj= new Ground(690,600,1450,20)
right= new Ground(1290,550,20,120)
left= new Ground(960,550,20,120)
	Engine.run(engine);

	ellipseMode(RADIUS)
	rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  
  background(12);

  groundObj.show()
  left.show()
  right.show()
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine)
  drawSprites();
console.log(keyCode)
//keyCode=0

}




	


	function keyPressed(){
		if( keyCode === UP_ARROW ){
	
	
			Matter.Body.applyForce(ball,{x:0,y:0},{x:73.05,y:0})


	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-79.05})

		}
	}