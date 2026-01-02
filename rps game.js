let userScore=0;
let compScore=0;

const options =["rock","paper" ,"scissor"];

//genrate computer choice:
const genCompChoice=()=>{
    const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
console.log(randIdx);
}


let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         playGame(userChoice);
         
    });

});
//playGame:
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        document.querySelector(".msg").innerText = `It's a Draw! You both chose ${userChoice}`;
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "scissor" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        userScore++;
        document.querySelector(".msg").innerText = `You Win! You chose ${userChoice}, Computer chose ${compChoice}`;
    } else {
        compScore++;
        document.querySelector(".msg").innerText = `You Lose! You chose ${userChoice}, Computer chose ${compChoice}`;
    }
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;
};

let resetBtn=document.querySelector("#reset-btn");
resetBtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    document.querySelector("#user-score").innerText = 0;
    document.querySelector("#comp-score").innerText = 0;
    document.querySelector(".msg").innerText ="Play your Turn";
})