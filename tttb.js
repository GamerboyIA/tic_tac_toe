//determines current turn
var turn = 'X';
//turns: list of all turns taken
var turns = Array();


var cellMap = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

function update_turn() {
  firstMove = false; 
  if (turn == 'X') {
    turn = 'O';
  } else {
    turn = 'X';
   }

document.getElementById("turn").innerHTML = turn;

function getCellData() {
  return [
	 [null, null, null ],
	 [null, null, null ],
	 [null, null, null ]	
];
}


//Logic for undo button and the various visual and logic it interacts with
function undo() {
	if (turns.length == 0) {
	   console.log('No turns');
	return;
	}
	
	let lastSquare = turns.pop();
	
   console.log('Last square was ' + lastSquare);
     
   	      document.getElementById("lastMove").innerHTML = turns[turns.length -1];
// resets visual board information back to blank
	document.getElementById(lastSquare).innerHTML = '';
	//coordinate system
/*	let cellRow = Number(lastSquare[1]);
	let cellCol = Number(lastSquare[2]);*/
	let squareRow = Number(lastSquare[3]);
	let squareCol = Number(lastSquare[4]);
   
   	// update data resets data structure information
    (boardData[cellRow][cellCol])[squareRow][squareCol] = null;
    console.log(boardData);
	
	
	update_turn();
	//updates last move box and ensures that the box 
	//displays correct value even when set back to turn 0
if (document.getElementById("lastMove").innerHTML == "undefined") {
 document.getElementById("lastMove").innerHTML = "---";

}
	}

function takeTurn(squareId) {
let winner = getGameWinner();
	console.log('winner is ' + winner);

   console.log('It is ' + turn + ' turn. ' + squareId + ' chosen');
	
  // document.getElementById("lastMove").innerHMTL == squareId;  
   let square = document.getElementById(squareId);
   if (square.innerHTML.length > 0) {
   	  console.log('Nope');
      return;
   }

    
    if (turns.length > 0) {
      // VV this displays the last move on the board, after the first move
     // document.getElementById("lastMove").innerHTML = turns[turns.length -1];

      let lastSquare = turns[turns.length - 1];   	
      console.log('Last move was ' + lastSquare);
      let selectedCell = getCell(squareId);
      //logic to prevent move made outside of the cellOfPlay
      let cellOfPlay = getNextCell(lastSquare);
      if (cellOfPlay.indexOf(selectedCell) == -1) {
		   console.log('Nope, Must choose square in ' + cellOfPlay);
		   return;
		}    
    }
    
    //updates turn list 
   turns.push(squareId);
   console.log(turns);
   console.log('you selected cell ' + getCell(squareId));
   console.log('next cell is ' + getNextCell(squareId));

   if (turns.length !== 0) {
     document.getElementById("lastMove").innerHTML = turns[turns.length -1];
    } else { 
     document.getElementById("lastMove").innerHTML == "---";

   }
   }
