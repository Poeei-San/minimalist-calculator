// Toggle between light and dark mode
document.getElementById('themeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator-section').classList.toggle('dark-mode');
    document.querySelector('.calculator-display').classList.toggle('dark-mode');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.toggle('dark-mode'));
    
    // Change the image based on the theme
    const calculatorImage = document.getElementById('calculatorImage');
    if (this.checked) {
        calculatorImage.src = "./image/background-darkmode.png";
    } else {
        calculatorImage.src = "./image/background-lightmode.png";
    }
});

// Append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '0';
    } catch {
        display.value = 'Error';
    }
}