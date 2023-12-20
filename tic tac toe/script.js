let  boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_button");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO = true;//playerx, playerO


const winPt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]


];

const resetGame = () => {
    turnO = true;
    enabledBoxs();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
      
        if(turnO) {
            box.innerText ="O";
            turnO = false;
        }else{
            box.innerText ="X"; 
            turnO = true;

        }
        box.disabled = true;
        checkWinr();
    });
});



const disabledBoxs = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxs = () => {
    for(let box of boxes) {
        box.disabled = true;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxs();
}


const checkWinr = () => {
    for(let pattern of winPt) {
            let pos1val =  boxes[pattern[0]].innerText;
            let pos2val =  boxes[pattern[1]].innerText;
            let pos3val =  boxes[pattern[2]].innerText;
            if(pos1val != "" && pos2val != "" && pos3val != "") {
                if(pos1val === pos2val && pos2val === pos3val){
                    
                    showWinner(pos1val);
                }
            }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);