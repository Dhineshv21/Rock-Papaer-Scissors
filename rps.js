function getComputerChoice() {
  return Math.floor(Math.random() * 2);
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

function playGame() {
  let computerChoice = answer(getComputerChoice());
  console.log("Computer Chose " + computerChoice);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      console.log("You Win! Rock Beats Scissors.");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      console.log("You Lose! Paper Beats Rock.");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      console.log("You Win! paper Beats rock");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      console.log("You Lose! Scissors Beats Paper");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      console.log("You Lose! Rock Beats Scissors!");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      console.log("You Win! Scissors Beats paper");
    } else {
      console.log("Its a Draw");
    }
  }
  playRound(humanChoice, computerChoice);
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

document.getElementById("rock").addEventListener("click", function () {
  humanChoice = "rock";
  console.log("You Chose Rock");
  playGame();
});

document.getElementById("paper").addEventListener("click", function () {
  humanChoice = "paper";
  console.log("You Chose Paper");
  playGame();
});

document.getElementById("scissors").addEventListener("click", function () {
  humanChoice = "scissors";
  console.log("You Chose Scissors");
  playGame();
});

console.log(humanScore);
