let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;           //playerX, plyerO

const winPaterrns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7], 
    [2,5,8],
    [2,4,6], 
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
     
        if(turnO){                      //plyerO
        box.innerText = "O";
        turnO = false;
        }else{
            box.innerText = "X";        //plyerX
            turnO=true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes = () =>
{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const reStartGame = () => {
    turnO = false;
    enableboxes();
    msgContainer.classList.add("hide");
}

const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(patterns of winPaterrns){
      let pos1Val = boxes[patterns[0]].innerText;
      let pos2Val = boxes[patterns[1]].innerText;
      let pos3Val = boxes[patterns[2]].innerText;

      if(pos1Val!=""  && pos2Val!=""  &&  pos2Val!="" ){
        if(pos1Val === pos2Val  && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
      }
    }


};

newGameBtn.addEventListener("click", reStartGame);
resetBtn.addEventListener("click", reStartGame);
