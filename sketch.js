const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2, box3, box4, box5;
var ground1;
var log1, log2, log3, log4;
var pig1, pig2;
var bird;
let backGroundImg;

function preload(){
   backGroundImg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  log1 = new Log(550, 250, 200, PI/2);
  box2 = new Box(500, 300, 50, 50);
  box3 = new Box(600, 300, 50, 50);
  pig1 = new Pig(550, 300);
  log2 = new Log(550, 150, 200, PI/2);
  log3 = new Log(500, 100, 100, PI/6);
  log4 = new Log(600, 100, 100, -PI/6);
  box1 = new Box(500, 200, 50, 50);
  box4 = new Box(600, 200, 50, 50);
  box5 = new Box(550, 100, 50, 50);
  pig2 = new Pig(550, 200);
  ground1 = new Ground(400, height, 800, 20);

  bird = new AngryBird(50, 200);
}

function draw() {
  background(backGroundImg); 

  Engine.update(engine);
  
  box2.display();
  box3.display();
  log1.display();
  pig1.display();
  box4.display();
  box1.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();
  ground1.display();
  bird.display();
  
}