function getComputerChoice () {
    // create a algorithm to get random number for computer
    let randomNum = Math.floor(Math.random() * 100);

    // assign rock, paper and sciccors for the computer
    if (randomNum < 33) {
        return "rock";
    } else if (randomNum < 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

// function for player choice
function getPlayerChoice(e) {
    // let choice = prompt("Rock, Paper, or Scissor?: ", "")
    // choice = choice.toLowerCase();

    let choice = e;

    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissor") {
        return "scissor";
    } else {
        return "" + choice + " is not an option";
    }
} 

// function for the round to see who wins
function playRound (playerSelection, computerSelection) {

    let choice = playerSelection.target.id;

    // gets player choice and computer choice
    playerSelection = getPlayerChoice(choice);
    computerSelection = getComputerChoice();

    // All the outcomes for the rock, paper, scissor 
    if (playerSelection === "rock" && computerSelection === "rock") {
        playerVsComp.textContent = 'Rock and rock smashes together and break';
        divResult.appendChild(playerVsComp);
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        playerVsComp.textContent = 'Rock gets covered by paper';
        divResult.appendChild(playerVsComp);
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerVsComp.textContent = 'Rock smashes through scissor';
        divResult.appendChild(playerVsComp);
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerVsComp.textContent = 'Paper covers rock';
        divResult.appendChild(playerVsComp);
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        playerVsComp.textContent = 'Paper covers each other and crumbles';
        divResult.appendChild(playerVsComp);
        return "draw";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        playerVsComp.textContent = 'Paper was cut by scissor';
        divResult.appendChild(playerVsComp);
        return "lose";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        playerVsComp.textContent = 'Scissor was smashed by the rock';
        divResult.appendChild(playerVsComp);
        return "lose";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerVsComp.textContent = 'Scissor cut the paper to shreds';
        divResult.appendChild(playerVsComp);
        return "win";
    } else if (playerSelection == "scissor" && computerSelection === "scissor") {
        playerVsComp.textContent = 'Scissor cuts each other in half';
        divResult.appendChild(playerVsComp);
        return "draw";
    }
}

// All necessary elements
const divResult = document.querySelector('#results');
const icons = document.querySelectorAll('.icon');
const playerVsComp = document.createElement('p');
playerVsComp.textContent = '';
const result = document.createElement('p');
const endResult = document.createElement('p');
const points = document.createElement('p');

// Outcomes
let win = 0;
let lose = 0;
let draw = 0;

// play function
function play(e) {
    const play = playRound(e);
    if ((win === 5) || (lose === 5)) {
        divResult.removeChild(result);
        divResult.removeChild(endResult);
        divResult.removeChild(points);
        win = 0;
        lose = 0;
        draw = 0;
    }
    
    if (play === 'win') {
        result.textContent = 'You won';
        divResult.appendChild(result);
        win++;
        points.textContent = 'Player: ' + win + ' Computer: ' + lose;
        divResult.appendChild(points);
    } else if (play === 'lose') {
        result.textContent = 'You lost';
        divResult.appendChild(result);
        lose++;
        points.textContent = 'Player: ' + win + ' Computer: ' + lose;
        divResult.appendChild(points);
    } else {
        result.textContent = 'It\' a draw';
        divResult.appendChild(result);
        draw++;
        points.textContent = 'Player: ' + win + ' Computer: ' + lose;
        divResult.appendChild(points);
    }
    if (win === 5) {
        endResult.textContent = 'Congrats! you won 5 times';
        divResult.appendChild(endResult);
    } else if (lose === 5) {
        endResult.textContent = 'Lost 5 times, better luck next time';
        divResult.appendChild(endResult);
    }
}

icons.forEach(icon => icon.addEventListener('click', play));