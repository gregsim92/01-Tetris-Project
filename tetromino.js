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

Tetromino.prototype.canMove = function(direction) {
	var noCollisionsDetected = true;

	for (var j = 0; j < this.blocks.length; j++){
		var currentBlock = this.blocks[j];
		noCollisionsDetected = noCollisionsDetected && currentBlock.canMove(direction);
	}

	return noCollisionsDetected;
};


Tetromino.prototype.move = function(direction, board) {
	console.log('move');
	
	if(!this.canMove(direction)){
		return;
	}
	if (direction == 'left'){
		
		for (var j = 0; j < this.blocks.length; j++){
			var didMoveLeft = this.blocks[j].move('left', board);

			// if (!didMoveLeft) {
			// 	for (var i = j; i>0; i--){
			// 		this.blocks[j].move('right',board);
			// 	}
			// }
		}
	} else if  (direction == 'right'){
			
		for (var j = 0; j < this.blocks.length; j++){
			var didMoveRight = this.blocks[j].move('right', board);
			// if (!this.blocks[j].move('right', board)){
			// 	for (var i = j; i>0; i--){
			// 		this.blocks[i].move('left',board);
			// 	}
			// }
		}
	} else if (direction =='down'){
	
		for (var j = 0; j < this.blocks.length; j++){
			var didMoveDown = this.blocks[j].move('down', board);

			// if (!this.blocks[j].move('down', board)){
			// 	for (var i = j; i>0; i--){
			// 		this.blocks[i].move('up',board);
			// 	}
			// }
		}
	}
					console.log('break');
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

Block.prototype.move = function(direction, board) {

	var proposedMove = this.proposedMove(direction);

			this.x = proposedMove.x;
			this.y = proposedMove.y;

};

Block.prototype.proposedMove = function(direction) {
			
	var proposedX = this.x;
	var proposedY = this.y;


	if (direction == 'left'){
		proposedX -= 25;
	} else if (direction == 'right') {
		proposedX += 25;
	} else if (direction == 'down'){
		proposedY += 25;
	} else if (direction == 'up'){
		proposedY -= 25;
	}

	return {x: proposedX,
			y: proposedY};
};

Block.prototype.canMove = function(direction) {

	var proposedMove = this.proposedMove(direction);

	return gameBoard.borderDetect(proposedMove.x, proposedMove.y);

};

// Board.prototype.borderDetect = function(x,y) {

// 	if (x < 0 || x >= this.canvas.width){
// 		return false;
// 	} 

// 	if (y >= this.canvas.height){
// 		return false;
// 	}
// 	return true;
// };


