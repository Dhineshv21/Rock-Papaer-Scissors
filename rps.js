function getComputerChoice() {
  return Math.floor(Math.random() * 2);
}

function getHumanChoice() {
  return parseInt(prompt("What is your choice"));
}

function answer(ans) {
  switch (ans) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Pick a Valid Choice";
      break;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    return "You Win! Rock Beats Scissors.";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    return "You Lose! Paper Beats Rock.";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "You Win! paper Beats rock";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    return "You Lose! Scissors Beats Paper";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    return "You Lose! Rock Beats Scissors!";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return "You Win! Scissors Beats paper";
  } else {
    return "Its a Draw";
  }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = answer(getHumanChoice());
let computerChoice = answer(getComputerChoice());
