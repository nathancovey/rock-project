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

// play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie! Redo round"; // Handle ties but don't count them
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

// play game (until one score reaches 5)
function playGame() {
    alert("Time to play Rock, Paper, Scissors! The first to 5 wins!");

    // Keep playing until either score reaches 5
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        printToLog("You: " + humanSelection);
        printToLog("Computer: " + computerSelection);

        const result = playRound(humanSelection, computerSelection);
        printToLog(result);

        if (result !== "Tie! Redo round") {
            printToLog("Your Score: " + humanScore);
            printToLog("Computer Score: " + computerScore);
        }

        // Print logs to the HTML
        function printToLog(message) {
            const gameLogDiv = document.getElementById("game-log");
            gameLogDiv.innerHTML += `<p>${message}</p>`;
}
    }

    // Declare the final winner
    if (humanScore === 5) {
        printToLog("You won the game!");
    } else if (computerScore === 5) {
        printToLog("Computer won the game :(");
    }
}

playGame();