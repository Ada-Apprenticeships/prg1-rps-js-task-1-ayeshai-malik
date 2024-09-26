const winningMoves = {
  rock:['scissors', 'lizard'],
  scissors:['paper', 'lizard'],
  paper:['rock', 'spock'],
  spock:['rock', 'scissors'],
  lizard:['paper', 'spock'],

}

function rockPaperScissors(player1, player2){
  if (player1 === player2){
      return 'draw';
  }
  if(winningMoves[player1].includes(player2) ){
      return 'player1';
  } else {
      return 'player2';
  }
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}
