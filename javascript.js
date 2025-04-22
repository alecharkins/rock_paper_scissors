function getComputerChoice() {
    let randInt = Math.floor(Math.random()*100+1);
    let compChoice;
    console.log(randInt)
    if (randInt < 34) {
        compChoice = 'rock';
    } else if (randInt <= 66) {
        compChoice = 'scissors';
    } else {
        compChoice = 'paper';
    }
    return compChoice
};
        
function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
    return humanChoice
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else if ((humanChoice == 'rock' & computerChoice == 'paper') || (humanChoice == 'scissors' & computerChoice == 'rock') || (humanChoice == 'paper' & computerChoice == 'scissors')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            ++computerScore;    
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            ++humanScore;
        }
    };
    
    let i = 0
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();    
        playRound(humanSelection, computerSelection);
        i++;
    }
    console.log(`The final score is Human: ${humanScore}, Computer: ${computerScore}`); 
}

playGame();