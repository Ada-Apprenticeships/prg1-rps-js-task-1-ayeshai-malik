function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  } else if (
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "rock" && player2 === "scissors")
  ) {
    return "player1";
  } else if (
    (player1 === "rock" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "rock") ||
    (player1 === "paper" && player2 === "scissors")
  ) {
    return "player2";
  } else if(
    (player1 === "rock" && player2 === "lizard") ||
    (player1 === "scissors" && player2 === "lizard") ||
    (player1 === "lizard" && player2 === "paper")
    (player1 === "spock" && player2 === "rock") ||
    (player1 === "spock" && player2 === "scissors") ||
    (player1 === "lizard" && player2 === "spock")
    (player1 === "paper" && player2 === "spock")
  ) {
    return "player1";
  }
  
  else {
    return 'false'
  }
    
  }


console.log(rockPaperScissors("spock", "spock"));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}
