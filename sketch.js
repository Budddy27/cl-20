var  fixRect
var movingRect
var rect1
var rect2
function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,50,80);
  fixRect.shapeColor="blue                               "
  movingRect.shapeColor="blue"
rect1=createSprite(200,300,50,50)
rect2=createSprite(700,300,50,50)
rect1.shapeColor="purple"
rect1.velocityX=5
rect2.velocityX=-5
}

function draw()
{
  background(0);    
  movingRect.x=mouseX
  movingRect.y=mouseY 

if(movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2   && fixRect.x -movingRect.x<movingRect.width/2+fixRect.width/2
      && movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2   && fixRect.y -movingRect.y<movingRect.height/2+fixRect.height/2)
{ 
  movingRect.shapeColor="red"
}
else{
  movingRect.shapeColor="blue"
}

if(rect1.x-rect2.x < rect1.width/2+rect2.width/2   && rect2.x-rect1.x <rect1.width/2+rect2.width/2)
  {
  rect1.velocityX=rect1.velocityX*-1
  rect2.velocityX=rect2.velocityX*-1
  }

  drawSprites();                      


}