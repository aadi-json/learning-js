const input=document.querySelector("#input");
const buttton=document.querySelector("#btn");
const display=document.querySelector("#display");
const wins=document.querySelector("#wins");


let answer=Math.floor(Math.random()*100+1)

let numGuess=0;

buttton.addEventListener("click",()=>{
    guessNumber();
})

function guessNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value) || input.value===""){
        display.innerHTML="please enter correct number";
    }else{
        numGuess++;
        wins.innerHTML= "No of wins :"+numGuess
    }
    if(input.value<answer)
        {
        display.innerHTML="the number is too less"
    }
    else if (input.value<answer)
        {
        display.innerHTML="the number is too high"
    }
    else
    {
        display.innerHTML="you guessed the right answer"
        resetGame()
        setInterval(()=>
            resetGame(),5000)
    }
}
function resetGame(){
    numGuess=0;
     answer=Math.floor(Math.random()*100+1);
    input.value="";
    wins.innerHTML="No of wins:0";
}