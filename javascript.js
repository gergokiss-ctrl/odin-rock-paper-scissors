const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerText = document.querySelector('#playertext');
const playerScoreText = document.querySelector('#playerscore');
const computerScoreText = document.querySelector('#computerscore');
let playerScore = 0;
let computerScore = 0;
let result = 0;
let playerSelection = '';
let computerSelection = '';

rock.addEventListener('click', () => {
    if ((playerScore < 5) && (computerScore < 5)) {
        playerSelection = 'Rock';
        playerText.textContent = `Player's choice: ${playerSelection}`;
        computerSelection = getComputerChoice();
        game();
    }
})

paper.addEventListener('click', () => {
    if ((playerScore < 5) && (computerScore < 5)) {
        playerSelection = 'Paper';
        playerText.textContent = `Player's choice: ${playerSelection}`;
        computerSelection = getComputerChoice();
        game();
    }
})

scissors.addEventListener('click', () => {
    if ((playerScore < 5) && (computerScore < 5)) {
        playerSelection = 'Scissors';
        playerText.textContent = `Player's choice: ${playerSelection}`;
        computerSelection = getComputerChoice();
        game();
    }
})

function getComputerChoice() {
    const computerText = document.querySelector('#computertext');
    let computerSelection = Math.floor(Math.random() * 3 + 1);
    switch (computerSelection) {
        case 1:
            computerText.textContent = `Computer's choice: Rock`;
            break;
        case 2:
            computerText.textContent = `Computer's choice: Paper`;
            break;
        case 3:
            computerText.textContent = `Computer's choice: Scissors`;
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    const resultText = document.querySelector('#resulttext');

    if (playerSelection == "Rock") {
        if (computerSelection == 2) {
            resultText.textContent = 'You Lose! Paper beats Rock';
            result = -1;
        } else if (computerSelection == 3) {
            resultText.textContent = 'You Win! Rock beats Scissors';
            result = 1;
        } else {
            resultText.textContent = 'Tie!';
            result = 0;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == 1) {
            resultText.textContent = 'You Win! Paper beats Rock';
            result = 1;
        } else if (computerSelection == 3) {
            resultText.textContent = 'You Lose! Scissors beats Paper';
            result = -1;
        } else {
            resultText.textContent = 'Tie!';
            result = 0;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == 1) {
            resultText.textContent = 'You Lose! Rock beats Scissors';
            result = -1;
        } else if (computerSelection == 2) {
            resultText.textContent = 'You Win! Scissors beats Paper';
            result = 1;
        } else {
            resultText.textContent = 'Tie!';
            result = 0;
        }
    }
    return result;
}

function game() {
    result = playRound(playerSelection, computerSelection);
    if (result == 1) {
        playerScore++;
    } else if (result == -1) {
        computerScore++;
    }

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
}