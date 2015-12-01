var Board = function () {
	this.canvas = document.getElementById('gameBoard');
	this.canvas.width = 250;
	this.canvas.height = 500;
	this.ctx = this.canvas.getContext('2d');
	this.entities = [];
	this.frozenEntities = [];
	this.points = 10;
	this.level = 1;

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
		

	if (!this.currentBlock.canMove('down')){



		this.frozenEntities.push(this.currentBlock);
		this.addNewTetromino();
		this.points += 10;

		for (var x = this.canvas.width; x > 0; x -= 25){
			if (this.checkCeiling(x)){
				this.resetBoard();
				window.alert("GAME OVER");
			}
		}

		for (var y = this.canvas.height; y > 0; y -= 25){
			if (this.checkRow(y)){
				this.deleteRow(y);
			}
		}
	}
	
	this.currentBlock.move('down', gameBoard);
	this.draw();
};

Board.prototype.setBlocksDown = function() {

	for (var i = 0; i < this.frozenEntities.length; i++){
		for (var j = 0; j < this.frozenEntities[i].blocks.length; j++){


			if (this.frozenEntities[i].blocks[j].canMove('down')){
				this.frozenEntities[i].blocks[j].move('down');
			}

		}
	}
};

Board.prototype.updateBoard = function() {
	//set a clear interval
	
	clearInterval(this.startScroll);
	this.startScroll = setInterval(this.boardScroll.bind(this), 900);
	

};

Board.prototype.increaseLevel = function() {

	if (this.points > 100){
		this.points = 0;
		this.level ++;
	}
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

Board.prototype.checkCeiling = function(x) {
	var columnFilled = false;
	var blockCount = 0;

	for (var i = 0; i < this.frozenEntities.length; i++){
		for (var j = 0; j < this.frozenEntities[i].blocks.length; j++){


			if (this.frozenEntities[i].blocks[j].x === x){
				blockCount += 1;
			}

			if (blockCount >= 20){
				console.log('game over');
				return true;
			}
		}
	}
};

Board.prototype.checkRow = function(y) {
	var rowFilled = false;
	var blockCount = 0;


	for (var i = 0; i < this.frozenEntities.length; i++){
		for (var j = 0; j < this.frozenEntities[i].blocks.length; j++){


			if (this.frozenEntities[i].blocks[j].y === y){
				blockCount += 1;
			}

			if (blockCount === 10){
				console.log('fill');
				return true;
			}
		}
	}
};

Board.prototype.deleteRow = function(y) {

	for (var i = 0; i < this.frozenEntities.length; i++){
		this.frozenEntities[i].blocks = filter(this.frozenEntities[i].blocks, function(block){
			return block.y !== y;
		});

	}
		this.setBlocksDown();
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


var filter = function(array, callbackFunction) {
	//filter the completed row into a new array so it can be removed at one time.
	var newArr = [];


	for (var i = 0; i < array.length; i++){
		var shouldBeInNewArray = callbackFunction(array[i]);

		if (shouldBeInNewArray){
			newArr.push(array[i]);
		}
	}
	return newArr;
};



