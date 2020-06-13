//make an array of the game
const gamePlay = ["rock", "paper", "scissors"];
//define result of the match(best of 5)
let resultHum = 0;
let resultCom = 0;
//function that lets computer play
const computerPlay = () => {
  return gamePlay[Math.floor(Math.random() * 3)];
};
//prompt for human play
const humanPlay = prompt("choose Rock Paper or Scissors").toLowerCase();
//function that defines the winner of the round
const winnerInRound = (com, hum) => {
  if (com == hum) {
    return "tied";
  } else if (com == "rock" && hum == "paper") {
    resultHum += 1;
    return "you Won";
  } else if (com == "rock" && hum == "scissors") {
    resultCom += 1;
    return "you Lost";
  } else if (com == "paper" && hum == "rock") {
    resultCom += 1;
    return "you Lost";
  } else if (com == "paper" && hum == "scissors") {
    resultHum += 1;
    return "you Won";
  } else if (com == "scissors" && hum == "rock") {
    resultHum += 1;
    return "you Won";
  } else if (com == "scissors" && hum == "paper") {
    resultCom += 1;
    return "you Lost";
  } else {
    return "There is something wrong.";
  }
};
//function that starts the game and counts the rounds and define the winner
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    winnerInRound(computerPlay(), humanPlay);
    console.log(`results are: Computer: ${resultCom} , You: ${resultHum}`);
  }
  if (resultCom >= 3) {
    alert("The Computer Beat You.");
  } else {
    alert("You Beat The Machine!!!... Play another hand!!");
  }
};

//calling the playGame function and start the game
playGame();
