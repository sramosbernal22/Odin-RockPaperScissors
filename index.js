let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let pick = Math.floor(Math.random()*3);
    //console.log(pick)//Check if my number is coming out right
    if(pick == 0)
    {
        return 'rock';   
    }
    else if(pick == 1)
    {
        return 'paper';
    }
    else if(pick == 2)
    {
        return 'scissors';
    }

};

let playRound = (humanChoice, computerChoice) => {
    if(humanChoice == 'rock' && computerChoice == 'paper')
    {
        alert("You lose! Paper beats Rock.");
        computerScore += 1;
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors')
    {
        alert("You win! Rock beats Scissors.");
        humanScore += 1;
    }
    else if(humanChoice == 'rock' && computerChoice == 'rock')
    {
        alert("It is a tie! Rock and Rock.");

    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors')
    {
        alert("You lose! Scissors beats Paper.");
        computerScore += 1;           
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock')
    {
        alert("You win! Paper beats Rock.");
        humanScore += 1;                
    }
    else if(humanChoice == 'paper' && computerChoice == 'paper')
    {
        alert("It is a tie! Paper and Paper.");               
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper')
    {
        alert("You win! Scissors beats Paper.");
        humanScore += 1;                    
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock')
    {
        alert("You lose! Rock beats Scissors.");
        computerScore += 1;                         
    }
    else if(humanChoice == 'scissors' && computerChoice == 'scissors')
    {
        alert("It is a tie! Scissors and Scissors.");                                
    }
    
};

let checkWin = () => {

    if(humanScore == 5){
        alert("You win " + humanScore + "-" + computerScore);
        humanScore = 0;
        computerScore = 0;
    }

    if(computerScore == 5){
        alert("Computer win " + computerScore + "-" + humanScore);
        humanScore = 0;
        computerScore = 0;
    }
}



//Wait for page load first
window.addEventListener("DOMContentLoaded", (event) => {

    //Get connection to rock paper scissors button
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    //Create functions for onclick
    function pressRock() {
        playRound('rock', getComputerChoice());
        checkWin();
    }

    function pressPaper() {
        playRound('paper', getComputerChoice());
        checkWin();

    }

    function pressScissors() {
        playRound('scissors', getComputerChoice());
        checkWin();

    }

    //Connecting onclick on my functions
    rockButton.addEventListener("click", pressRock);
    paperButton.addEventListener("click", pressPaper);
    scissorsButton.addEventListener("click", pressScissors);



});











// let getHumanChoice = () => {
//     while(true){
//         let choice = prompt("Pick 'rock', 'paper' or 'scissors'");
//         if(choice.toLowerCase() == 'rock')
//         {
//             return 'rock';
//         }
//         else if(choice.toLowerCase() == 'paper')
//         {
//             return 'paper';
//         }
//         else if(choice.toLowerCase() == 'scissors')
//         {
//             return 'scissors';
//         }
//         else{
//             console.log("Pick a valid option.")
//         }
//     }
     
// };




// let playRound = (humanChoice, computerChoice) => {
//     if(humanChoice == 'rock' && computerChoice == 'paper')
//     {
//         console.log("You lose! Paper beats Rock.");
//         computerScore += 1;
//     }
//     else if(humanChoice == 'rock' && computerChoice == 'scissors')
//     {
//         console.log("You win! Rock beats Scissors.");
//         humanScore += 1;
//     }
//     else if(humanChoice == 'rock' && computerChoice == 'rock')
//     {
//         console.log("It is a tie! Rock and Rock.");

//     }
//     else if(humanChoice == 'paper' && computerChoice == 'scissors')
//     {
//         console.log("You lose! Scissors beats Paper.");
//         computerScore += 1;           
//     }
//     else if(humanChoice == 'paper' && computerChoice == 'rock')
//     {
//         console.log("You win! Paper beats Rock.");
//         humanScore += 1;                
//     }
//     else if(humanChoice == 'paper' && computerChoice == 'paper')
//     {
//         console.log("It is a tie! Paper and Paper.");               
//     }
//     else if(humanChoice == 'scissors' && computerChoice == 'paper')
//     {
//         console.log("You win! Scissors beats Paper.");
//         humanScore += 1;                    
//     }
//     else if(humanChoice == 'scissors' && computerChoice == 'rock')
//     {
//         console.log("You lose! Rock beats Scissors.");
//         computerScore += 1;                         
//     }
//     else if(humanChoice == 'scissors' && computerChoice == 'scissors')
//     {
//         console.log("It is a tie! Scissors and Scissors.");                                
//     }
    
// };

// //console.log(playRound(getHumanChoice(), getComputerChoice()))

// let playGame = () => {
//     humanScore = 0;
//     computerScore = 0;
//     console.log("Game has begun");
//     for(let i = 0; i < 5; i++)
//     {
//         console.log(playRound(getHumanChoice(), getComputerChoice()));
//     }

//     if(humanScore > computerScore)
//     {
//         console.log("You win the game!!! " + humanScore + " to " +computerScore);
//     }
//     else if(humanScore < computerScore)
//     {
//         console.log("You lost the game. Machines RULE!!! " + humanScore + " to " +computerScore);
//     }
//     else{
//         console.log("Tie game. " + humanScore + " to " +computerScore);
//     }
// };

// console.log(playGame());