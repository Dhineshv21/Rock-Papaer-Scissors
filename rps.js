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
      return "scissor";
      break;
    default:
      return "Pick a Valid Choice";
      break;
  }
}

let humanChoice = answer(getHumanChoice());
let computerChoice = answer(getComputerChoice());
