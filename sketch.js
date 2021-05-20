var moving, fixed;

function setup() {
  createCanvas(800,400);
  moving=createSprite(600, 200, 20, 80);
  fixed= createSprite(200,200,80,20);

  moving.shapeColor="red";
  fixed.shapeColor="red";

  console.log("working");

  moving.velocityX= -5
}

function draw() {
  background("pink"); 
  
  //moving.x= mouseX;
  //moving.y= mouseY;

  //Algorithm for isTouching
  if (moving.x- fixed.x<moving.width/2+fixed.width/2 &&
   fixed.x- moving.x <moving.width/2+fixed.width/2 &&
    moving.y- fixed.y<moving.height/2+fixed.height/2 &&
    fixed.y -moving.y <moving.height/2 +fixed.height/2  ) {

      moving.shapeColor="blue";
      fixed.shapeColor="blue";
    
  } else {
    
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }

 //Algorithm for bouncing
 if (moving.x- fixed.x<moving.width/2+fixed.width/2 &&
  fixed.x- moving.x <moving.width/2+fixed.width/2 &&
   moving.y- fixed.y<moving.height/2+fixed.height/2 &&
   fixed.y -moving.y <moving.height/2 +fixed.height/2  ) {

     moving.velocityX= -1*moving.velocityX;
     moving.velocityY= -1*moving.velocityY;
   
 } else {
   
   moving.velocityX= moving.velocityX;
   moving.velocityY= moving.velocityY;
 }


// Algorithm for colliding
if (moving.x- fixed.x<moving.width/2+fixed.width/2 &&
  fixed.x- moving.x <moving.width/2+fixed.width/2 &&
   moving.y- fixed.y<moving.height/2+fixed.height/2 &&
   fixed.y -moving.y <moving.height/2 +fixed.height/2  ) {

     moving.velocityX= 0;
     moving.velocityY= 0;
   
 } else {
   
   moving.velocityX= moving.velocityX;
   moving.velocityY= moving.velocityY;
 }


  drawSprites();
}