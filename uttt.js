/* 
"Square" is the smallest (Small 1x1 [81])
"Cell" is the 9 3x3 grids containing 9 "Squares" (Middle 3x3 [9])
"Board" is the 9x9 grid containing 9 "Cells" and 81 "Squares" (Large 9x9 [1])
*/


var turn = 'X';
var turns = Array();

var boardData = [
	 [getCellData(), getCellData(), getCellData()],
	 [getCellData(), getCellData(), getCellData()],
   [getCellData(), getCellData(), getCellData()]
];

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

   let table = document.getElementById('uttt');
   
	if (turns.length > 0) {
	   let lastSquare = turns[turns.length - 1];   	
	   let cellOfPlay = getNextCell(lastSquare);
	   let classValue = '';
	   for (let i=0; i<cellOfPlay.length; i++) {
	   		classValue += 'cell' + cellOfPlay[i] + ' ';
	   }
	   table.className = classValue;
	} else {
	   table.className = '';
	}
   
}

function getCellData() {
  return [
	 [null, null, null ],
	 [null, null, null ],
	 [null, null, null ]	
];
}


function undo() {
	if (turns.length == 0) {
	   console.log('No turns');
	return;
	}
	
	let lastSquare = turns.pop();
	
   console.log('Last square was ' + lastSquare);
     
   	      document.getElementById("lastMove").innerHTML = turns[turns.length -1];

	document.getElementById(lastSquare).innerHTML = '';
	
	let cellRow = Number(lastSquare[1]);
	let cellCol = Number(lastSquare[2]);
	let squareRow = Number(lastSquare[3]);
	let squareCol = Number(lastSquare[4]);
   
   	// update data
    (boardData[cellRow][cellCol])[squareRow][squareCol] = null;
    console.log(boardData);
	
	
	update_turn();
	
if (document.getElementById("lastMove").innerHTML == "undefined") {
 document.getElementById("lastMove").innerHTML = "---";

}
	}

// Ranges for each cell
function getCell(squareId) {
	let row = Number(squareId[1]);
	let col = Number(squareId[2]);
	
	return cellMap[row][col];
}

// Which cell(s) will be next based on last played square
// S0000
function getNextCell(squareId) {
	let row = Number(squareId[3]);
	let col = Number(squareId[4]);
	
	if (getWinner(boardData[row][col])) {
		let openCells = [];
		for (let row=0; row <3; row++) {
		   for (let col=0; col<3; col++) {
			   let cell = boardData[row][col];
			   let winner = getWinner(cell);
			   if (winner == null) {
					openCells.push(cellMap[row][col]);
			   }
		   }		   
		}   
		
		return openCells;
	} else {
		cell = cellMap[row][col];
		return [ cell ];
	}
}

//              0123
// Square id is RXCY

//     Cell    Square
// S [y] [x]) [y] [x]
function takeTurn(squareId) {
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
      
      let cellOfPlay = getNextCell(lastSquare);
      if (cellOfPlay.indexOf(selectedCell) == -1) {
		   console.log('Nope, Must choose square in ' + cellOfPlay);
		   return;
		}    
    }
        
   turns.push(squareId);
   console.log(turns);
   console.log('you selected cell ' + getCell(squareId));
   console.log('next cell is ' + getNextCell(squareId));

   if (turns.length !== 0) {
     document.getElementById("lastMove").innerHTML = turns[turns.length -1];
    } else { 
     document.getElementById("lastMove").innerHTML == "---";

   }

   square.innerHTML = turn;
   
	let cellRow = Number(squareId[1]);
	let cellCol = Number(squareId[2]);
	let squareRow = Number(squareId[3]);
	let squareCol = Number(squareId[4]);
   
   	// update data
    (boardData[cellRow][cellCol])[squareRow][squareCol] = turn;
//     console.log(boardData);
    
	for (let row=0; row <3; row++) {
	   for (let col=0; col<3; col++) {
	       let cell = boardData[row][col];
	       let winner = getWinner(cell);
	       console.log('Cell ' + row + ', ' + col + ' winner is: ' + winner);
	   }
	}   
   
   update_turn();
}

function getWinner(cell) {
	// check for horizontal win
	for (let r=0; r<3; r++) {
		if (cell[r][0] === cell[r][1] && cell[r][0] === cell[r][2] && cell[r][0] !== null) {
      console.log('H');
			return cell[r][0];
		}
	}

  // check for vertical win
	for (let c=0; c<3; c++) {
		if (cell[0][c] === cell[1][c] && cell[0][c] === cell[2][c] && cell[0][c] !== null) {
      console.log('V');
			return cell[0][c];
		}
	}
  
  // check top left to bottom right diagaol
  if (cell[0][0] === cell[1][1] && cell[0][0] === cell[2][2] && cell[0][0] !== null) {
      console.log('D1');
    return cell[0][0];
  }
  
    // check bottom left to top right diagaol
  if (cell[2][0] === cell[1][1] && cell[2][0] === cell[0][2] && cell[2][0] !== null) {
      console.log('D2');
    return cell[2][0];
  }
  
  return null;
 }



