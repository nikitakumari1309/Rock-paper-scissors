let rockP=document.querySelector(".rock-p");
let paperP=document.querySelector(".paper-p");
let scissorP=document.querySelector(".scissor-p");
let playerMarquee = document.querySelector(".playerTurnText-marquee");
let playerText = document.querySelector(".playerTurnText");

let playerChoice="";
let yourscore=0;
let computerscore=0;

function makeChoice(choice, element) {
     if (playerChoice === "") {
       playerChoice = choice;
       element.classList.add("circle", "glow");
       playerMarquee.style.display="none";
       playerText.style.display="block";
      }
 }

rockP.addEventListener("click", () => makeChoice("rock", rockP));
paperP.addEventListener("click", () => makeChoice("paper", paperP));
scissorP.addEventListener("click", () => makeChoice("scissor", scissorP));


let submit=document.querySelector(".game");

let rockC=document.querySelector(".rock-c");
let paperC=document.querySelector(".paper-c");
let scissorC=document.querySelector(".scissor-c");
let computerMarquee = document.querySelector(".computerTurnText-marquee");
let computerText = document.querySelector(".computerTurnText");
let wonmsg = document.querySelector(".won-msg");
let loosemsg = document.querySelector(".loose-msg");
let drawmsg = document.querySelector(".draw-msg");
let yourPoints = document.querySelector(".your-points");
let computerPoints = document.querySelector(".computer-points");


function getRandomValue() {
   return Math.floor(Math.random() * 3) + 1;
}

let computerChoice=""; 
submit.addEventListener("click",()=>{
  computerMarquee.style.display="block";
  computerMarquee.classList.add("marquee-text");
  computerText.style.display="none";

  setTimeout(()=>{
    let value=getRandomValue();
    if(value===1){
    computerChoice="rock";
    rockC.classList.add("circle","glow");
  }
    else if (value===2){
    computerChoice="paper";
    paperC.classList.add("circle","glow");
    }
    else{
    computerChoice="scissor";   
    scissorC.classList.add("circle","glow");
  }
  },1000);

  setTimeout(()=>{
    //   console.log("p:",playerChoice,"c",computerChoice)
      if(playerChoice==="rock" && computerChoice=="paper"){
          loosemsg.style.visibility = "visible"; 
          computerscore++;
          computerPoints.innerText=computerscore;
      }
      else if(playerChoice==="rock" && computerChoice=="rock"){
          drawmsg.style.visibility = "visible"; 
      }
      else if(playerChoice==="rock" && computerChoice=="scissor"){
          wonmsg.style.visibility = "visible"; 
          yourscore++;
          yourPoints.innerText=yourscore;
      }

      if(playerChoice==="paper" && computerChoice=="scissor"){
          loosemsg.style.visibility = "visible"; 
          computerscore++;
          computerPoints.innerText=computerscore;
      }
      else if(playerChoice==="paper" && computerChoice=="paper"){
          drawmsg.style.visibility = "visible"; 
      }
      else if(playerChoice==="paper" && computerChoice=="rock"){
          wonmsg.style.visibility = "visible"; 
          yourscore++;
          yourPoints.innerText=yourscore;
      }

      if(playerChoice==="scissor" && computerChoice=="rock"){
          loosemsg.style.visibility = "visible"; 
          computerscore++;
          computerPoints.innerText=computerscore;
      }
      else if(playerChoice==="scissor" && computerChoice=="scissor"){
          drawmsg.style.visibility = "visible"; 
      }
      else if(playerChoice==="scissor" && computerChoice=="paper"){
          wonmsg.style.visibility = "visible"; 
          yourscore++;
          yourPoints.innerText=yourscore;
      }

  },2000)

  setTimeout(()=>{
  playerChoice="";
  computerChoice="";
  rockC.classList.remove("circle","glow");
  paperC.classList.remove("circle","glow");
  scissorC.classList.remove("circle","glow");
  rockP.classList.remove("circle","glow");
  paperP.classList.remove("circle","glow");
  scissorP.classList.remove("circle","glow");
  wonmsg.style.visibility = "hidden"; 
  drawmsg.style.visibility = "hidden"; 
  loosemsg.style.visibility = "hidden"; 
  computerMarquee.style.display="none";
  computerText.style.display="block";
},5000)
})