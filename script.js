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
function getPlayerChoice(e) {
    //let choice = prompt("Rock, Paper, or Scissor?: ", "")
    //choice = choice.toLowerCase();

    let choice = e;

    if (choice === "rock") {
        return "rock";
        console.log(choice);
    } else if (choice === "paper") {
        return "paper";
        console.log(choice);
    } else if (choice === "scissor") {
        return "scissor";
        console.log(choice);
    } else {
        return choice + " is not an option";
        console.log(choice);
    }
} 

//function for the round to see who wins
function playRound (playerSelection, computerSelection) {

    let choice = playerSelection.target.id;

    //gets player choice and computer choice
    playerSelection = getPlayerChoice(choice);
    computerSelection = getComputerChoice();

    //All the outcomes for the rock, paper, scissor 
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Draw! Rock vs Rock");
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Lose! Rock lose to Paper");
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("Win! Rock beat Scissor");
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Win! Paper beats Rock");
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Draw! Paper vs Paper");
        return "draw";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("Lose! Paper lose to scissor");
        return "lose";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("Lose! Scissor lose to Rock");
        return "lose";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("Win! Scissor beats Paper");
        return "win";
    } else if (playerSelection == "scissor" && computerSelection === "scissor") {
        console.log("Draw! Scissor vs Scissor");
        return "draw";
    }
}

// All necesary elements
const divResult = document.querySelector('#results');
const icons = document.querySelectorAll('.icon');

// Outcomes
let win = 0;
let lose = 0;
let draw = 0;

function play(e) {
    const play = playRound(e);
        const result = document.createElement('p');
        if (play === 'win') {
            result.textContent = 'You won';
            divResult.appendChild(result);
            win++;
        } else if (play === 'lose') {
            result.textContent = 'You lost';
            divResult.appendChild(result);
            lose++;
        } else {
            result.textContent = 'It\' a draw';
            divResult.appendChild(result);
            draw++;
        }
        
        const endResult = document.createElement('p');
        if (win === 4) {
            endResult.textContent = 'Congrats! you won 5 times';
            divResult.appendChild(endResult);
            win = 0;
            lose = 0;
            draw = 0;
        } else if (lose === 4) {
            endResult.textContent = 'Lost 5 times, better luck next time';
            divResult.appendChild(endResult);
            win = 0;
            lose = 0;
            draw = 0;
        }
}

icons.forEach(icon => icon.addEventListener('click', play));