var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400); 
  speed=random(223,321); 
  weight=random(30,52); 
  thickness = random(22, 83);
  bullet=createSprite(50,200,50,50); 
  bullet.velocityX=speed; 
  wall=createSprite(1000,200,thickness,height/2); 
}

function draw()   
{
  { background("black"); 
  if (hasCollided(bullet,wall))
   {
      bullet.velocityX=0; 
      var damage=0.5*speed*weight*speed/(thickness*thickness*thickness); 
      if (damage>10) 
      {
         wall.shapeColor= "red"; } 
      if (damage<10) 
      {
         wall.shapeColor= "green"; }
         }
          drawSprites(); 
        } 
      }
      
      function hasCollided(lbullet,lwall) 
      
      {
         bulletRightEdge=lbullet.x +lbullet.width; 
      
        wallLeftEdge=lwall.x; 

      if (bulletRightEdge>= wallLeftEdge) 
      {
         return true; 
        }
         return false; 
        }