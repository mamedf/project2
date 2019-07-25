var current_player = "O";

var board = [
  [document.getElementById("11"), document.getElementById("12"),document.getElementById("13")],
  [document.getElementById("21"),document.getElementById("22"),document.getElementById('23')],
  [document.getElementById("31"),document.getElementById("32"),document.getElementById("33")]
]
function checkrow(row){
  var x = 0;
  for (x = 0; x<3; x ++){
    if(board[x][x].innerText != current_player){
      return false;
  }
}


function checkcol(col){
  var x = 0
  for (x=0; x<3; x ++){
    if(board[x][col].innerText != current_player){
      return false;
    }
  }
  return true;
}
//   board[0][col].innerText === current_player && board[1][col].innerText === current_player && board[2]
// }
function checkdia(){
  board[0][0].innerTML === current_player &&
}
function checkwin(){
  var i = 0;
  for (i = 0; i<3; i++){
    if (checkcol(i) || checkrow(i){
      return true;
    }
  }
  return checkdia();
}

// }
function turn(){
  if(event.target.innerText === ""){
    event.target.innerText = current_player;
    if (checkwin()){
      document.body.innerTML = `<center id= "winner">${current_player} wins!</center>`;
    }
    else{
      current_player = current_player === "X" ? "0" : "X";

  }
  else{
    alert("You've clicked this")
  }

}
