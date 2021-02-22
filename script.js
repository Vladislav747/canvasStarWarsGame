const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
	x: 0,
	y: 0,
	width: 0, // to be calculated
	height: 0, // to be calculated
	frameX: 0,
	frameY: 0,
	speed: 9,
	moving: false
};

const playerSprite = new Image();