function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const body = document.querySelector("body");

btnRef.addEventListener("click",  onBtnRefClick);

function onBtnRefClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
  console.log(spanRef);
}