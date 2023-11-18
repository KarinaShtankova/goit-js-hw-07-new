const inputRef = document.querySelector("#name-input");
inputRef.addEventListener("input", onInputChange);

const outputRef = document.querySelector("#name-output");

function onInputChange(event) {
	const outputValue = event.currentTarget.value;
	if (outputRef.textContent === "" || outputValue === " ") {
		outputRef.textContent = "Anonymous";
	} else outputRef.textContent = outputValue.trim();
}
