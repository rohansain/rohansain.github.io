let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".option");
const userScorePara=document.querySelector(".userScore");
const compScorePara=document.querySelector(".computerScore");
const gameMsg = document.querySelector(".gameMsg");
const getComChoice =()=>{
    let choose = ["rock","paper","scissors"];
    let num = Math.floor(Math.random()*3);
    return choose[num];
}
const drawGame=()=>{
    gameMsg.innerText="Game is Draw";
    gameMsg.setAttribute("style","background-color:black;");
}
const showWinner=(userChoice,computerChoice,userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        gameMsg.innerText=`User choice ${userChoice} beats computer Choice ${computerChoice}`;
        gameMsg.setAttribute("style","background-color:green;");
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        gameMsg.innerText=`computer choice ${computerChoice} beats user Choice ${userChoice}`;
        gameMsg.setAttribute("style","background-color:red;");
    }
}
const playGame = (userChoice)=>{
    const computerChoice = getComChoice();
    // console.log(userChoice," ",computerChoice);
    let userWin=true;
    if(userChoice===computerChoice){
        drawGame();
        return
    }
    else if(userChoice=="rock" && computerChoice=="paper"){
        userWin=false;
    }
    else if(userChoice=="paper" &&computerChoice=="scissors"){
        userWin=false;
    }
    else if(userChoice=="scissors" && computerChoice=="rock"){
        userWin=false;
    }
    showWinner(userChoice,computerChoice,userWin);
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoiceId = choice.getAttribute("name");
        playGame(userChoiceId);
    })
})