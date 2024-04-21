function pow() {
  // Get the number and power values from the input fields
  let numberInput = parseFloat(document.getElementById("numberInput").value); //function parseFloat() is used for input values to numbers. This ensures that the input values are treated as numbers even if they are entered as strings.
  let power = parseFloat(document.getElementById("power").value);

  // Check if the input values are valid numbers
  if (isNaN(numberInput) || isNaN(power)) {
    document.getElementById("output").innerHTML =
      "Please enter valid numbers for both number and power.";
    return; // Exit the function if input values are not valid
  }

  // Raising the number to the power
  let respow = 1;
  if (power >= 1) {
    for (let i = 0; i < power; i++) {
      respow *= numberInput;
    }
  } else {
    for (let i = 0; i < -power; i++) {
      respow /= numberInput;
    }
  }

  // Display the result in the output div
  document.getElementById("output").innerHTML = respow;
}
