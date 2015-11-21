


$('body').on('keydown', function(e){

	switch(e.which){
	case 37: //left
		gameBoard.currentBlock.move('left', gameBoard);
		gameBoard.draw();
		break;
	case 39: //right
		gameBoard.currentBlock.move('right',gameBoard);
		gameBoard.draw();
		break;
	case 40: //down
		gameBoard.currentBlock.move('down', gameBoard);
		gameBoard.draw();
		break;
	case 32:
		console.log('rotate piece');
		break;	
	case 13:
		console.log('play/pause');
		gameBoard.startNewGame();
		
	default: return;
	}
	e.preventDefault();

});