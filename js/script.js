const celciusInput = document.getElementById("celcius");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const reverseBtn = document.getElementById("reverseBtn");
const resultContainer = document.getElementById("result");
const calculationContainer = document.getElementById("calculation");
const reverseLink = document.getElementById("reverseLink");
const unitCelsius = document.querySelectorAll(".unit");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function validateInput(input) {
    if (isNaN(input)) {
        alert("Input harus berupa angka!");
        return false;
    }
    return true;
}

function convertHandler() {
    const celcius = parseFloat(celciusInput.value);
    if (validateInput(celcius)) {
        const fahrenheit = celsiusToFahrenheit(celcius);
        const calculation = `(${celcius} °C) * (9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
        resultContainer.textContent = `${fahrenheit.toFixed(2)} °F`;
        calculationContainer.textContent = calculation;
    }
}




function resetHandler() {
    celciusInput.value = "";
    resultContainer.textContent = "";
    calculationContainer.textContent = "";
}

function reverseHandler() {
    const celcius = parseFloat(celciusInput.value);
    if (validateInput(celcius)) {
        const celsius = fahrenheitToCelsius(celcius);
        const calculation = `(${celcius} °F - 32) * (5/9) = ${celsius.toFixed(2)} °C`;

        resultContainer.textContent = `${celsius.toFixed(2)} °C`;
        calculationContainer.textContent = calculation;
        unitCelsius.forEach(unit => {
            unit.textContent = "Celsius (°C)";
        });
        reverseLink.textContent = "Celsius (°C) ke Fahrenheit (°F)";
    }
}

convertBtn.addEventListener("click", convertHandler);
resetBtn.addEventListener("click", resetHandler);
reverseBtn.addEventListener("click", reverseHandler);
reverseLink.addEventListener("click", function(e) {
    e.preventDefault();
    reverseHandler();
});