// Div

const container = document.querySelector("#container");

const winnerText = document.createElement("h1");
const humanChose = document.createElement("h2");
const computerChose = document.createElement("h2");

container.appendChild(humanChose);
container.appendChild(computerChose);
container.appendChild(winnerText);

// Score

let humanScore = 0;
let computerScore = 0;

const compScore = document.createElement("h3");
const yourScore = document.createElement("h3");

container.appendChild(yourScore);
container.appendChild(compScore);

const gameWinner = document.createElement("h1");
container.appendChild(gameWinner);

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
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
  }
}

function winner() {
  if (humanScore == 5) {
    winnerText.textContent = "You got 5 points! You won the Game!";
    alert("You Won the game! Time to win again");
    location.reload();
  } else if (computerScore == 5) {
    winnerText = "Computer won 5 points! You lose..";
    alert("You Lost! Please don't lose again");
    location.reload();
  }
}

function playGame() {
  let computerChoice = answer(getComputerChoice());
  computerChose.textContent = "Computer Chose " + computerChoice;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      winnerText.textContent = "You Win! Rock Beats Scissors.";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      winnerText.textContent = "You Lose! Paper Beats Rock.";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      winnerText.textContent = "You Win! paper Beats rock";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      winnerText.textContent = "You Lose! Scissors Beats Paper";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      winnerText.textContent = "You Lose! Rock Beats Scissors!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      winnerText.textContent = "You Win! Scissors Beats paper";
    } else {
      winnerText.textContent = "Its a Draw";
    }

    yourScore.textContent = "Your Score is " + humanScore;
    compScore.textContent = "Computer Score is " + computerScore;
    winner();
  }
  playRound(humanChoice, computerChoice);
}

document.getElementById("rock").addEventListener("click", function () {
  humanChoice = "rock";
  humanChose.textContent = "You Chose Rock";
  playGame();
});

document.getElementById("paper").addEventListener("click", function () {
  humanChoice = "paper";
  humanChose.textContent = "You Chose Paper";
  playGame();
});

document.getElementById("scissors").addEventListener("click", function () {
  humanChoice = "scissors";
  humanChose.textContent = "You Chose Scissors";
  playGame();
});
