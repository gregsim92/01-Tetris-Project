// var canvas = document.getElementById('gameBoard');
					// var ctx = canvas.getContext('2d');

// 					var currentBlock;

// 					function mainEvent(){
// 						//check to see if there is a current block
// 							// if not, make one
// 							//else, move the current block down

// 					}


// 					// var first = new Tetromino(types[0]);

// 					// first.draw(ctx);

// 					//moving a square
					$('body').on('keydown', function(e){

						switch(e.which){
						case 37: //left
							gameBoard.moveFirstLeft();
							break;
						case 39: //right
							gameBoard.moveFirstRight();
							break;
						case 40: //down
							gameBoard.lowerFirst();
							break;
						case 38: //fall down
							console.log('bottom');
							//set floor first!!!
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