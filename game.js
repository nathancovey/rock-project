// randomly get choice from computer
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 1/3) {
        return "rock";
    } else if (computerChoice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// collect choice from the user
function getHumanChoice() {
    let humanChoice = prompt("Rock Paper or Scissors?");
    return humanChoice.toLowerCase();
}

// set human and computer score variables
let humanScore = 0;
let computerScore = 0;