let humanScore = 0;
let computerScore = 0;

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
    displaySection.appendChild(document.createTextNode(`Your score is: ${humanScore}, Computer score is: ${computerScore}`))
}
function showChoice(){
    displaySection.appendChild(document.createTextNode(`You chose: ${humanSelection}, Computer chose: ${computerSelection}`))
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice){
        displaySection.appendChild(document.createTextNode('Its a Draw..'));
        showChoice();
        showScore();
    }else if (humanChoice == 'rock' && computerChoice == 'paper'){
        displaySection.appendChild(document.createTextNode("Computer wins!"));
        showChoice();
        ++computerScore;
        showScore();
    }else if (humanChoice == 'rock' && computerChoice == 'scissor'){
        displaySection.appendChild(document.createTextNode("You win!"));
        showChoice();
        ++humanScore;
        showScore();
    }else if (humanChoice == 'paper' && computerChoice == 'rock'){
        displaySection.appendChild(document.createTextNode("You win!"));
        showChoice();
        ++humanScore;
        showScore();
    }else if (humanChoice == 'paper' && computerChoice == 'scissor'){
        displaySection.appendChild(document.createTextNode("Computer wins!"));
        showChoice();
        ++computerScore;
        showScore();
    }else if (humanChoice == 'scissor' && computerChoice == 'rock'){
        displaySection.appendChild(document.createTextNode("Computer wins!"));
        showChoice();
        ++computerScore;
        showScore();
    }else {
        displaySection.appendChild(document.createTextNode("You win!"));
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
    bodySection.appendChild(displaySection)
})

paper.addEventListener('click', (e)=>{
    humanSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.appendChild(displaySection)
})

scissor.addEventListener('click', (e)=>{
    humanSelection = 'scissor';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.appendChild(displaySection)
})

const displaySection = document.createElement('div');
displaySection.style.cssText = "border-radius: 2rem; border: 2px solid hotpink; padding: 4rem;"
const bodySection = document.querySelector('body');