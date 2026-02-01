let boxes = document.querySelectorAll(".box");
let resetBtn= document.getElementById('reset-btn');
let newgameBtn= document.getElementById('new-button');
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg-win");


let turnO = true;

const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        box.style.color="red";
        turnO = false;
       }
       else{
        box.innerText="X";
         box.style.color="blue";
        turnO = true;
       }
       box.disabled= true;

       checkwinner();
    });
});

const checkwinner = ()=>{
    for(let pattern of winPattern){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;

        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val=== pos3Val){
                console.log("winner", pos1Val);

                showWinner(pos1Val);
                return;
            }
        }

    }
};

const showWinner=(winner)=>{
    msg.innerText= `congratulation winner is ${winner}`;
    msgcontainer.style.display="block";
    disableBoxes();
   
};

const disableBoxes =() =>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};

const resetGame = () => {
    turnO = true;
      enableBoxes();
    msgcontainer.style.display='none';
  

};

const enableBoxes =() =>{
    boxes.forEach((box)=>{
        box.disabled= false;
        box.innerText = "";
    })
     
};

newgameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener("click", resetGame )