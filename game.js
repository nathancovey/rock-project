let userChoice = null
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const winningScore = 5;

const userChoiceText = document.querySelector('.userChoiceText');
const computerChoiceText = document.querySelector('.computerChoiceText');
const userScoreText = document.querySelector('.userScoreText');
const computerScoreText = document.querySelector('.computerScoreText');
const winnerText = document.querySelector('.winner')

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

function playRound() {
    const computerChoice = getComputerChoice()

    userChoiceText.textContent = `You: ${userChoice}`
    computerChoiceText.textContent = `Computer: ${computerChoice}`

    if (userChoice === computerChoice) {
        winnerText.textContent = 'Tie!'
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winnerText.textContent = 'You won the round!'
        userScore += 1
    } else {
        winnerText.textContent = 'Computer won the round!'
        computerScore += 1
    }

    userScoreText.textContent = `Your score: ${userScore}`
    computerScoreText.textContent = `Computer score: ${computerScore}`

    roundsPlayed +=1

    if (computerScore >= winningScore || userScore >= winningScore) {
        if (userScore > computerScore) {
            winnerText.textContent = 'You won the game :) Click a button to play again'
        } else {
            winnerText.textContent = 'Computer won the game :( Click a button to play again'
        }

        roundsPlayed = 0
        computerScore = 0
        userScore = 0
    }
}

