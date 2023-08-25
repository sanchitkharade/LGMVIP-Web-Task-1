document.addEventListener("DOMContentLoaded", function () {
    const resultField = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;
            
            if (buttonText === "=") {
                try {
                    resultField.value = eval(resultField.value);
                } catch (error) {
                    resultField.value = "Error";
                }
            } else if (buttonText === "C") {
                resultField.value = "";
            } else {
                resultField.value += buttonText;
            }
        });
    });
});
