// Wait for the DOM to finish loading before renning the game
// Ge the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { // This function runs when the DOM has finished loading...
    let buttons = document.getElementsByTagName("button"); // Returns all button elements found as an array: HTMLCollection(5) [button.btn.btn--big.btn--green, button.btn.btn--big.btn--blue, button.btn.btn--big.btn--orange, button.btn.btn--big.btn--red, button.btn.btn--gray]

    for (let button of buttons) { // Iterates throught the button array and return each element in the array which will be stored in the variable: button
        button.addEventListener("click", function() { // When a button is clicked, the code inside thsi code block will run
            if (this.getAttribute("data-type") === "submit") { // 'this' refers to the button just clicked
                alert("You clicked Submit!"); // if button === submit, this alert will display
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }

})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

