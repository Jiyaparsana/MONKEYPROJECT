var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var gameState=1
var PLAY=1
var END=0
var survivalTime 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315)
monkey.addAnimation("movingmonkey",monkey_running)
  monkey.scale=0.1
  
   
  bananaGroup = new Group()
    
  obstacleGroup = new Group()
  
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4
  
  
  console.log(ground.x)
  

  
 
}


function draw() {
background("white")
  drawSprites()
  
   
  
  if(gameState === PLAY){
  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
      monkey.collide(ground)
  
  if(keyDown("space")){
    monkey.velocityY= -8
  }
  monkey.velocityY = monkey.velocityY + 0.8
    
    food()
  obstacles()
  
     stroke("white");
     fill("white")
    text("Score: "+ score,500,50)
    
    stroke("black")
    textSize(20)
    fill("black")
    survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time: "+ survivalTime,100,50)
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach()
    score = score+1
  }
    
    if(obstacleGroup.isTouching(monkey)){
 
  }
  }
  else if(gameState===END){

  background("black")
      textSize=300
        fill("white")
  text("GAMEOVER",160,200)

    }
  
}
function food(){
  if(frameCount % 80 === 0){
    banana= createSprite(150,150,20,20)
    banana.addImage("flyingbanana",bananaImage)
    banana.scale = 0.1
    banana.y= Math.round(random(120,200))
    banana.velocityX= -4
    
    bananaGroup.add(banana)
    bananaGroup.setLifetimeEach(410)
  }
}

  function obstacles(){
    if (frameCount % 300 === 0){
   obstacle= createSprite(340,310,20,20) 
   obstacle.addImage("attackingobstacles",obstacleImage)
    obstacle.scale =0.2
      obstacle.velocityX=-3

      obstacleGroup.add(obstacle)
      obstacleGroup.setLifetimeEach(410)
    }
  }
