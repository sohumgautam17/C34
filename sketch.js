//Create variables here
var dog, happyDog; 
var database;
var foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 20, 20);

 //var foodStock = database.ref('Food');

}


function draw() {  

  drawSprites();
  //add styles here

}



