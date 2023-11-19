const inputRef = document.querySelector("#name-input");
inputRef.addEventListener("input", onInputChange);

const outputRef = document.querySelector("#name-output");

function onInputChange(event) {
	const outputValue = event.currentTarget.value;
	if (outputValue.trim() !== "") {
		outputRef.textContent = outputValue.trim();
	} else  {
		outputRef.textContent = "Anonymous";
	} 
}
