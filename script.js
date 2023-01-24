function getComputerChoice () {
    //create a algorithm to get random number for computer
    let randomNum = Math.floor(Math.random() * 100);

    //assign rock, paper and sciccors for the computer
    if (randomNum < 33) {
        return "rock";
    } else if (randomNum < 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

//function for player choice
function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissor?: ", "")
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissor") {
        return "scissor";
    } else {
        return choice + " is not an option";
    }
} 

//function for the round to see who wins
function playRound (playerSelection, computerSelection) {
   
    //gets player choice and computer choice
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    //All the outcomes for the rock, paper, scissor 
    if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Draw! Rock vs Rock");
        console.log("Draw! Rock vs Rock");
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("Lose! Rock lose to Paper");
        console.log("Lose! Rock lose to Paper");
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        alert("Win! Rock beat Scissor");
        console.log("Win! Rock beat Scissor");
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("Win! Paper beats Rock");
        console.log("Win! Paper beats Rock");
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Draw! Paper vs Paper");
        console.log("Draw! Paper vs Paper");
        return "draw";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        alert("Lose! Paper lose to scissor");
        console.log("Lose! Paper lose to scissor");
        return "lose";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        alert("Lose! Scissor lose to Rock");
        console.log("Lose! Scissor lose to Rock");
        return "lose";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        alert("Win! Scissor beats Paper");
        console.log("Win! Scissor beats Paper");
        return "win";
    } else if (playerSelection == "scissor" && computerSelection === "scissor") {
        alert("Draw! Scissor vs Scissor");
        console.log("Draw! Scissor vs Scissor");
        return "draw";
    }
}

//function for the game of best to 5
function game () {
    let playerWin = 0;
    let computerWin = 0;
    let draw = 0;

    //loops 5 times for the game
    for (let i = 0; i < 5; i++) {
        let play = playRound();
        if (play === "win") {
            playerWin++;
        } else if (play === "lose") {
            computerWin++;
        } else {
            draw++;
        }
    }
    alert("You have " + playerWin + " win, " + computerWin + " lose and " + draw + " draw");
    return "You have " + playerWin + " win, " + computerWin + " lose and " + draw + " draw"; 
}

//playing the game
console.log(game());