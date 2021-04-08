var car, wall;
var speed, weight;

function setup(){
  createCanvas(1600,400);

  car=cerateSprite(50,200,50,50);
  wall=cerateSprite (1200,200,60,100);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityx=speed;
}

function draw(){

background("black")
if(wall.x=car.x<(car.width+wall.width)/2){
  car.velocityx=0;
  var deformation=0.5*weight*speed*speed/22509
  if (deformation>180){
    car.shapeColor="red"
}
if (deformation<180 && deformation>100){
  car.shapeColor = "yellow"
}
if(deformation<100){
  car.shapColor="green";
}
}
  drawSprites();
}
