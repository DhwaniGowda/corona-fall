var speed,weight,thckness,bullet,wall,damage;

function setup()
{
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 20);
  bullet.velocityX = 10;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, 30, 300);
  wall.shapeColor = "skyblue";
  
  speed = Math.floor(random(223,321));
  weight = Math.floor(random(30,52));
  thickness = Math.floor(random(22,83));
}

function draw() 
{
  background("black");
  drawSprites(); 
  
  fill("black");
  textSize(25);
  text("BULLETS AND CARS",220,50);
  
  collide(bullet,wall);

  textSize(15);
  text("Damage is : < 10 === > Wall is effective against Bullets",30,340);
  text("Damage is : < 10 === > Wall is not effective against Bullets",30,360)
  fill ("pink");
  textSize(25);
  text("DAMAGE IS : Math.floor(damage),30,300);



}
function damages()
{
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  console.log(damage);

  if (damage < 10)
  {
    bullet.shapeColor = "green";
  }
  else
  {
    bullet.shapeColor = "red";
  }
}
function collide(object1,object2)
{
  if(object1.x-object2.x === object1.x/2 + object1.x/2 - 10)
  {
    object1.velocityX = 0;
    object2.velocityX = 0;
    damages();
  }
}