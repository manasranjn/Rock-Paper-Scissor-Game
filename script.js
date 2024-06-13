//Score for output
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");    //all choices
let msg = document.querySelector("#msg");   //Message
let userScoreOutPut = document.querySelector("#user-score");    //User Score Variable
let compScoreOutPut = document.querySelector("#comp-score");    //Computer Score Variable

//Auto Generate Choices for Computer
const genCompChoices = () =>{
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};

//Show Winner Function
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){    //User Win
        msg.innerText = `You Win. Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "#059212";
        userScore++;    // User Score Updation
        userScoreOutPut.innerText = userScore;  //Print User Score
    }
    else{   //Computer Win
        msg.innerText = `You Loose. Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#C80036";
        compScore++;    //Computer Score Updation
        compScoreOutPut.innerText = compScore;  //Print Computer Score
    }
};

//Game Draw Function
const drawGame = () =>{
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#333A73";
};

//Play Game Function to Find who's Winner
const playGame = (userChoice) =>{
    const compChoice = genCompChoices();    //Fetch Computer's Auto-generate Choice

    if(userChoice === compChoice){  //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            //rock, scissors
            if(compChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            //rock, paper
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//Add Event Listener On-Click
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})