var boy
var edges
var path
function preload(){
  //pre-load images
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  // Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2


//creating boy running
boy = createSprite(70,380,20,20);
boy.addAnimation("boy",boyImg);
boy.scale=0.08;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
}
