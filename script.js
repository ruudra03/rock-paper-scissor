console.log("Hello, World!");

// Choose a random integer which is greater than or equal to 0 and less than 3 (i.e., return random integer from 0, 1, and 2)
function chooseRandomInt() {
  let randomInt = Math.floor(Math.random() * 3);
  return randomInt;
}

// Randomly return Rock, Paper or Scissor as the machine's choice
function getMachineChoice() {
  let choice = chooseRandomInt();

  if (choice === 0) {
    console.log("Rock");
  } else if (choice === 1) {
    console.log("Paper");
  } else {
    // when chooseRandomInt() returns 2
    console.log("Scissor");
  }
}

getMachineChoice();

// Get user's choice and return Rock, Paper or Scissor as outcome
function getUserChoice() {
  let choice = parseInt(
    prompt(
      "Please enter your choice:\n(Enter 1 for 'Rock', 2 for 'Paper', or 3 for 'Scissor')"
    )
  );

  if (choice === 1) {
    console.log("Rock");
  } else if (choice === 2) {
    console.log("Paper");
  } else if (choice === 3) {
    console.log("Scissor");
  } else {
    // when integer of choice is not from 1, 2 or 3
    console.log("Invalid choice, please choose from the given options.");
  }
}

getUserChoice();
