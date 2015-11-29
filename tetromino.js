var types = ["square", "line", "J", "L", "T", "S", "Z"];


var Tetromino = function (shape){
	this.blocks = [];
	this.shape = shape;
	this.position = 0;

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
		this.blocks.push(new Block(125,-75, 'red'));
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

Tetromino.prototype.collidesWith = function(x, y) {
	for (var j = 0; j < this.blocks.length; j++){
		var currentMyBlock = this.blocks[j];
			
			if (currentMyBlock.collidesWith(x,y)){
				return true;
			}
	}
	return false;
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
	
	if(!this.canMove(direction)){
		return;
	}
	if (direction == 'left'){
		
		for (var j = 0; j < this.blocks.length; j++){
			
			this.blocks[j].move('left', board);
		
		}
	} else if  (direction == 'right'){
			
		for (var j = 0; j < this.blocks.length; j++){
			
			this.blocks[j].move('right', board);

		}
	} else if (direction =='down'){
	
		for (var j = 0; j < this.blocks.length; j++){
			
			this.blocks[j].move('down', board);

		}
	}

};

Tetromino.prototype.rotateTetromino = function() {

	if (this.shape === "line") {

		if (this.position === 0){
			
			this.position += 1;
			this.blocks[0].x -= 25;
			this.blocks[0].y -= 25;
			this.blocks[2].x += 25;
			this.blocks[2].y += 25;
			this.blocks[3].x += 50;
			this.blocks[3].y += 50;
			
		} else if (this.position === 1){
			
			this.position -= 1;
			this.blocks[0].x += 25;
			this.blocks[0].y += 25;
			this.blocks[2].x -= 25;
			this.blocks[2].y -= 25;
			this.blocks[3].x -= 50;
			this.blocks[3].y -= 50;		

		}
	} else if (this.shape === "J"){
		if (this.position === 0){
			this.position += 1;
			this.blocks[0].x += 50;
			this.blocks[1].x += 25;
			this.blocks[1].y += 25;
			this.blocks[3].x -= 25;
			this.blocks[3].y -= 25;
		} else if (this.position === 1){
			this.position += 1;
			this.blocks[0].y += 50;
			this.blocks[1].x -= 25; 
			this.blocks[1].y += 25;
			this.blocks[3].x += 25; 
			this.blocks[3].y -= 25;
		} else if (this.position === 2){
			this.position += 1;
			this.blocks[0].x -= 50;
			this.blocks[1].x -= 25;
			this.blocks[1].y -= 25;
			this.blocks[3].x += 25;
			this.blocks[3].y += 25;
		} else if (this.position === 3){
			this.position = 0;
			this.blocks[0].y -= 50;
			this.blocks[1].x += 25;
			this.blocks[1].y -= 25;
			this.blocks[3].x -= 25;
			this.blocks[3].y += 25;

		}
	} else if (this.shape === "L"){
		if (this.position === 0){
			this.position += 1;
			this.blocks[0].x += 25;
			this.blocks[0].y += 25;
			this.blocks[1].y += 50;
			this.blocks[3].x -= 25;
			this.blocks[3].y -= 25;
		} else if (this.position === 1){
			this.position += 1;
			this.blocks[0].x -= 25; 
			this.blocks[0].y += 25;
			this.blocks[1].x -= 50;
			this.blocks[3].x += 25; 
			this.blocks[3].y -= 25;
		} else if (this.position === 2){
			this.position += 1;
			this.blocks[0].x -= 25;
			this.blocks[0].y -= 25;
			this.blocks[1].y -= 50;
			this.blocks[3].x += 25;
			this.blocks[3].y += 25;
		} else if (this.position === 3){
			this.position = 0;
			this.blocks[0].x += 25;
			this.blocks[0].y -= 25;
			this.blocks[1].x += 50;
			this.blocks[3].x -= 25;
			this.blocks[3].y += 25;
		}
	} else if (this.shape === "T"){
		if (this.position === 0){
			this.position += 1;
			this.blocks[0].x += 25;
			this.blocks[0].y += 25;
			this.blocks[2].x -= 25;
			this.blocks[2].y += 25;
			this.blocks[3].x -= 25;
			this.blocks[3].y -= 25;
		} else if (this.position === 1){
			this.position += 1;
			this.blocks[0].x -= 25;
			this.blocks[0].y += 25;
			this.blocks[2].x -= 25;
			this.blocks[2].y -= 25;
			this.blocks[3].x += 25;
			this.blocks[3].y -= 25;
		} else if (this.position === 2){
			this.position += 1;
			this.blocks[0].x -= 25;
			this.blocks[0].y -= 25;
			this.blocks[2].x += 25;
			this.blocks[2].y -= 25;
			this.blocks[3].x += 25;
			this.blocks[3].y += 25; 
		} else if (this.position === 3){
			this.position = 0;
			this.blocks[0].x += 25;
			this.blocks[0].y -= 25;
			this.blocks[2].x += 25;
			this.blocks[2].y += 25;
			this.blocks[3].x -= 25;
			this.blocks[3].y += 25; 
		} 
	} else if (this.shape === "S"){
		if (this.position === 0){
			
			this.position += 1;
			this.blocks[0].x += 25; 
			this.blocks[0].y += 25;
			this.blocks[2].x -= 25;
			this.blocks[2].y += 25;
			this.blocks[3].x -= 50;

		} else if (this.position === 1){
			this.position = 0;
			this.blocks[0].x -= 25; 
			this.blocks[0].y -= 25;
			this.blocks[2].x += 25;
			this.blocks[2].y -= 25;
			this.blocks[3].x += 50;
		}
	} else if (this.shape === "Z"){
		if (this.position === 0){
			
			this.position += 1;
			this.blocks[0].x -= 25; 
			this.blocks[0].y += 25;
			this.blocks[2].x += 25;
			this.blocks[2].y += 25;
			this.blocks[3].x += 50;
		} else if (this.position === 1){
			this.position = 0;
			this.blocks[0].x += 25; 
			this.blocks[0].y -= 25;
			this.blocks[2].x -= 25;
			this.blocks[2].y -= 25;
			this.blocks[3].x -= 50;			
		}
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

	return gameBoard.collisionDetect(proposedMove.x, proposedMove.y);

};

Block.prototype.collidesWith = function(x,y) {
	
	return (this.x === x && this.y === y);
};


