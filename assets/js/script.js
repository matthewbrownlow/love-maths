// Wait for the DOM to finish loding before running the game
// Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clikced Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been proceeded
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAsnwer() {
}

function displayAdditionQuestion() {
}

function displaySubtractQuestion() {
}

function displayMultiplyQuestion() {
}

