const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground1, dustbin1, dustbin2, dustbin3, a = 0;
var binI, dustbin;
function preload() {
	binI = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	dustbin = createSprite(550, 600, 10, 10);
	dustbin.addImage("img", binI);
	dustbin.scale = 0.6;
	//Create the Bodies Here.
	paper1 = new paper(100, 100, 50);
	ground1 = new wall(width / 2, 690, 10, width);
	dustbin1 = new wall(610, 590, 150, 20);
	dustbin2 = new wall(470, 590, 150, 20);
	dustbin3 = new wall(550, 675, 20, 180);
	Engine.run(engine);
	imageMode(CENTER);
}


function draw() {
	//rectMode(CENTER);
	background(255);
	keypressed();

	paper1.display();
	
	ground1.display();
	//dustbin1.display();
	//dustbin2.display();
	//dustbin3.display();
	drawSprites();
}
function keypressed() {
	if (keyCode === UP_ARROW && a == 0) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 60, y: -150 });
		a = 1;
	}
}



