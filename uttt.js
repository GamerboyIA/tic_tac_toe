var turn = 'X';
var lastSquare;
var cellOfPlay;
function update_turn() {
  firstMove = false; 
  if (turn == 'X') {
    turn = 'O';
  } else {
    turn = 'X';
   }
   document.getElementById("turn").innerHTML = turn;
}
var lastSquare
var undoable = false

function undo() {
if (!undoable) { return; } 
   console.log('Last square was ' + lastSquare);
   if (!lastSquare) {
   	return;
   } 	   
   
document.getElementById(lastSquare).innerHTML = '';
update_turn();
undoable = false;
}

var lastSquare;
var cellOfPlay;
var firstMove = true; 
function takeTurn(squareId) {
   console.log("making a move!!!"); 

	// Check if we are working in the correct cell 
	if (!firstMove)  {
		valid_cell_row = Math.floor(Number(lastSquare[1])/3);
		valid_cell_col = Math.floor(Number(lastSquare[3])/3);
		console.log([valid_cell_row, valid_cell_col]);
	}
   
   console.log('It is ' + turn + ' turn. ' + squareId + ' chosen');
   lastSquare = squareId;
   
   var square = document.getElementById(squareId);
   
   if (square.innerHTML.length > 0) {
   console.log('Nope');
      return;
   }
  undoable = true; 
  square.innerHTML = turn;
  update_turn();
}


// 1) r1c1 - r3c3

// 2) r1c4 - r3c6

// 3) r1c7 - r3c9

// 4) r4c1 - r6c3

// 5) r4c4 - r6c6

// 6) r4c7 - r6c9

// 7) r7c1 - r9c3

// 8) r7c4 - r9c6

// 9) r7c7 - r9c9
