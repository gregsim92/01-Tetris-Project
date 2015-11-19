var types = ["square", "line", "J", "L", "T", "S", "Z"];


var Tetromino = function (shape){
	this.blocks = [];
	this.shape = shape;

	// making a square
	switch (shape){
	case "square":
		this.blocks.push(new Block(125,-25, 'yellow'));
		this.blocks.push(new Block(125,-50, 'yellow'));
		this.blocks.push(new Block(100,-25, 'yellow'));
		this.blocks.push(new Block(100,-50, 'yellow'));
		break;
	case "line":
		this.blocks.push(new Block(100,-25, 'orange'));
		this.blocks.push(new Block(100,-50, 'orange'));
		this.blocks.push(new Block(100,-75, 'orange'));
		this.blocks.push(new Block(100,-100, 'orange'));
		break;
	case "J":
		this.blocks.push(new Block(100,-75, 'grey'));
		this.blocks.push(new Block(125,-75, 'grey'));
		this.blocks.push(new Block(125,-50, 'grey'));
		this.blocks.push(new Block(125,-25, 'grey'));
		break;
	case "L":
		this.blocks.push(new Block(100,-75, 'pink'));
		this.blocks.push(new Block(125,-75, 'pink'));
		this.blocks.push(new Block(100,-50, 'pink'));
		this.blocks.push(new Block(100,-25, 'pink'));
		break;
	case "T":
		this.blocks.push(new Block(100,-75, 'cyan'));
		this.blocks.push(new Block(100,-50, 'cyan'));
		this.blocks.push(new Block(125,-50, 'cyan'));
		this.blocks.push(new Block(100,-25, 'cyan'));
		break;
	case "S":
		this.blocks.push(new Block(100,-75, 'green'));
		this.blocks.push(new Block(100,-50, 'green'));
		this.blocks.push(new Block(125,-50, 'green'));
		this.blocks.push(new Block(125,-25, 'green'));
		break;
	case "Z":
		this.blocks.push(new Block(100,-75, 'red'));
		this.blocks.push(new Block(125,-50, 'red'));
		this.blocks.push(new Block(100,-50, 'red'));
		this.blocks.push(new Block(100,-25, 'red'));
		break;
	}

}

Tetromino.prototype.draw = function(context) {
		// create 4 blocks, put them into the board
		for (var i = 0; i < this.blocks.length; i++){
			this.blocks[i].draw(context);
		}

};

Tetromino.prototype.addBlock = function() {
	
};

Tetromino.prototype.dropPiece = function() {
	
	for (var j = 0; j < this.blocks.length; j++){
		this.blocks[j].moveDown();
	}
};

Tetromino.prototype.movePieceLeft = function() {
	
	for (var j = 0; j < this.blocks.length; j++){
		this.blocks[j].moveLeft();
	}
	return
};

Tetromino.prototype.movePieceRight = function() {
	
	if (this.x >=250){
		console.log('bondary right');
	} else {
	for (var j = 0; j < this.blocks.length; j++){
		this.blocks[j].moveRight();
		}
	}
};

Tetromino.prototype.boundaryLeft = function() {
	var outLeft = false;
	if (this.x < 0){
		console.log('Out of Bounds Left!');
		return true;
	}
};

Tetromino.prototype.boundaryRight = function() {
	var outRight = false;
	if (this.x > 250){
		console.log('Out of Bounds Right!');
		return true;
	}
};

Tetromino.prototype.boundaryFloor = function() {
	var outBottom = false;
	if (this.y > 500){
		console.log('Fell through the floor!');
		return true;
	} else {
		console.log('play area');
	}
};

Tetromino.prototype.Boundaries = function() {
	this.first.boundaryFloor();
	this.first.boundaryLeft();
	this.first.boundaryRight();
};

Tetromino.prototype.checkBoundary = function() {

	console.log(this);
	window.setInterval(this.Boundaries, 900);
};


var Block = function (x, y, color){
	this.x = x;
	this.y = y;
	this.color = color;
}
Block.prototype.draw = function(context) {


	  context.beginPath();
      context.rect(this.x, this.y, 25, 25);
      context.fillStyle = this.color;
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
};

Block.prototype.moveLeft = function() {
	this.x -= 25;
};

Block.prototype.moveRight = function() {
	this.x += 25;
};

Block.prototype.moveDown = function() {
	this.y +=25;
};

