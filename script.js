function getComputerChoice () {
    //create a algorithm to get random number for computer
    let randomNum = Math.floor(Math.random() * 100) + 1;
    //assign rock, paper and sciccors for the computer
    if (randomNum < 33) {
        return "rock";
    } else if (randomNum > 33 && randomNum < 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function computerSelection () {
    return getComputerChoice();
}

/*
function playerSelection () {
    let choice = prompt("Rock, Paper, or Scissor");
    choice.toLowerCase;
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else {
        return "scissor";
    }
} 
*/

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Draw! Rock vs Rock");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Lose! Rock lose to Paper");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("Win! Rock beat Scissor");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Draw! Paper vs Paper");
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("Lose! Paper lose to scissor");
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("Lose! Scissor lose to Rock");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("Win! Scissor beats Paper");
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        console.log("Draw! Scissor vs Scissor");
    }
}

const playerSelection = "rock";
const computerSelction = getComputerChoice();
console.log(playRound(playerSelection, computerSelction));