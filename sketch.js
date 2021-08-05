const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    
	var ball_options = {
		restitution: 0.8,
		//isStatic: true,
	}
	bob1= Bodies.circle(300, 300, 20, ball_options);
	World.add(world, bob1);

	bob2= Bodies.circle(340, 300, 20, ball_options);
	World.add(world, bob2);

	bob3= Bodies.circle(380, 300, 20, ball_options);
	World.add(world, bob3);

	bob4= Bodies.circle(420, 300, 20, ball_options);
	World.add(world, bob4);

	bob5= Bodies.circle(460, 300, 20, ball_options);
	World.add(world, bob5);

    rope1 = Constraint.create({
		pointA: {x:300, y:100},
		bodyB: bob1,
		pointB: {x:0, y:0},
		length: 100,
		stiffness: 0.1
	})
	World.add(world, rope1);

	rope2 = Constraint.create({
		pointA: {x:340, y:100},
		bodyB: bob2,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	})
	World.add(world, rope2);

	rope3 = Constraint.create({
		pointA: {x:380, y:100},
		bodyB: bob3,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	})
	World.add(world, rope3);

	rope4 = Constraint.create({
		pointA: {x:420, y:100},
		bodyB: bob4,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	})
	World.add(world, rope4);

	rope5 = Constraint.create({
		pointA: {x:460, y:100},
		bodyB: bob5,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	})
	World.add(world, rope5);

  
}

function draw() {
	background("#99004d");
	

	rect(roof.position.x, roof.position.y, 230, 20);

    stroke(255);
	strokeWeight(2);
    line(rope1.pointA.x, rope1.pointA.y, bob1.position.x, bob1.position.y);
	line(rope2.pointA.x, rope2.pointA.y, bob2.position.x, bob2.position.y);
	line(rope3.pointA.x, rope1.pointA.y, bob3.position.x, bob3.position.y);
	line(rope4.pointA.x, rope1.pointA.y, bob4.position.x, bob4.position.y);
	line(rope5.pointA.x, rope1.pointA.y, bob5.position.x, bob5.position.y);

	ellipse(bob1.position.x, bob1.position.y, 20);
	ellipse(bob2.position.x, bob1.position.y, 20);
	ellipse(bob3.position.x, bob1.position.y, 20);
	ellipse(bob4.position.x, bob1.position.y, 20);
	ellipse(bob5.position.x, bob1.position.y, 20);
	
    Engine.update(engine);

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1, {x: 0, y: 0}, {x: -0.05, y: 0});
	}
}
  