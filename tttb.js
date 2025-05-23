//determines current turn
var turn = 'X';
//turns: list of all turns taken
var turns = Array();
var boardData = getCellData();


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
//Bug causing class to not be removed after a certain number of moves
	for (let row=0; row<2; row++) {
		for (let col=0; col<2; col++) {
			let square = document.getElementById('S'+row+col);
			square.classList.remove('OturnClass');
			square.classList.remove('XturnClass');
		}
	}
		
  if (turns.length == 6) {
     let markedSquaree = document.getElementById(turns[0]);
     let squareRow = Number(markedSquaree[1]);
     let squareCol = Number(markedSquaree[2]);
	    
	console.log("turn = " + turn);
	console.log("markedSquaree = " + markedSquaree);
	  //TurnClass color designation
    if (markedSquaree.innerHTML == "X") {
     markedSquaree.classList.add("XturnClass");
    } else if (markedSquaree.innerHTML == "O") {
     markedSquaree.classList.add("OturnClass");
      }
  }  
  
}

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
	document.getElementById(lastSquare).innerHTML = '';
	//coordinate system
	let squareRow = Number(lastSquare[1]);
	let squareCol = Number(lastSquare[2]);
	
	    boardData[squareRow][squareCol] = null;
    console.log(boardData);
   
   	// update data resets data structure information
	
	
	update_turn();
	//updates last move box and ensures that the box 
	//displays correct value even when set back to turn 0
if (document.getElementById("lastMove").innerHTML == "undefined") {
 document.getElementById("lastMove").innerHTML = "---";

	}
}

function takeTurn(squareId) {
let winner = getWinner(boardData);
	console.log('winner is ' + winner);

if(winner !== null){
return;
  }

//console.log("turnColor = " turnColor);
console.log("turns = " + turns);

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
    }
    
    if (turns.length==6) {
        let markedSquare = turns.shift();	
		let squareRow = Number(markedSquare[1]);
		let squareCol = Number(markedSquare[2]);
        document.getElementById(markedSquare).innerHTML = null;
	    boardData[squareRow][squareCol] = null;  	       
    }
    
    //updates turn list 
   turns.push(squareId);
   console.log("--------------- END// TURN LENGTH LOGIC ------------------");
   console.log("Turns");
   console.log(turns);
//   console.log('you selected cell ' + getCell(squareId));
//   console.log('next cell is ' + getNextCell(squareId));

   if (turns.length !== 0) {
     document.getElementById("lastMove").innerHTML = turns[turns.length -1];
    } else { 
     document.getElementById("lastMove").innerHTML == "---";

  	 }
   square.innerHTML = turn;
   //updates data structure with current move
	
	let squareRow = Number(squareId[1]);
	let squareCol = Number(squareId[2]);
   
   	// update data
    boardData[squareRow][squareCol] = turn;  	 
  	 console.log(boardData);


 update_turn();
	
	winner = getWinner(boardData);
	console.log('winner is ' + winner);

if(winner !== null){
alert(winner + " Wins!");
  }


}
function resetGame(){
while(turns.length>0){
undo();
  }
  turn = 'X';
  document.getElementById("turn").innerHTML = turn;
  document.getElementById("lastMove").innerHTML = "---";
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
