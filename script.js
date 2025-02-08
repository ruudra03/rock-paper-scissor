// Select the game div
const game = document.querySelector(".game");

// Select game display
const display = game.lastElementChild;

// Select displays
const score = display.firstElementChild;
const result = score.nextElementSibling.nextElementSibling;
const winner = display.lastElementChild;

// Select game controls
const controls = document.querySelectorAll(".control");

// Add event listener to each control
controls.forEach((button) => {
  button.addEventListener("click", function (e) {
    let gameWinner = playRound(e.target.id, getMachineChoice());

    // If playing a round results in returning a winner
    if (gameWinner) {
      // Display the winner
      winner.textContent = gameWinner;
      resetGame(); // reset the game
    } else {
      // Else continue playing next round
      winner.textContent = null;
    }
  });
});

// Score counters
let userPoints = 0;
let machinePoints = 0;

// Play a round of Rock Paper Scissor using the user's input and randomly selected machine's choice
function playRound(userChoice, machineChoice) {
  // Conditionals based on game's rules
  if (userChoice === machineChoice) {
    // when machine's and user's choices are same
    result.textContent = "Draw!";
  } else if (
    // paper beats rock, scissor beats paper, and rock beats scissor
    (userChoice === "rock" && machineChoice === "paper") ||
    (userChoice === "paper" && machineChoice === "scissor") ||
    (userChoice === "scissor" && machineChoice === "rock")
  ) {
    machinePoints++;
    result.textContent = `Loss! ${capitaliseString(
      userChoice
    )} cannot defeat ${capitaliseString(machineChoice)}.`;
  } else {
    // all the other outcomes
    userPoints++;
    result.textContent = `Win! ${capitaliseString(
      userChoice
    )} defeats ${capitaliseString(machineChoice)}.`;
  }

  // Display current score
  score.textContent = `Current score: User(${userPoints}) and Machine(${machinePoints})`;

  // If either of user or machine reaches maximum of 5 points after finishing playing a round return a winner
  if (userPoints === 5 || machinePoints === 5) {
    if (userPoints > machinePoints) {
      return "User wins the game!";
    } else {
      return "Machine wins the game!";
    }
  }
}

// Get randomly selected machine's choice for a round
function getMachineChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Capitalise an all lowercase string
function capitaliseString(string) {
  return string.charAt(0).toUpperCase().concat("", string.slice(1));
}

// Reset game score counters
function resetGame() {
  userPoints = 0;
  machinePoints = 0;
}
