var Player,PlayerImg,left_boundary,right_boundary,i;
var Path,PathImg;




function preload(){
  //pre-load images
  PlayerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  PathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 // background('blue');
  //create sprites here
 
 
  Path = createSprite(200,200);
 Path.addImage(PathImg);
  Path.velocityY = 6;
  Path.scale = 1.45;



Player = createSprite(250,300,20,20);
Player.addAnimation("movingPlayer", PlayerImg);
Player.scale = 0.08


left_boundary = createSprite(0,0,100,800);
left_boundary.visible = false;

right_boundary = createSprite(410,0,100,800);
right_boundary.visible = false



}




function draw() {
background(0)
 Path.velocityY = 6


 Player.x = World.mouseX;

 edges = createEdgeSprites()
 Player.collide(edges[3]);
 Player.collide(left_boundary);
 Player.collide(right_boundary);

 if(Path.y > 400) {
  Path.y = height/2;
}



  drawSprites();
}
