console.log("hello world");

function getRandomInt(max){
    return Math.floor(Math.random() * max); // what this is doing is math.random() picks a random number between 0 and 1, .floor() is rounding down the number so it is an int, and *max is making it so that we can get lets say i want a choice between 3 numbers i can get 3 numbers instead of just 0 and 1
}

function getComputerChoice() {
    compChoice = getRandomInt(3);
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
console.log(getComputerChoice());

function getHumanChoice() {
    humanResponse = window.prompt("Choose Wisely: Paper, Rock, Scissors");
    return humanResponse;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

