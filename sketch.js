var moving, fixed;
var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(600, 200, 20, 80);
  b= createSprite(200,200,80,20);

  a.shapeColor="red";
  b.shapeColor="red";

  
  a.velocityX= -5
}

function draw() {
  background("pink"); 
  
 // a.x= mouseX;
 // a.y= mouseY;

  if(collision(a,b)){
    a.shapeColor="blue";
    b.shapeColor="blue";
  }
  else
  {
    a.shapeColor="red";
    b.shapeColor="red";
  }

 drawSprites();
}

