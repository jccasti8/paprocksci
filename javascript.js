console.log("hello world");

function getRandomInt(max){
    return Math.floor(Math.random() * max); // what this is doing is math.random() picks a random number between 0 and 1, .floor() is rounding down the number so it is an int, and *max is making it so that we can get lets say i want a choice between 3 numbers i can get 3 numbers instead of just 0 and 1
}

function getComputerChoice() {
    let compChoice = getRandomInt(3);
    if (compChoice === 0){
        console.log(compChoice);
        return "paper";
    }else if (compChoice === 1){
        console.log(compChoice);
        return "rock";
    }else {
        console.log(compChoice);
        return "scissors";
    }


}
//console.log("computer choice: " + getComputerChoice());

function getHumanChoice() {
    let humanResponse = window.prompt("Choose Wisely: Paper, Rock, Scissors");
    return humanResponse;
}

//console.log("human choice: " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();  //changes both human choice and computer choice to all caps to adequately compare them.
    computerChoice = computerChoice.toUpperCase();
    if (humanChoice==="PAPER"){
        if (computerChoice === "ROCK"){
            console.log("You win! 😄 Paper beats rock");
            humanScore++;
        }else if(computerChoice === "SCISSORS"){
            console.log("You lose 😞 Scissors beats paper")
            computerScore++;
        }else {
            console.log("Tied!")
        }
    } else if (humanChoice === "ROCK"){
        if (computerChoice == "PAPER"){
            console.log("You lose 😞 Paper beats Rock");
            computerScore++;
        }else if (computerChoice === "SCISSORS"){
            console.log("You win! 😄 Rock beats scissors");
            humanScore++;
        }else {
            console.log("Tied!")
        }
    } else if (humanChoice === "SCISSORS"){
        if (computerChoice === "PAPER"){
            console.log("You win! 😄 Scissors beats paper");
            humanScore++;
        } else if (computerChoice === "ROCK"){
            console.log("You lose 😞 Rock beats scissors");
            computerScore++;
        }else {
            console.log("Tied!")
        }
    }
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    
}

const humanSelection = getHumanChoice();
console.log("human choice: " + humanSelection);
const computerSelection = getComputerChoice()
console.log("computer choice: " + computerSelection);

playRound(humanSelection, computerSelection);

