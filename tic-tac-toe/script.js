const gameCells=document.querySelectorAll(".cell");
const player1=document.querySelector(".player1");
const player2=document.querySelector(".player2");
const resetBtn=document.querySelector(".reset-btn");

//Making Variable

let currentPlayer= "X";
let nextPlayer= "O";
 
let playerTurn=currentPlayer;  

// Function to start the game

const startGame = () =>{
    gameCells.forEach(cell =>{
        cell.addEventListener("click", (e)=>{
            if(e.target.textContent==="")  
            { 
                e.target.textContent=playerTurn;
                if(checkWin()){
                    console.log(`${playerTurn}is a winner`);
                }
                changePlayerTurn();
            }  
        });
    });
}

//Change playerr change

const changePlayerTurn = () => {
// if(playerTurn===currentPlayer){
//     playerTurn=nextPlayer;
// }
// else{
//     playerTurn=currentPlayer;
// }
playerTurn=playerTurn===currentPlayer? nextPlayer:currentPlayer;
}

//Function to check win

const checkWin=()=>{
    const winningCondition=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<winningCondition.length;i++){
        const [pos1,pos2,pos3]=winningCondition[i];
        if(gameCells[pos1].textContent===gameCells[pos2].textContent && gameCells[pos2].textContent===gameCells[pos3].textContent  ){
            return true;
        }
    }
    return false;
}
startGame();
