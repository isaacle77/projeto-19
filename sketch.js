var car1,car1Img,sGroup;
var road,roadImage,gameover;

function preload(){
 car1Img = loadImage("car.png");
 roadImage = loadImage("path.png");
 sImg = loadImage("pixel-car.png");
 endImg = loadImage("game_over.png");
}

function setup() {
 createCanvas(301,400);

  road = createSprite(150,200,40,20);
  road.addImage(roadImage);
  road.velocityY = 30;
  
  
  car1 = createSprite(200,350,40,20);
  car1.addImage(car1Img);
  car1.scale=0.03;
  
  gameover = createSprite(150,200,40,20);
  gameover.addImage(endImg);
  gameover.scale=0.18;
  gameover.visible=false

  sGroup=new Group();
}

function draw() {
  
    background("yellow");
    
    
    car1.x = World.mouseX;
    
    if(road.y > 490){
     road.y = 0;
      
    }

    createS();

    if(sGroup.isTouching(car1)) {
       gameover.visible = true;
       car1.visible = false;
       road.visible = false;
    }

    
    function createS(){
        if (World.frameCount % 60 == 0) {
         
         var s1 = createSprite(Math.round(random(50, 350),40, 8, 8));
         s1.addImage(sImg);
         s1.scale=0.03;
         s1.velocityY = 3;
         s1.lifetime = 150;
         sGroup.add(s1);
        }
      }
      

  drawSprites();
  
  }
  