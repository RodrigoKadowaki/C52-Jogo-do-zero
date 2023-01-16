var spaceship, spaceshipImg, bullet, bulletImg;
var enemy, enemyImg;
var backgroundImg, backgroundSpr;
var score = 0;
var life = 3;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceship = createSprite(width / 2, height - 200, 70, 70);
  //adicionar imagem
  //ajustar scale
  bullet = createSprite();
}

function draw() {
  background("white");
  if (keyDown(UP_ARROW)) {
    spaceship.y -= 20;
  }
  if (keyDown(LEFT_ARROW)) {
    spaceship.x -= 20;
  }
  if (keyDown(DOWN_ARROW)) {
    spaceship.y += 20;
  }
  if (keyDown(RIGHT_ARROW)) {
    spaceship.x += 20;
  }

  drawSprites();
}

function spawnObstaclesTop() {
  if (World.frameCount % 60 === 0) {
    obstacleTop = createSprite(400, 50, 40, 50);

    obstacleTop.addImage(obsTop1);

    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    obstacleTop.y = Math.round(random(10, 100));

    var rand = Math.round(random(1, 2, 3, 4, 5));

    switch (rand) {
      case 1:
        obstacleTop.addImage(obsTop1);
        break;
      case 2:
        obstacleTop.addImage(obsTop2);
        break;
      default:
        break;
    }
  }
}
