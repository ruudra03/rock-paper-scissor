// Game Counters
let machinePoints = 0;
let userPoints = 0;
let rounds = 5;

// Choose a random integer which is greater than or equal to 0 and less than 3 (i.e., return random integer from 0, 1, and 2)
function chooseRandomInt() {
  let randomInt = Math.floor(Math.random() * 3);
  return randomInt;
}

// Randomly return Rock, Paper or Scissor as the machine's choice
function getMachineChoice() {
  let choice = chooseRandomInt();
  let outcome;

  if (choice === 0) {
    outcome = "Rock";
  } else if (choice === 1) {
    outcome = "Paper";
  } else {
    // when chooseRandomInt() returns 2
    outcome = "Scissor";
  }

  return outcome;
}

// Get user's choice and return Rock, Paper or Scissor as outcome
function getUserChoice() {
  let choice = parseInt(
    prompt(
      `Please enter your choice:\n(Enter 1 for 'Rock', 2 for 'Paper', 3 for 'Scissor' or 0 to EXIT)\nCurrent user score: ${userPoints} | Current machine score: ${machinePoints}\nRounds left: ${rounds}`
    )
  );
  let outcome;

  if (choice === 0) {
    outcome = undefined;
  } else if (choice === 1) {
    outcome = "Rock";
  } else if (choice === 2) {
    outcome = "Paper";
  } else if (choice === 3) {
    outcome = "Scissor";
  } else {
    // when integer of choice is NOT from valid options 1, 2 or 3
    outcome = null;
  }

  return outcome;
}

// Play a round using machine's and user's outcomes and return the result
function playRound(userOutcome, machineOutcome) {
  let result;

  if (userOutcome === undefined) {
    result = "Game aborted!";
    rounds = 0;
  } else if (userOutcome === null || userOutcome === machineOutcome) {
    result = "No winner!";
  } else if (
    (userOutcome === "Rock" && machineOutcome === "Paper") ||
    (userOutcome === "Paper" && machineOutcome === "Scissor") ||
    (userOutcome === "Scissor" && machineOutcome === "Rock")
  ) {
    machinePoints++;
    result = `User Lost! ${userOutcome} is defeated by ${machineOutcome}.`;
    rounds--;
  } else {
    // when the conditional "(userOutcome === "Rock" && machineOutcome === "Scissor") || (userOutcome === "Paper" && machineOutcome === "Rock") || (userOutcome === "Scissor" && machineOutcome === "Paper")" is true
    userPoints++;
    result = `User Won! ${userOutcome} defeats ${machineOutcome}.`;
    rounds--;
  }

  return result;
}

// Play the game consisting of 5 rounds and log the winner
function playGame() {
  console.log("START GAME");

  let gameWinner;

  for (let i = 0; rounds > 0; i++) {
    let roundWinner = playRound(getUserChoice(), getMachineChoice());

    console.log(`[ROUND ${i + 1}] ${roundWinner}`);
  }

  if (userPoints > machinePoints) {
    gameWinner = "User";
  } else if (userPoints < machinePoints) {
    gameWinner = "Machine";
  } else {
    gameWinner = "Nobody";
  }

  console.log(`${gameWinner} won the game!`);
  resetGame();
}

// Reset all game counters after the game is over
function resetGame() {
  machinePoints = 0;
  userPoints = 0;
  rounds = 5;

  console.log("GAME OVER");
}
