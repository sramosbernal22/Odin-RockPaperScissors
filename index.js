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

console.log(getComputerChoice())