function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3 + 1);
    switch (computerSelection) {
        case 1:
            console.log('Computer choice: Rock');
            break;
        case 2:
            console.log('Computer choice: Paper');
            break;
        case 3:
            console.log('Computer choice: Scissors');
            break;
    }

    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection;

    let input = prompt("Please enter your choice");
    let str1 = input.slice(0, 1);
    let str2 = input.slice(1);
    playerSelection = str1.toUpperCase() + str2.toLowerCase();

    console.log("Player choice: " + playerSelection);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == "Rock") {
        if (computerSelection == 2) {
            console.log("You Lose! Paper beats Rock");
            result = -1;
        } else if (computerSelection == 3) {
            console.log("You Win! Rock beats Scissors");
            result = 1;
        } else {
            console.log("Tie!");
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == 1) {
            console.log("You Win! Paper beats Rock");
            result = 1;
        } else if (computerSelection == 3) {
            console.log("You Lose! Scissors beats Paper");
            result = -1;
        } else {
            console.log("Tie!");
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == 1) {
            console.log("You Lose! Rock beats Scissors");
            result = -1;
        } else if (computerSelection == 2) {
            console.log("You Win! Scissors beats Paper");
            result = 1;
        } else {
            console.log("Tie!");
        }
    }
    console.log("\n");
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;


    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
        } else if (result == -1) {
            computerScore++;
        } else {
            continue;
        }
    }

    const resultText = `Results:\nPlayer ${playerScore} - ${computerScore} Computer`;
    console.log(resultText);
}

game();