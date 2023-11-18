const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const formValues = event.target.elements;
	const email = formValues.email.value;
	const password = formValues.password.value;

	if (email === "" || password === "") {
		alert("All form fields must be filled in");
	} else {
		const formData = {
			email,
			password,
		};

		form.reset();
		console.log(formData);
	}
}
