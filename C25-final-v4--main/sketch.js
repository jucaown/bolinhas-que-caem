
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;
var angle1=30;
var angle2=90;

var ground;

var fan,fan1,fan2,fan3;
var hater1, hater2;
var ball1, ball2, ball3, ball4, ball5;


function setup() {
createCanvas(400,400);

engine = Engine.create();
world = engine.world;
  
 var ball_options = 
 {
  restitution: 0.95,
}
   
var ground_options =
{
  isStatic: true
};

fill("brown")
ground = Bodies.rectangle(200,400,400,20,ground_options);
World.add(world,ground); 

hater1 = Bodies.rectangle(100,250,100,20, ground_options);
World.add(world, hater1);

hater2 = Bodies.rectangle(300,250,100,20, ground_options);
World.add(world, hater2);
  
fan = new Ground(200,200,100,30); //x,y,w,h
fan1 = new Ground(200,200,100,30);


fan2 = Bodies.rectangle(200,200,100,20, ground_options);
World.add(world, fan2);

fan3 = Bodies.rectangle(200,200,100,20, ground_options);
World.add(world, fan3);



ball1 = Bodies.circle(100,10,10,ball_options);
World.add(world,ball1);

ball2 = Bodies.circle(150,10,10,ball_options);
World.add(world,ball2);

ball3 = Bodies.circle(230,10,10,ball_options);
World.add(world,ball3);

ball4 = Bodies.circle(300,10,10,ball_options);
World.add(world,ball4);

ball5 = Bodies.circle(270,10,10,ball_options);
World.add(world,ball5);

rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() 
{
background(51);
Engine.update(engine);

ellipse(ball1.position.x,ball1.position.y,10);
ellipse(ball2.position.x,ball2.position.y,10);
ellipse(ball3.position.x,ball3.position.y,10);
ellipse(ball4.position.x,ball4.position.y,10);
ellipse(ball5.position.x,ball5.position.y,10);

rect(ground.position.x,ground.position.y,750,20);

rect(hater2.position.x, hater2.position.y, 100,20);
rect(hater1.position.x, hater1.position.y, 100  ,20);

fan.show();
fan1.show();


Matter.Body.rotate(fan3, angle1);
push();
translate(fan3.position.x,fan3.position.y);
rotate(angle1);
rect(0,0,100,20);
pop();
angle1 +=0.05;


Matter.Body.rotate(fan2, angle1);
push();
translate(fan2.position.x,fan2.position.y);
rotate(angle2);
rect(0,0,100,20);
pop();
angle2 +=0.2;



Engine.update(engine);
}


