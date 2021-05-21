//Algorithm for isTouching
function abc(moving, fixed){
    if (moving.x- fixed.x<moving.width/2+fixed.width/2 &&
      fixed.x- moving.x <moving.width/2+fixed.width/2 &&
       moving.y- fixed.y<moving.height/2+fixed.height/2 &&
       fixed.y -moving.y <moving.height/2 +fixed.height/2  ) {
    
       return true;
       
     } else {
       
       return false;
     }
    }
    

//Algorithm for bouncing
function bounceBall(moving, fixed){
    
 if (moving.x- fixed.x<moving.width/2+fixed.width/2 &&
    fixed.x- moving.x <moving.width/2+fixed.width/2 &&
     moving.y- fixed.y<moving.height/2+fixed.height/2 &&
     fixed.y -moving.y <moving.height/2 +fixed.height/2  ) {
  
       moving.velocityX= -1*moving.velocityX;
       moving.velocityY= -1*moving.velocityY;

       fixed.velocityX= -1*fixed.velocityX;
       fixed.velocityY= -1*fixed.velocityY;
     
   } else {
     
     moving.velocityX= moving.velocityX;
     moving.velocityY= moving.velocityY;

     fixed.velocityX= fixed.velocityX;
    fixed.velocityY=fixed.velocityY;
   }
  
}


 //Algorithm for colliding
function collision(moving,fixed){
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
}