//make an array of the game
const gamePlay = ["rock", "paper", "scissors"];
//define result of the match(best of 5)
let resultHum = 0;
let resultCom = 0;
//function that lets computer play
const computerPlay = () => {
  return gamePlay[Math.floor(Math.random() * 3)];
};
//function that defines the winner of the round
const winnerInRound = (com, hum) => {
  if (com == hum) {
    return "tied";
  } else if (com == "rock" && hum == "paper") {
    console.log("Computer played rock");
    resultHum += 1;
    return "you Won";
  } else if (com == "rock" && hum == "scissors") {
    console.log("Computer played rock");
    resultCom += 1;
    return "you Lost";
  } else if (com == "paper" && hum == "rock") {
    console.log("Computer played paper");
    resultCom += 1;
    return "you Lost";
  } else if (com == "paper" && hum == "scissors") {
    console.log("Computer played paper");
    resultHum += 1;
    return "you Won";
  } else if (com == "scissors" && hum == "rock") {
    console.log("Computer played scissors");
    resultHum += 1;
    return "you Won";
  } else if (com == "scissors" && hum == "paper") {
    console.log("Computer played scissors");
    resultCom += 1;
    return "you Lost";
  } else {
    return "There is something wrong.";
  }
};
//function that starts the game and counts the rounds and define the winner
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    let humanPlay = prompt("choose Rock Paper or Scissors").toLowerCase();
    console.log(winnerInRound(computerPlay(), humanPlay));
    console.log(`results are: Computer: ${resultCom} , You: ${resultHum}`);
  }
  if (resultCom >= 3) {
    alert("The Computer Beat You.");
  } else if (resultHum >= 3) {
    alert("You Beat The Machine!!!... Play another hand!!");
  } else {
    if (resultHum > resultCom) {
      alert("You Beat The Machine!!!... Play another hand!!");
    } else if (resultHum < resultCom) {
      alert("The Computer Beat You.");
    } else {
      alert("The Game Was Tied......!!");
    }
  }
};

//calling the playGame function and start the game
console.log(playGame());
