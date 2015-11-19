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
							console.log("left");
							gameBoard.moveFirstLeft();
							break;
						case 39: //right
							console.log("right");
							gameBoard.moveFirstRight();
							break;
						case 40: //down
							console.log("down");
							gameBoard.lowerFirst();
							break;
						case 38: //fall down
							console.log('bottom');
							//set floor first!!!
						default: return;
						}
						e.preventDefault();

					});