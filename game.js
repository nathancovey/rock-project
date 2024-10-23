// randomly get choice from computer
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 1/3) {
        return "rock";
    } else if (computerChoice < 2/3) {
        return "paper";
    } else {
        return "scisItssors";
    }
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

        console.log(userChoice)
    })
})

// set human and computer score variables
let humanScore = 0;
let computerScore = 0;