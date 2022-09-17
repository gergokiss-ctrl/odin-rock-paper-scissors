/*
- input ablak felugrik
- felhasználó beírja a 3 opció közül valamelyiket
- a prompt addig aktív, amíg a 3 opció közül nem lett beírva az egyik helyesen (kis- és nagybetűkre nem érzékeny)
- a gép generál egy választ
- összehasonlítjuk a két választ, és eldöntjük, hogy ki nyert
- a győztes pontszámát növeljük
- ha döntetlen, akkor a kör megismétlődik, a pontszámok nem változnak
- addig fut a játék, amíg 5 kör le nem ment
- az 5. kör végén kiértékeljük a győztest a pontszámok alapján
*/

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
    if (playerSelection == "Rock") {
        if (computerSelection == 2) {
            console.log("You Lose! Paper beats Rock");
        } else if (computerSelection == 3) {
            console.log("You Win! Rock beats Scissors");
        } else {
            console.log("Tie!");
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == 1) {
            console.log("You Win! Paper beats Rock");
        } else if (computerSelection == 3) {
            console.log("You Lose! Scissors beats Paper");
        } else {
            console.log("Tie!");
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == 1) {
            console.log("You Lose! Rock beats Scissors");
        } else if (computerSelection == 2) {
            console.log("You Win! Scissors beats Paper");
        } else {
            console.log("Tie!");
        }
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));