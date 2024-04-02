// Get the display element
const display = document.getElementById('display');

// Add event listeners to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;
    if (value === 'DEL') {
      deleteLast();
    } else if (value === '=') {
      calculate();
    } else if (value === 'AC') { // Added condition for AC button
      clearDisplay();
    } else {
      appendToDisplay(value);
    }
  });
});

function appendToDisplay(value) {
  // Replace ^ with ** for exponentiation
  if (value === '^') {
    value = '**';
  }
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function calculate() {
  let input = display.value;
  let result;

  try {
    // Use eval to evaluate the expression, but replace ^ with ** for exponentiation
    result = eval(input.replace(/\^/g, '**'));
  } catch (error) {
    result = 'Error';
  }

  display.value = result;
}
