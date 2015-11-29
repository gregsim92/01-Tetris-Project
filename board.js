var Board = function () {
	this.canvas = document.getElementById('gameBoard');
	this.canvas.width = 250;
	this.canvas.height = 500;
	this.ctx = this.canvas.getContext('2d');
	this.entities = [];
	this.frozenEntities = [];
}

Board.prototype.addNewTetromino = function() {

	this.currentBlock = new Tetromino(types[Math.floor(types.length * Math.random())]);
	this.entities.push(this.currentBlock);
	this.currentBlock.draw(this.ctx);
};



Board.prototype.draw = function() {
	
	this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

	for (var e = 0; e < this.entities.length; e++){
		this.entities[e].draw(this.ctx);
	}
};


Board.prototype.boardScroll = function() {
	
	this.currentBlock.move('down', gameBoard);
	this.draw();

	if (!this.currentBlock.canMove('down')){

		this.frozenEntities.push(this.currentBlock);
		this.addNewTetromino();
	}
};

Board.prototype.updateBoard = function() {
	//set a clear interval


	window.setInterval(this.boardScroll.bind(this), 900);
	


};




Board.prototype.collisionDetect = function(x,y) {

	for(var c = 0; c < this.frozenEntities.length; c++){

		if(this.frozenEntities[c].collidesWith(x,y)){

			return false;
		}
	}

	if (x < 0 || x >= this.canvas.width){
		return false;
	} 

	if (y >= this.canvas.height){
		return false;
	}
	return true;
};

Board.prototype.resetBoard = function() {	
	//resets the board to a base state

	this.entities = [];
	this.frozenEntities = [];
	this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
	console.log('board reset');
};

Board.prototype.startNewGame = function() {
//startNewGame called multiple times adds another setInterval for update board

	this.resetBoard();
	this.addNewTetromino();
	this.updateBoard();
};




