document.getElementById("nameA").addEventListener("input", enableDisableCalculateButton);
document.getElementById("nameB").addEventListener("input", enableDisableCalculateButton);

function enableDisableCalculateButton() {
    var nameA = document.getElementById("nameA").value;
    var nameB = document.getElementById("nameB").value;
    var calculateButton = document.getElementById("calculateButton");

    if (nameA.trim() !== "" && nameB.trim() !== "") {
        calculateButton.disabled = false;
    } else {
        calculateButton.disabled = true;
    }
}

function calculateLove() {
    var a = document.getElementById("nameA").value;
    var b = document.getElementById("nameB").value;
    var n = Math.random();

    if ((a.toLowerCase().charAt(0) == "d" || a.toLowerCase().charAt(0) == "p") &&
        (b.toLowerCase().charAt(0) == "d" || b.toLowerCase().charAt(0) == "p")) {
        var lovePercentage = Math.floor(n * 10) + 91;
        displayResult("Love percentage = " + lovePercentage + "% You're lucky!");
    } else {
        var per = Math.floor(n * 100) + 1;
        var message = "";

        if (per >= 90) {
            message = "God's gift";
        } else if (per >= 80 && per < 90) {
            message = "Happy life";
        }

        displayResult("Love percentage = " + per + "% " + message);
    }
}

function displayResult(message) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = message;
}