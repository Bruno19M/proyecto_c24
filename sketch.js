const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber1, stone1,iron1,rubber2, stone2,iron2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber1 = new Rubber(200,200,100)
    rubber2 = new Rubber(300,200,100)
    
    stone1 = new Stone(400,200,50,50)
    stone2 = new Stone(500,200,50,50)

    iron1 = new Iron(600,200,100,100)
    iron2 = new Iron(700,200,100,100)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    rubber2.display();
    stone2.display();
    iron2.display();
    
 
}