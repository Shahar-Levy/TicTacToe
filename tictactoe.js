
let whosTurn = 1;
let gameOver = false;
const messageDiv = document.getElementById('message');
const squares = document.getElementsByClassName('square');
let player1Squares = [];
let player2Squares = [];
const winningCombos = [
    ['A1','B1','C1'], //ROW 1
    ['A2','B2','C2'], //ROW 2
    ['A3','B3','C3'], //ROW 3
    ['A1','A2','A3'], //COLUMN 1
    ['B1','B2','B3'], //COLUMN 2
    ['C1','C2','C3'], //COLUMN 3
    ['A1','B2','C3'], //DIAG 1
    ['A3','B2','C1'] //DIAG 2
];

for(let i = 0; i < squares.length; i++){ // put listeners on every button
	squares[i].addEventListener('click', function(event){
		markSquare(squares[i]);
	})
}

function markSquare(clickedSquare){

	if(gameOver == false){
		console.log("User clicked a square");

		if(clickedSquare.innerHTML !== '-'){
			messageDiv.innerHTML = 'That square is taken.';
		}else if(whosTurn === 1){  //player one's turn
			clickedSquare.innerHTML = 'X';
			whosTurn = 2;
			player1Squares.push(clickedSquare.id);
			checkWin(1,player1Squares);

		}else{ //player two's turn
			clickedSquare.innerHTML = 'O';
			whosTurn = 1;
			player2Squares.push(clickedSquare.id);
			checkWin(2,player2Squares);
		}
	}
}

function checkWin(whoJustMarked, playerSquares){
	//outer loop = row, check each winning combination
	for(let i = 0; i < winningCombos.length; i++){
		let squareCount = 0;
		//inner loop = column, check each square inside winning combination
		for(let j = 0; j < winningCombos[i].length; j++){
			const currentWinningSquare = winningCombos[i][j];
			if(playerSquares.includes(currentWinningSquare)){
				squareCount++;
			}
		}
		if(squareCount === 3){
			//user won
			messageDiv.innerHTML = `Player ${whoJustMarked} has won the game!`;
			gameOver = true;
			for(let w = 0; w < winningCombos[i].length; w++){
				const thisSquare = document.getElementById(
					winningCombos[i][w]);
				thisSquare.className += ' winning-square';
			}
		}
	}



}