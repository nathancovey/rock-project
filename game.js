// randomly get choice from computer
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 1/3) {
        computerChoice = "rock";
    } else if (computerChoice < 2/3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice
}

// get user choice from button
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let userChoice = null
        
        if (e.target.textContent === 'Rock') {
            userChoice = 'rock'
        } else if (e.target.textContent === 'Paper') {
            userChoice = 'paper'
        } else {
            userChoice = 'scissors'
        }

        return userChoice
    })
})

// set human and computer score variables
let humanScore = 0;
let computerScore = 0;

//play round
function playRound() {
    getComputerChoice()

    if (userChoice === computerChoice) {
        console.log('Tie!')
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!')
        humanScore += 1
    } else {
        console.log('Computer wins!')
        computerScore += 1
    }
}

//play game
function playGame() {
    for ()
}