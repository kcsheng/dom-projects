const carouselElement = document.querySelector("#carousel-container");
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
let index = 0;
let selection = [
  "https://picsum.photos/300",
  "https://picsum.photos/301",
  "https://picsum.photos/302",
  "https://picsum.photos/303",
];

btnNext.addEventListener("click", forward);
btnPrev.addEventListener("click", backward);
carouselElement.addEventListener("click", gotoSite);

function forward(e) {
  e.stopPropagation();
  index++;
  if (index > 3) {
    index = 0;
  }
  carouselElement.style.backgroundImage = `url(${selection[index]})`;
}
function backward(e) {
  e.stopPropagation();
  index--;
  if (index < 0) {
    index = 3;
  }
  carouselElement.style.backgroundImage = `url(${selection[index]})`;
}

function gotoSite() {
  window.location.href = selection[index];
}
