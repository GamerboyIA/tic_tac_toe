var turn = 'X';
var lastSquare;

function update_turn() {
  if (turn == 'X') {
    turn = 'O';
  } else {
    turn = 'X';
   }
   document.getElementById("turn").innerHTML = turn;
}


function undo() {
   console.log('Last square was ' + lastSquare);
   if (!lastSquare) {
   		return;
   }	   
   
document.getElementById(lastSquare).innerHTML = '';
update_turn();

}

var lastSquare;

function takeTurn(squareId) {

   console.log('It is ' + turn + ' turn. ' + squareId + ' chosen');
   lastSquare = squareId;
   
   var square = document.getElementById(squareId);
   
   if (square.innerHTML.length > 0) {
   console.log('Nope');
      return;
   }
   
  square.innerHTML = turn;
  update_turn();
}
