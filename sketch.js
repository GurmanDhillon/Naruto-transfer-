var naruto, narutoimg;
var ita,itaimg,mad,madimg,kab,kabimg,tob,tobimg,oro,oroimg,kim,kimimg;
var bg,bgimg;
var gameover,gameoverimg,start,startimg,restart,restartimg;
var logo,logoimg;
var gameState = PLAY;
var score = 0;
var obs,obsgroup;
var fire,firegroup;

function preload(){
narutoimg = loadAnimation("Naruto.png","Naruto1.png");
itaimg = loadImage("Itachi.png");
madimg = loadImage("Madara.png");
kabimg = loadImage("Kabuto.png");
tobimg = loadImage("Tobi2.png");
oroimg = loadImage("Oro.png");
kimimg = loadImage("Kim.png");
bgimg = loadImage("bg.jpg");
gameoverimg = loadImage("gameover.jpg");
startimg = loadImage("Start2.png");
restartimg = loadImage("restart.png");
logoimg = loadImage("Logo.png");
}


function setup(){
createCanvas(1550,750);
bg = createSprite(600,500,1200,1200);
bg.addImage(bgimg);


}


function draw(){
drawSprites();
}
