const key = document.querySelector("#keyPressed");
const keyCode = document.querySelector("#keyCode");
const eventStatus = document.querySelector("#eventStatus");

document.addEventListener("keydown", giveKeydownInfo);
document.addEventListener("keyup", giveKeyupInfo);

function giveKeydownInfo(e) {
  key.innerHTML = e.key;
  keyCode.innerHTML = e.code;
  eventStatus.innerHTML = "KEYDOWN";
}

function giveKeyupInfo(e) {
  eventStatus.innerHTML = "KEYUP";
}
