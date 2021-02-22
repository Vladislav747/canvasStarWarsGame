const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
	x: 0,
	y: 0,
	width: 40, // to be calculated
	height: 50, // to be calculated
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
	drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0, player.width, player.height)
	requestAnimationFrame(animate);
}
 animate(); 
