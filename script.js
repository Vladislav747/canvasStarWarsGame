const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
	x: 200,
	y: 200,
	width: 38, // to be calculated
	height: 48, // to be calculated
	frameX: 0,
	frameY: 0,
	speed: 9, // Скорость движения
	moving: false
};

const playerSprite = new Image();
playerSprite.src = "assets/ironman.png";

const background = new Image();
background.src = "assets/background.png"

function drawSprite(img, sX, sY, sW,sH, dX, dY, dW, dH){
	ctx.drawImage(img, sX, sY, sW,sH, dX, dY, dW, dH);
}

function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);    
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
	movePlayer();
	requestAnimationFrame(animate);
}
 animate();

 window.addEventListener("keydown", function(e){
	 //Классное назначение ключа - потому что удобно проверять через if потом ключи
	 //ArrowUp, ArrowLeft
	 keys[e.key] = true;
 });
 window.addEventListener("keyup", function(e){
	 delete keys[e.key];
 });

 /**
  * Двигаем персонаж
  */
 function movePlayer() { 
	 if(keys["ArrowUp"] && player.y > 100 ){
		 player.y -= player.speed;
		 player.frameY = 3;
	 }
	 if(keys["ArrowDown"] && player.y< 430){
		player.y += player.speed;
		player.frameY = 0;
	}

	if(keys["ArrowRight"] && player.x< 730){
		player.x += player.speed;
		player.frameY = 2;
	}

	if(keys["ArrowLeft"] && player.x> 100){
		player.x -= player.speed;
		player.frameY = 1;
	}
  }
