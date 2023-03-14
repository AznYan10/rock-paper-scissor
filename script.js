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
const bodyElement = document.querySelector('body');
const divResult = document.querySelector('#results');
const rockPaperScissorClass = document.querySelector('.rockpaperscissor');
const icons = document.querySelector('.icons');
const icon = document.querySelectorAll('.icon');
const winPoints = document.querySelector('#winPoints');
const losePoints = document.querySelector('#losePoints');
const playerVsComp = document.createElement('p');
playerVsComp.textContent = '';
playerVsComp.classList = 'playVsComp';
const result = document.createElement('p');
const endResult = document.createElement('p');
const playButton = document.createElement('button');
playButton.textContent = 'Click to play again!';
playButton.classList = 'playButton';

// Outcomes
let win = 0;
let lose = 0;
let draw = 0;

// play function
function play(e) {
    const play = playRound(e);

    if (play === 'win') {
        result.textContent = 'You won';
        result.style.backgroundColor = '#E3EBFF'
        result.style.color = 'blue';
        result.style.padding = '10px 0';
        result.style.width = '20%';
        result.style.alignSelf = 'center';
        divResult.appendChild(result);
        win++;
        winPoints.textContent = 'Player: ' + win;
        losePoints.textContent = 'Computer: ' + lose;
    } else if (play === 'lose') {
        result.textContent = 'You lost';
        result.style.backgroundColor = '#FFF0F0'
        result.style.color = 'red';
        result.style.padding = '10px 0';
        result.style.width = '20%';
        result.style.alignSelf = 'center';
        divResult.appendChild(result);
        lose++;
        winPoints.textContent = 'Player: ' + win;
        losePoints.textContent = 'Computer: ' + lose;
    } else {
        result.textContent = 'It\' a draw';
        result.style.backgroundColor = '#F3B2FF';
        result.style.color = 'purple';
        result.style.padding = '10px 0';
        result.style.width = '20%';
        result.classList = '';
        result.style.alignSelf = 'center';
        divResult.appendChild(result);
        draw++;
        winPoints.textContent = 'Player: ' + win;
        losePoints.textContent = 'Computer: ' + lose;
    }
    if (win === 5) {
        endResult.textContent = 'Congrats! you won 5 times!';
        endResult.classList = 'endWin';
        divResult.appendChild(endResult);
        playerVsComp.classList = 'clearResult';
        divResult.appendChild(playerVsComp);
        result.classList = 'clearResult';
        divResult.appendChild(result);
        rockPaperScissorClass.style.display = 'none';
        icons.style.display = 'none';
        bodyElement.style.backgroundColor = '#E3EBFF';
        divResult.appendChild(playButton);
        
    } else if (lose === 5) {
        endResult.textContent = 'Lost 5 times, better luck next time!';
        endResult.classList = 'endLose';
        divResult.appendChild(endResult);
        playerVsComp.classList = 'clearResult';
        divResult.appendChild(playerVsComp);
        result.classList = 'clearResult';
        divResult.appendChild(result);
        rockPaperScissorClass.style.display = 'none';
        icons.style.display = 'none';
        bodyElement.style.backgroundColor = '#FFF0F0';
        divResult.appendChild(playButton);
    }
}

icon.forEach(ic => ic.addEventListener('click', play));

playButton.addEventListener('click', function() {
    divResult.removeChild(result);
    divResult.removeChild(endResult);
    divResult.removeChild(playerVsComp);
    playerVsComp.classList = 'playVsComp';
    result.classList = '';
    rockPaperScissorClass.style.display = '';
    icons.style.display = '';
    bodyElement.style.backgroundColor = 'whitesmoke';
    divResult.removeChild(playButton);
    win = 0;
    lose = 0;
    draw = 0;
    winPoints.textContent = 'Player: ' + win;
    losePoints.textContent = 'Computer: ' + lose;
});