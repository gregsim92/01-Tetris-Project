var types = ["square", "line", "J", "L", "T", "S", "Z"];


var Tetromino = function (shape){
	this.blocks = [];
	this.shape = shape;

	// making a square
	switch (shape){
	case "square":
		this.blocks.push(new Block(0,0, 'yellow'));
		this.blocks.push(new Block(25,0, 'yellow'));
		this.blocks.push(new Block(0,25, 'yellow'));
		this.blocks.push(new Block(25,25, 'yellow'));
		break;
	case "line":
		this.blocks.push(new Block(0,0, 'orange'));
		this.blocks.push(new Block(0,25, 'orange'));
		this.blocks.push(new Block(0,50, 'orange'));
		this.blocks.push(new Block(0,75, 'orange'));
		break;
	case "J":
		this.blocks.push(new Block(0,0, 'grey'));
		this.blocks.push(new Block(25,0, 'grey'));
		this.blocks.push(new Block(25,25, 'grey'));
		this.blocks.push(new Block(25,50, 'grey'));
		break;
	case "L":
		this.blocks.push(new Block(0,0, 'pink'));
		this.blocks.push(new Block(25,0, 'pink'));
		this.blocks.push(new Block(0,25, 'pink'));
		this.blocks.push(new Block(0,50, 'pink'));
		break;
	case "T":
		this.blocks.push(new Block(0,0, 'cyan'));
		this.blocks.push(new Block(0,25, 'cyan'));
		this.blocks.push(new Block(25,25, 'cyan'));
		this.blocks.push(new Block(0,50, 'cyan'));
		break;
	case "S":
		this.blocks.push(new Block(0,0, 'green'));
		this.blocks.push(new Block(0,25, 'green'));
		this.blocks.push(new Block(25,25, 'green'));
		this.blocks.push(new Block(25,50, 'green'));
		break;
	case "Z":
		this.blocks.push(new Block(25,0, 'red'));
		this.blocks.push(new Block(25,25, 'red'));
		this.blocks.push(new Block(0,25, 'red'));
		this.blocks.push(new Block(0,50, 'red'));
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

Tetromino.prototype.tetrominoFall = function() {
	
	for (var j = 0; j < this.blocks.length; j++){
		this.blocks[j].moveDown();
	}
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