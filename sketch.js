var car,carImg;
var road,roadImg;

var NPCGroup,NPC1, NPC2, NPC3, NPC4;

var score;
var Play = 1;
var END = 0;
var gameState = Play;




function preload(){
  carImg = loadImage("car.jpg");
  roadImg = loadImage("road.jpg");

  NPC1Img = loadImage("Truck.png");
  NPC2Img = loadImage("NPC2.jpg");
  NPC3Img = loadImage("NPC3.jpg");
  NPC4Img = loadImage("NPC4.jpg");

  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");
  
}

function setup() {
  createCanvas(600, 300);
  
  carImage = createSprite(50,180,20,50);
  carImage.addImage = ("carImage",carImg);
  carImage.scale = 0.5;

  road = createSprite(300,150);
  road.addImage("raod",roadImg);

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);

  restart = createSprite(300,140);
  restart.addImage(restartImg);

  gameOver.scale = 0.5;
  restart.scale = 0.5;

  NPCGroup = createGroup();
  
  
  console.log("Hello" + 5);


  
  score = 0;
}

function draw() {
  background(220);
  text("Score: "+ score, 500,50);

  if (gameState === Play){ 
  
  //spawn obstacles on the ground
  

  if(NPCGroup.isTouching(car)){
      gameState = END;
  } 
 }
  else if(gameState === END){
    console.visible("hey")
     gameOver.visible = true;
     restart.visible = true;

    car.velocityY = 0

    //set lifetime of the game objects so that they never destroyed
    NPCGroup.setLifetimeEach(-1)
  }
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var NPC = createSprite(400,165,10,40);
   NPC.velocityX = -6;

   
    // //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: NPC.addImage(NPC1);
              break;
      case 2: NPC.addImage(NPC2);
              break;
      case 3: NPC.addImage(NPC3);
              break;
      case 4: NPC.addImage(NPC4);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    NPC.scale = 0.5;
    NPC.lifetime = 300;

    //add each obstacle to the group
    NPCGroup.add(NPC);
 }
}