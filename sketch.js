const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,300,50,50);
    box2 = new Box(1000,100,50,50);
    ground1=new Ground(600,height,1200,20);
    pig1=new Pig(900,100);
    bird1=new Bird(100,100);
    log1=new Log(900,90,20,300,PI/2);
    console.log(box1.body.position.x);
    console.log(box1.body.position.y);
    console.log(box1.body.angle);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  bird1.display();

   
}