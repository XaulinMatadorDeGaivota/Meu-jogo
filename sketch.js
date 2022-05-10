var runner,runnerImg;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var clock,clockImg;
var wallImg;

function preload(){
  runnerImg = loadImage("runner.png");
  clockImg = loadImage("clock.jpg");
 // wallImg = loadImage("wall.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  runner= createSprite(100,100,15,15);
  runner.addImage("runerImg",runnerImg);
  runner.scale = 0.05;

  clock = createSprite(200,200,10,10);
  clock.addImage("clockImg",clockImg);
  clock.scale = 0.05;

  wall1 = createSprite(300,150,400,25);
  //wall1.addImage("wallImg",wallImg);
  //wall1.scale = 0.03;
}

function draw(){
  background("lightBlue");
  
  if(keyDown("down_arrow")){
    runner.velocityY = 2; 
  }
  
  if(keyDown("right_arrow")){
    runner.velocityX = 2; 
  }
   
  if(keyDown("left_arrow")){
    runner.velocityX = -2; 
  }
  if(keyDown("up_arrow")){
    runner.velocityY = -2; 
  }
    drawSprites();
}

