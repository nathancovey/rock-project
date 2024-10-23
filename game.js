// declare variables
let userChoice = null
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const winningScore = 5;

// randomly get choice from computer
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 1 / 3) {
        computerChoice = 'rock';
    } else if (computerChoice < 2 / 3) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice
}

// get user choice from button
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        
        if (e.target.textContent === 'Rock') {
            userChoice = 'rock'
        } else if (e.target.textContent === 'Paper') {
            userChoice = 'paper'
        } else {
            userChoice = 'scissors'
        }

        playRound()
    })
})

//play game
function playRound() {
    const computerChoice = getComputerChoice()

    if (userChoice === computerChoice) {
        console.log('Tie!')
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!')
        userScore += 1
    } else {
        console.log('Computer wins!')
        computerScore += 1
    }

    roundsPlayed +=1

    console.log(`Round ${roundsPlayed}: You: ${userScore}, Computer: ${computerScore}`)

    if (computerScore >= winningScore || userScore >= winningScore) {
        console.log('Game Over');
        console.log(`Final Scores - You: ${userScore}, Computer: ${computerScore}`);
        roundsPlayed = 0
        computerScore = 0
        userScore = 0
    }
}

//put results in html
const container = document.querySelector('container')