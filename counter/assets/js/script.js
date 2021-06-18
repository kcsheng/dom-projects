const downBtn = document.querySelector("#down-btn");
const upBtn = document.querySelector("#up-btn");
const numContainer = document.querySelector("#num-container");
let num = 0;
upBtn.addEventListener("click", add);
downBtn.addEventListener("click", subtract);
numContainer.innerHTML = num;

function add() {
  num++;
  numContainer.innerHTML = num;
}

function subtract() {
  if (num > 0) {
    num--;
    numContainer.innerHTML = num;
  }
}
