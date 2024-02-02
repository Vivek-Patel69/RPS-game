// I am making a rock paper scissors game with the help of html, javascript and css
let userScore=0;
let computerScore=0;

const chooses = document.querySelectorAll(".choose");
const msg =document.querySelector("#msg");

const yourScore= document.querySelector("#user-score");
const systemScore= document.querySelector("#computer-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
   const randomIndex= Math.floor(Math.random()*3);
   return options[randomIndex];
};

const drawGame = ()=>{
    msg.innerText=`Draw! Play Again`;
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin, userChoose,computerChoice) =>{
    if(userWin){
        userScore++;
        yourScore.innerText = userScore;
        msg.innerText=`You Win! your ${userChoose} beats ${computerChoice}`;
        msg.style.backgroundColor="green";

    }else{
        computerScore++;
        systemScore.innerText = computerScore;
        msg.innerText=`You Lose! ${computerChoice} beats your ${userChoose}`;
        msg.style.backgroundColor="red";
    }
}


const playGame=(userChoose)=>{
    console.log("user Choice = ", userChoose);
    //Generate compute choice -> 
    const computerChoice= genCompChoice();
    console.log("computer choice = ", computerChoice);

    if(userChoose===computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoose==="rock"){
            userWin = computerChoice ==="paper"? false : true;
        }
        else if(userChoose==="paper"){
            userWin = computerChoice ==="scissors"? false : true;
        }
        else{
            userWin = computerChoice ==="rock"? false : true;
        }
        showWinner(userWin, userChoose,computerChoice);
    }
};
chooses.forEach((choose)=>{
    choose.addEventListener("click",()=>{
        const userChoose = choose.getAttribute("id");
        playGame(userChoose);
    })
})