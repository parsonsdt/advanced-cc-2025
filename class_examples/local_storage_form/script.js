// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Save the value of the "name" input field to localStorage on keyup
    document.querySelector("#name").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("name", val);
    });

    // Save the selected color (radio button) to localStorage
    let radios = document.querySelectorAll('.radio');
    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            localStorage.setItem("color", this.value);
        });
    });

    // Save the selected font option to localStorage
    let fontOption = document.querySelector('#fontOption');
    fontOption.addEventListener('change', function () {
        localStorage.setItem("font", this.value);
    });

    // Save the selected spacing option (radio buttons) to localStorage
    let spacingOptions = document.querySelectorAll('.spacing-radio');
    spacingOptions.forEach(option => {
        option.addEventListener('change', function () {
            localStorage.setItem("spacing", this.value);
        });
    });

    // Save the selected button style to localStorage
    let buttonOption = document.querySelector('#buttonOption');
    buttonOption.addEventListener('change', function () {
        localStorage.setItem("button", this.value);
    });

    // Save the state of the "random message" checkbox to localStorage
    let randomMessage = document.querySelector('#randomMsg');
    randomMessage.addEventListener('change', function () {
        if (randomMessage.checked) {
            console.log("checked");
            localStorage.setItem("message", "checked");
        } else {
            console.log("unchecked");
            localStorage.setItem("message", "unchecked");
        }
    });

});