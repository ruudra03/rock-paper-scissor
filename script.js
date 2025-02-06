console.log("Hello, World!");

// Game Counters
let machinePoints = 0;
let userPoints = 0;

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
      "Please enter your choice:\n(Enter 1 for 'Rock', 2 for 'Paper', or 3 for 'Scissor')"
    )
  );
  let outcome;

  if (choice === 1) {
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

// Play a round using machine's and user's outcomes
function playRound(userOutcome, machineOutcome) {
  let result;

  if (userOutcome === null) {
    result = "Invalid outcome!";
  } else if (userOutcome === machineOutcome) {
    result = `Draw! ${userOutcome} vs ${machineOutcome}.`;
  } else if (
    (userOutcome === "Rock" && machineOutcome === "Paper") ||
    (userOutcome === "Paper" && machineOutcome === "Scissor") ||
    (userOutcome === "Scissor" && machineOutcome === "Rock")
  ) {
    machinePoints++;
    result = `Loss! ${userOutcome} is defeated by ${machineOutcome}.`;
  } else {
    // when the conditional "(userOutcome === "Rock" && machineOutcome === "Scissor") || (userOutcome === "Paper" && machineOutcome === "Rock") || (userOutcome === "Scissor" && machineOutcome === "Paper")" is true
    userPoints++;
    result = `Win! ${userOutcome} defeats ${machineOutcome}.`;
  }

  return result;
}

console.log(playRound(getUserChoice(), getMachineChoice()));
