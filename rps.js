function getComputerChoice(max) {
  let Computer_choice = Math.floor(Math.random() * max);

  switch (Computer_choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}


