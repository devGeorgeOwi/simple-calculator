// Select the buttons and display screen classes and elements
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display__screen");

// Add EventListener and loop through each button
buttons.forEach(button => {
	button.addEventListener("click", calculate);
});

// we make use of eval function to calculate the various operators
function calculate(event) {
	// create and assign clicked buttons to the event
	const selectedButton = event.target.value;

	// check if the display screen is not empty before proceed with calculate function
	if (selectedButton === "=") {
		if (display.value !== "") {
			display.value = eval(display.value);
		}
		// check if C clear buttonis clicked, then clear the display
	} else if (selectedButton === "C") {
		display.value = "";
	} else {
		// add the display value to the button clicked
		display.value += selectedButton;
	}
}
