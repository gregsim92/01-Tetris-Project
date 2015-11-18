var Board = function (tetromino) {
	this.canvas = document.getElementById('gameBoard');
	this.canvas.width = 250;
	this.canvas.height = 500;
	this.ctx = this.canvas.getContext('2d');

}
Board.prototype.addNewTetromino = function() {
			this.first = new Tetromino(types[0]);
			this.first.draw(this.ctx);
};
Board.prototype.lowerFirst = function() {
	this.first.tetrominoFall();
	this.first.draw(this.ctx);
};


// Board.prototype.render = function() {
// 	// body...
// 	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	
// 	for (var e = 0; n < entities.length; e++){
// 			this.entities[n].
// 	}
	
	//loop through, call the draw function of every entity

// };

