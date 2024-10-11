var turn = 'X';

function update_turn() {
  if (turn == 'X') {
    turn = 'O';
  } else {
    turn = 'X';
   }
   document.getElementById("turn").innerHTML = turn;
}

// Row 1 //

function r1c1() {
  document.getElementById("r1c1").innerHTML = turn;
  update_turn();
}

function r1c2() {
  document.getElementById("r1c2").innerHTML = turn;
  update_turn();
}

function r1c3() {
  document.getElementById("r1c3").innerHTML = turn;
  update_turn();
}

// Row 2 //

function r2c1() {
  document.getElementById("r2c1").innerHTML = turn;
  update_turn();
}

function r2c2() {
  document.getElementById("r2c2").innerHTML = turn;
  update_turn();
}

function r2c3() {
  document.getElementById("r2c3").innerHTML = turn;
  update_turn();
}

// Row 3 //

function r3c1() {
  document.getElementById("r3c1").innerHTML = turn;
  update_turn();
}

function r3c2() {
  document.getElementById("r3c2").innerHTML = turn;
  update_turn();
}

function r3c3() {
  document.getElementById("r3c3").innerHTML = turn;
  update_turn();
}


