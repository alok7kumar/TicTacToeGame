let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function showWinner(value) {
    msg.innerText = `Congratulations, winner is ${value}`;
    msgContainer.classList.remove("hide");  //JS will remove hide class functioning in css part
    disableBoxes();     //After a win, it disables all buttons to prevent further clicks.
}

function disableBoxes() {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

function enableBoxes() {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x-style", "o-style");
    });
}

function resetGame() {      //Clears all box values, enables buttons again, and removes win message.
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");     //Hides the message container
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o-style");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x-style");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
        }
    }
};

resetbtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

