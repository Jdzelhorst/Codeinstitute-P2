// Declarations of variables for DOM elements

let choiceButtons = document.getElementsByClassName('choice-button');
let gamerScore = document.getElementById('gamer-score');
let computerScore = document.getElementById('computer-score');
let gamerChoiceFont = document.getElementsByClassName('gamer-choice');
let computerChoiceFont = document.getElementsByClassName('computer-choice');
let choices = ["rock", "paper", "scissors", "lizard", "spock"];

let gameMessage = document.getElementById('game-text');
let gamerChoice;
let computerChoice;


// Event listeners to choiceButtons

for (let button of choiceButtons) {
    button.addEventListener("click", function() {
        playerOption = this.getAttribute("data-choice");
        playGame(gamerChoice);
    });
}

