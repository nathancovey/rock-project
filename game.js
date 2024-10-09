// randomly get choice from computer

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 1/3) {
        return "rock"
    } else if (computerChoice < 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}


// collect choice from the user

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper or Scissors?")
    return humanChoice.toLowerCase()
}


// set human and computer score variables

let humanScore = 0
let computerScore = 0


// play a round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie! Redo round"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return "Human wins this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// play game (5 rounds total)

function playGame() {
    alert("Time for Rock, Paper, Scissors! We will play until someone has won 5 rounds total.")

    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // show scores
        console.log("You: " + humanSelection)
        console.log("Computer: " + computerSelection)

        console.log(playRound(humanSelection, computerSelection))

        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }

    // declare final winner
    if (humanScore === 5) {
        console.log("You won the game! 🎉");
    } else if (computerScore === 5) {
        console.log("Computer won the game :(");
    }
}

playGame()