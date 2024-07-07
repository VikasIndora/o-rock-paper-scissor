function getHumanChoice(){
    let userInput = prompt("Enter your pick (among rock, paper and scissor)").toLowerCase();
    if (userInput === ''){
        alert('The page will refresh and then enter an input')
        return location.replace(location.href);
    } else if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){
        return userInput;
    } else{
        alert('The page will refresh and then enter a valid input')
        return location.replace(location.href);
    }
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock"
    } else if (randomNumber === 1){
        return "paper"
    } else {
        return "scissor"
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(humanSelection)
console.log(computerSelection)