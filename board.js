var Board = function () {
	this.canvas = document.getElementById('gameBoard');
	this.canvas.width = 250;
	this.canvas.height = 500;
	this.ctx = this.canvas.getContext('2d');

}
Board.prototype.addNewTetromino = function() {
	this.first = new Tetromino(types[0]);
	this.first.draw(this.ctx);
};

Board.prototype.draw = function() {
	
	this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
	this.first.draw(this.ctx);	
};


Board.prototype.updateBoard = function() {

	window.setInterval(this.lowerFirst.bind(this), 900);
};




Board.prototype.borderDetect = function(x,y) {

	if (x < 0 || x >= this.canvas.width){
		return false;
	} 

	if (y >= this.canvas.height){
		return false;
	}
	return true;
};

Board.prototype.resetBoard = function() {	
	
	//still needs to reset piece position
	
	this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
	console.log('board reset');
};

Board.prototype.startNewGame = function() {

	this.resetBoard();
	this.updateBoard();
};




