let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let userInput = prompt("Enter your pick (rock, paper and scissor)").toLowerCase().trim();
    if (userInput === '' || userInput === null){
        alert('The page will refresh and then enter an input')
        location.replace(location.href); // with no return value set any function returns 'undefined'.
    } else if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){
        return userInput;
    } else{
        alert('The page will refresh and then enter a valid input')
        location.replace(location.href);
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

function showScore(){
    console.log(`Your score is: ${humanScore}, Computer score is: ${computerScore}`);
}
function showChoice(){
    console.log(`You chose: ${humanSelection}, Computer chose: ${computerSelection}`)
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice){
        console.log("Its a draw..");
        showChoice();
        showScore();
    }else if (humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("Computer wins!");
        showChoice();
        ++computerScore;
        showScore();
    }else if (humanChoice == 'rock' && computerChoice == 'scissor'){
        console.log("You win!");
        showChoice();
        ++humanScore;
        showScore();
    }else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("You win!");
        showChoice();
        ++humanScore;
        showScore();
    }else if (humanChoice == 'paper' && computerChoice == 'scissor'){
        console.log("Computer wins!");
        showChoice();
        ++computerScore;
        showScore();
    }else if (humanChoice == 'scissor' && computerChoice == 'rock'){
        console.log("Computer wins!");
        showChoice();
        ++computerScore;
        showScore();
    }else {
        console.log("You win!");
        showChoice();
        ++humanScore;
        showScore();
    }
}

let humanSelection;
let computerSelection;

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

rock.addEventListener('click', (e)=>{
    humanSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
})

paper.addEventListener('click', (e)=>{
    humanSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
})

scissor.addEventListener('click', (e)=>{
    humanSelection = 'scissor';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
})

function playGame(){
    for(let i = 1; i<=5; i++){
        humanSelection = getHumanChoice();
        if (humanSelection == undefined) {return;} // exit playGame() for an 'undefined' return value in getHumanChoice().
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        console.log("--------------------------------------")
    }
    console.log(`Final Scores:`) + console.log(showScore());
    if (humanScore == computerScore){
        console.log(`Jeez.. all that for a draw.`)
    }else if (humanScore > computerScore){
        console.log(`Hurray! You are THE ultimate champion!! (saviour of humanity)`)
    }else {
        console.log(`Its over.. in the end computer wins (end of humanity)`)
    }
}

// playGame();