function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const divRef = document.querySelector("#boxes");

// console.log(inputRef);
// console.log(btnCreateRef);
// console.log(btnDestroyRef);
// console.log(divRef);

inputRef.addEventListener("input", onInputRefChange);
btnCreateRef.addEventListener("click", onBtnCreateRefClick);
btnDestroyRef.addEventListener("click", onBtnDestroyRefClick);

let amount;
let size = 30;

function onInputRefChange(event) {
	amount = event.currentTarget.value;
	// console.log(amount);
}

function createBoxes(amount) {
	for (let index = 1; index <= amount; index++) {
		const box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();

		divRef.append(box);

		size += 10;
		// console.log(box);
	}
}

function onBtnCreateRefClick(event) {
	if (amount >= 1 && amount <= 100) {
		createBoxes(amount);
		// console.log(createBoxes(amount));
	}
}

function onBtnDestroyRefClick(event) {
	inputRef.value = "";
	divRef.innerHTML = "";
	size = 30;
}
