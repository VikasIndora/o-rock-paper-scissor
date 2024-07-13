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

    document.dispatchEvent(myEvent)
    // Or I can dispatch it inside all button events as they have a track of score too after running playRound function 
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
    bodySection.insertBefore(displaySection,scoreSection);
})

paper.addEventListener('click', (e)=>{
    displaySection.textContent = '';
    humanSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.insertBefore(displaySection,scoreSection);
})

scissor.addEventListener('click', (e)=>{
    displaySection.textContent = '';
    humanSelection = 'scissor';
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    bodySection.insertBefore(displaySection,scoreSection);
})

const myEvent = new Event('gameEnd');
document.addEventListener('gameEnd',()=>{
    if(humanScore == 5) {
        alert('Congratulations!! You won!')
        setTimeout(()=>{
            location.replace(location.href)   
        },2000)
    }
    else if(computerScore == 5) {
        alert('Oh no.. Computer won')
        setTimeout(()=>{
            location.replace(location.href)   
        },2000)
    }
})

const displaySection = document.createElement('div');
displaySection.style.cssText = "border-radius: 2rem; border: 2px solid hotpink; padding: 4rem;"
const bodySection = document.querySelector('body');
const hScore = document.querySelector('.hScore');
const cScore = document.querySelector('.cScore');
const scoreSection = document.querySelector('.score');