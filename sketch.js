
var bg1,bg1img
var gamestate="wel"
var bg2,bg2img
var sh,shimg
function preload()
{
bg1img=loadImage("c.png")
bg2img=loadImage("r1.png")
shimg=loadImage("w.png")
}

function setup() {
	createCanvas(800, 600);
bg1 = createSprite(400,300,800,500)
bg1.addImage(bg1img)
bg1.scale=1
bg2 = createSprite(400,300,800,500)
bg2.addImage(bg2img)
bg2.scale=3.5
bg2.visible=false
sh= createSprite(350,550,20,20)
sh.addImage(shimg)
sh.scale=0.22
sh.visible=false
bg2.velocityY=6
bg2.y=bg2.height/2

}


function draw() {
 
  background(0);
 if(keyDown("space")){
	 gamestate="play"
 }
 if(gamestate==="play"){
bg2.visible=true
sh.visible=true
if(bg2.y>600){
  bg2.y=bg2.height/4
}
if(keyDown("left")){
  sh.x=sh.x-3
}
if(keyDown("right")){
  sh.x=sh.x+3
}
 }
  drawSprites();
 if(gamestate==="wel"){ textSize(30)
  stroke("dark blue")
  text("Super Hero On The Run",250,90)
  text("Press SPACE to start",250,300)
 }
 
}



