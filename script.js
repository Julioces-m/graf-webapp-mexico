document.addEventListener("DOMContentLoaded", function() {
    // Referencias a los elementos
    const greenBox = document.getElementById("green-box");
    const greenHex = document.getElementById("green-hex");
    const greenSlider = document.getElementById("green-slider");

    const redBox = document.getElementById("red-box");
    const redHex = document.getElementById("red-hex");
    const redSlider = document.getElementById("red-slider");

    // Función para actualizar el color verde
    function updateGreenColor() {
        let greenValue = greenSlider.value;
        let newColor = `rgb(0, ${greenValue}, 0)`;
        greenBox.style.backgroundColor = newColor;
        greenHex.textContent = rgbToHex(0, greenValue, 0);
    }

    // Función para actualizar el color rojo
    function updateRedColor() {
        let redValue = redSlider.value;
        let newColor = `rgb(${redValue}, 0, 0)`;
        redBox.style.backgroundColor = newColor;
        redHex.textContent = rgbToHex(redValue, 0, 0);
    }

    // Función para convertir RGB a Hexadecimal
    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }

    // Event Listeners para los sliders
    greenSlider.addEventListener("input", updateGreenColor);
    redSlider.addEventListener("input", updateRedColor);
});
