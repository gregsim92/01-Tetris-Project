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

Tetromino.prototype.movePieceRight = function() {

	for (var j = 0; j < this.blocks.length; j++){
		this.blocks[j].moveRight();
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







Tetromino.prototype.move = function(direction, board) {
	console.log('move');

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

	if (board.borderDetect(proposedX, proposedY)){
		this.x = proposedX;
		this.y = proposedY;

		return true;

	} else {

		return false;
	}

};

// Board.prototype.borderDetect = function(x,y) {

// 	if (x < 0 || x > this.canvas.width){
// 		return false;
// 	} 

// 	if (y > this.canvas.height){
// 		return false;
// 	}
// 	return true;
// };


