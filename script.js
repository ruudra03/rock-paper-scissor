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
