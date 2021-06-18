const parentDiv = document.querySelector(".wrapper");

parentDiv.addEventListener("click", toggleVisibility);

function toggleVisibility(e) {
  let target = e.target;
  if (target.matches(".box")) {
    if (target.dataset.visibility === "hidden") {
      target.innerHTML = target.dataset.number;
      target.dataset.visibility = "visible";
    } else {
      target.innerHTML = "";
      target.dataset.visibility = "hidden";
    }
  }
}
