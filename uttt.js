var turn = 'X';
var turns = Array();

function update_turn() {
  firstMove = false; 
  if (turn == 'X') {
    turn = 'O';
  } else {
    turn = 'X';
   }
   document.getElementById("turn").innerHTML = turn;

   var table = document.getElementById('uttt');
   
	if (turns.length > 0) {
	   var lastSquare = turns[turns.length - 1];   	
	   var cellOfPlay = getNextCell(lastSquare);
	   
	   table.className = 'cell' + cellOfPlay;
	} else {
	   table.className = '';
	}
   
}

function undo() {
	if (turns.length == 0) {
	   console.log('No turns');
	return;
	}
	var lastSquare = turns.pop();
	
   console.log('Last square was ' + lastSquare);
     
   
	document.getElementById(lastSquare).innerHTML = '';
	update_turn();
	
}

function getCell(squareId) {
	var row = Number(squareId[1]);
	var col = Number(squareId[3]);
	
	if (row < 4 && col < 4) {
		return 1;
	}

	if (row < 4 && col > 3 && col < 7) {
		return 2;
	}

	if (row < 4 && col > 6) {
		return 3;
	}
	
	if (row > 3 && row < 7 && col < 4) {
		return 4;
	}

	if (row > 3 && row < 7 && col > 3 && col < 7) {
		return 5;
	}
	
	if (row > 3 && row < 7 && col > 6) {
		return 6;
	}

	if (row > 6 && col < 4) {
		return 7;
	}

	if (row > 6 && col > 3 && col < 7) {
		return 8;
	}
	
	if (row > 6 && col > 6) {
		return 9;
	}	
}

function getNextCell(squareId) {
	var row = Number(squareId[1]);
	var col = Number(squareId[3]);

	if (row == 1 || row == 4 || row == 7) {
		cellRow = 1;
	}	

	if (row == 2 || row == 5 || row == 8) {
		cellRow = 2;
	}	

	if (row == 3 || row == 6 || row == 9) {
		cellRow = 3;
	}	

	if (col == 1 || col == 4 || col == 7) {
		cellCol = 1;
	}	

	if (col == 2 || col == 5 || col == 8) {
		cellCol = 2;
	}	

	if (col == 3 || col == 6 || col == 9) {
		cellCol = 3;
	}	

	if (cellRow == 1 && cellCol == 1) {
		return 1;
	}

	if (cellRow == 1 && cellCol == 2) {
		return 2;
	}

	if (cellRow == 1 && cellCol == 3) {
		return 3;
	}
	
	if (cellRow == 2 && cellCol == 1) {
		return 4;
	}

	if (cellRow == 2 && cellCol == 2) {
		return 5;
	}

	if (cellRow == 2 && cellCol == 3) {
		return 6;
	}

	if (cellRow == 3 && cellCol == 1) {
		return 7;
	}

	if (cellRow == 3 && cellCol == 2) {
		return 8;
	}

	if (cellRow == 3 && cellCol == 3) {
		return 9;
	}
}



function takeTurn(squareId) {
   console.log('It is ' + turn + ' turn. ' + squareId + ' chosen');
	
     
   var square = document.getElementById(squareId);
   if (square.innerHTML.length > 0) {
   		console.log('Nope');
      return;
   }

    
    if (turns.length > 0) {
      var lastSquare = turns[turns.length - 1];   	
      console.log('Last move was ' + lastSquare);
      var selectedCell = getCell(squareId);
      var cellOfPlay = getNextCell(lastSquare);
		if (selectedCell != cellOfPlay) {
		   console.log('Must choose square in ' + cellOfPlay);
		   return;
		}    
    }
        
   turns.push(squareId);
   console.log(turns);
   console.log('you selected cell ' + getCell(squareId));
   console.log('next cell is ' + getNextCell(squareId));
  
  square.innerHTML = turn;
  update_turn();
}
