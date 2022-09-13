var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  path=loadAnimation("path.png");

  //loadAnimation de boy (niño)
  jake_running=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");

 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path=createSprites(405,200,100,400);

//agregar imagen de path
path.addAnimation("fondo",path);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.Y=path.widch/2
path.velocityY=-4;
path.scale=1.2;

//crear sprite de boy (niño)
boy=createSprite(202,160,25,55);
boy.addAnimation("running"jake_running);
//agregar animación para boy
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(205,200,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible=false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,200,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  // boy moviéndose en el eje X con el mouse
  if(keyDown("MOouseX")&&path.y>=200){
    path.velocityY=4;
  }

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
   boy.collide(rightBoundary,leftBoundary)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
