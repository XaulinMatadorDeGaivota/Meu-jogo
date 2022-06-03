var runner,runnerImg;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13;
var clock,clockImg;
var wallImg;
var white_pointImg,white_point;
var gameState = 0;
var time = 1000;

function preload(){
  runnerImg = loadImage("runner.gif");
  clockImg = loadImage("clock.png");
  white_pointImg = loadImage("white point.gif");
}

function setup(){
  createCanvas(1000,620);

  runner= createSprite(480,590,15,15);
  runner.addImage("runerImg",runnerImg);
  runner.scale = 0.15; 

 /* clock = createSprite(300,50,30,30);
  clock.addImage("clockImg",clockImg);
  clock.scale = 0.15; */


  white_point = createSprite(890,50,10,10);
  white_point.addImage("white_pointImg",white_pointImg);
  white_point.scale = 0.2;


  wall1 = createSprite(400,620,50,150);
  wall2 = createSprite(550,620,50,350);
  wall3 = createSprite(450,420,250,50);
  wall4 = createSprite(300,550,250,50);
  wall5 = createSprite(200,400,50,300);
  wall6 = createSprite(350,370,50,50);           
  wall7 = createSprite(500,225,650,50); 
  wall8 = createSprite(500,360,350,50); 
  wall9 = createSprite(650,435,50,200);
  wall10 = createSprite(800,100,50,250);
  wall11 = createSprite(850,510,350,50);
  wall12 = createSprite(975,250,50,500);
  wall13 = createSprite(750,360,150,50);

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
  
  if(gameState === 0){
    gameState1();
  }
    drawSprites();
}

function gameState1(){
  if(runner.isTouching(wall1)||runner.isTouching(wall2)||runner.isTouching(wall3)||runner.isTouching(wall3)
  ||runner.isTouching(wall4)||runner.isTouching(wall5)||runner.isTouching(wall5)||runner.isTouching(wall6)
  ||runner.isTouching(wall7)||runner.isTouching(wall8)||runner.isTouching(wall9)||runner.isTouching(wall10)
  ||runner.isTouching(wall11)||runner.isTouching(wall12)||runner.isTouching(wall13)){
    runner.position.x = 480;
    runner.position.y = 590;
    runner.velocityX = 0;
    runner.velocityY = 0;
  } 

  if(runner.isTouching(white_point)){
    runner.position.x = 480;
    runner.position.y = 590;
    runner.velocityX = 0;
    runner.velocityY = 0;   

  }
}