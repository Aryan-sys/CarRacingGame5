var gameState = 0;
var playerCount;
var form, player , game;
var database, position;
var allPlayers;
var distance = 0;
var car1 , car2 , car3, car4 , cars;
var car1Img, car2Img, car3Img, car4Img;
var trackImg;

function preload(){
    car1Img = loadImage("../images/car1.png");
    car2Img = loadImage("../images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");
    

    
}
function setup(){
    createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

   
  
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        fill("red");
        text("GAME OVER",  displayWidth / 2, displayHeight / 2 ) ;
        game.play();
    }
      if(gameState === 2){
     
          game.end();
      }
}
