console.log("Hello World");

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

//console.log(getComputerChoice())

let getHumanChoice = () => {
    while(true){
        let choice = prompt("Pick 'rock', 'paper' or 'scissors'");
        if(choice.toLowerCase() == 'rock')
        {
            return 'rock';
        }
        else if(choice.toLowerCase() == 'paper')
        {
            return 'paper';
        }
        else if(choice.toLowerCase() == 'scissors')
        {
            return 'scissors';
        }
        else{
            console.log("Pick a valid option.")
        }
    }
     
};

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if(humanChoice == 'rock' && computerChoice == 'paper')
    {
        console.log("You lose! Paper beats Rock.");
        computerScore += 1;
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors')
    {
        console.log("You win! Rock beats Scissors.");
        humanScore += 1;
    }
    else if(humanChoice == 'rock' && computerChoice == 'rock')
    {
        console.log("It is a tie! Rock and Rock.");

    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors')
    {
        console.log("You lose! Scissors beats Paper.");
        computerScore += 1;           
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock')
    {
        console.log("You win! Paper beats Rock.");
        humanScore += 1;                
    }
    else if(humanChoice == 'paper' && computerChoice == 'paper')
    {
        console.log("It is a tie! Paper and Paper.");               
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper')
    {
        console.log("You win! Scissors beats Paper.");
        humanScore += 1;                    
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock')
    {
        console.log("You lose! Rock beats Scissors.");
        computerScore += 1;                         
    }
    else if(humanChoice == 'scissors' && computerChoice == 'scissors')
    {
        console.log("It is a tie! Scissors and Scissors.");                                
    }
    
};

//console.log(playRound(getHumanChoice(), getComputerChoice()))

let playGame = () => {
    humanScore = 0;
    computerScore = 0;
    console.log("Game has begun");
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    if(humanScore > computerScore)
    {
        console.log("You win the game!!! " + humanScore + " to " +computerScore);
    }
    else if(humanScore < computerScore)
    {
        console.log("You lost the game. Machines RULE!!! " + humanScore + " to " +computerScore);
    }
    else{
        console.log("Tie game. " + humanScore + " to " +computerScore);
    }
};

console.log(playGame());