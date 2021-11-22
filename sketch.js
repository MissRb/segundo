
  var frectangulo, mrectangulo;

  function setup(){
    createCanvas(800,400);

    frectangulo=createSprite(400,200,50,90);
    frectangulo.shapeColor="blue";
    mrectangulo=createSprite(400,100,40,30);
    mrectangulo.shapeColor="blue";
  }
  function draw(){
    background("darkolivegreen");
    mrectangulo.x=World.mouseX;
    mrectangulo.y=World.mouseY;
if(mrectangulo.x-frectangulo.x > frectangulo.width/2+mrectangulo.width/2){
  mrectangulo.shapeColor="red";
  frectangulo.shapeColor="red";
}
else{
  mrectangulo.shapeColor="blue";
  frectangulo.shapeColor="blue";
}
    drawSprites();
  }