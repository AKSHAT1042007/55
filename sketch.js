 var database;
 var player,playerCount,allPlayers;
 var background1;
 var bgImg,laserImg,spaceship1Img,spaceship2Img,laserImg2;
 var bg,laser,spaceship1,spaceship2;
 var gameState = 0;
 var form,game,player;
 
 function preload(){
bgImg = loadImage("images/bg.png")
laserImg = loadImage("images/laser.jpg")
spaceship1Img = loadImage("images/spaceship1.png")
spaceship2Img = loadImage("images/spaceship2.png") 
laserImg2 = loadImage("images/redlaser.jpg")
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-111);
  background1 = createSprite(displayWidth/2+50,displayHeight)
  background1.addImage(bgImg)
  background1.scale = 2.3
  spaceship1 = createSprite(displayWidth/2+500,displayHeight/2)
  spaceship1.addImage(spaceship1Img)
  spaceship1.scale = 0.1;
  spaceship2 = createSprite(displayWidth/2-500,displayHeight/2)
  spaceship2.addImage(spaceship2Img)
  spaceship2.scale = 0.35;
  laser1 = createSprite(displayWidth/2+50,displayHeight)
  laser1.addImage(laserImg2)
 laser1.scale = 0.1
 laser1.visible = false
  laser2 = createSprite(displayWidth/2-500,displayHeight/2)
  laser2.addImage(laserImg)
  laser2.scale = 0.1
  laser2.visible = false
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(0)
    
    if(keyIsDown(RIGHT_ARROW)){
    spaceship1.x = spaceship1.x+3;
    }
   
      if(keyIsDown(LEFT_ARROW)){
        spaceship1.x = spaceship1.x-3;
        }
        if(keyIsDown(UP_ARROW)){
          spaceship1.y = spaceship1.y-4;
          }
          if(keyIsDown(DOWN_ARROW)){
            spaceship1.y= spaceship1.y+4;
            }

            if(keyDown("D")){
              spaceship2.x = spaceship2.x+3;
              }
             
                if(keyDown("A")){
                  spaceship2.x = spaceship2.x-3;
                  }
                  if(keyDown("W")){
                    spaceship2.y = spaceship2.y-4;
                    }
                    if(keyDown("S")){
                      spaceship2.y= spaceship2.y+4;
                      }
  background1.velocityX = -4
                   
  if(background1.x<200){
background1.x =  width/2
  }    
  if(keyIsDown("5")){
    laser1.velocityX = -10
    laser1.visible = true
   }
  if(keyDown("6")){
   laser2.velocityX = 10
   laser2.visible = true
  }
  
 
   if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  drawSprites()
}


