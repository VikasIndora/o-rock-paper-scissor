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

function showChoice(){
    return `You chose: ${humanSelection} & Computer chose: ${computerSelection}`
}

function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice){
        displaySection.textContent = `Its a Draw.. || ${showChoice()}`;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }else if (humanChoice == 'rock' && computerChoice == 'paper'){
        displaySection.textContent = `Computer Wins! || ${showChoice()}`;
        ++computerScore;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }else if (humanChoice == 'rock' && computerChoice == 'scissor'){
        displaySection.textContent = `You Win! || ${showChoice()}`;
        ++humanScore;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }else if (humanChoice == 'paper' && computerChoice == 'rock'){
        displaySection.textContent = `You Win! || ${showChoice()}`;
        ++humanScore;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }else if (humanChoice == 'paper' && computerChoice == 'scissor'){
        displaySection.textContent = `Computer Wins! || ${showChoice()}`;
        ++computerScore;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }else if (humanChoice == 'scissor' && computerChoice == 'rock'){
        displaySection.textContent = `Computer Wins! || ${showChoice()}`;
        ++computerScore;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }else {
        displaySection.textContent = `You Win! || ${showChoice()}`;
        ++humanScore;
        hScore.textContent = `${humanScore}`;
        cScore.textContent = `${computerScore}`;
    }
}

let humanSelection;
let computerSelection;

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

rock.addEventListener('click', (e)=>{
    displaySection.textContent = '';
    humanSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.appendChild(displaySection)
})

paper.addEventListener('click', (e)=>{
    displaySection.textContent = '';
    humanSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.appendChild(displaySection)
})

scissor.addEventListener('click', (e)=>{
    displaySection.textContent = '';
    humanSelection = 'scissor';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.appendChild(displaySection)
})

const displaySection = document.createElement('div');
displaySection.style.cssText = "border-radius: 2rem; border: 2px solid hotpink; padding: 4rem;"
const bodySection = document.querySelector('body');
const hScore = document.querySelector('.hScore');
const cScore = document.querySelector('.cScore');