// Wait for the DOM to finish loading before renning the game
// Ge the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () { // This function runs when the DOM has finished loading...
    let buttons = document.getElementsByTagName("button"); // Returns all button elements found as an array: HTMLCollection(5) [button.btn.btn--big.btn--green, button.btn.btn--big.btn--blue, button.btn.btn--big.btn--orange, button.btn.btn--big.btn--red, button.btn.btn--gray]

    for (let button of buttons) { // Iterates throught the button array and return each element in the array which will be stored in the variable: button
        button.addEventListener("click", function () { // When a button is clicked, the code inside thsi code block will run
            if (this.getAttribute("data-type") === "submit") { // 'this' refers to the button just clicked
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition"); // Runs when the page has finished loading...

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) { // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}
 /**
  * Checks thw answer against the first element in
  * the returned calculatedAnswer array
  */
function checkAnswer() {
    let userAnswer = parseInt(document.GetElementById("answer-box").value); // The value attribute is used because its an input element
    let calculatedAnswer = calculatedCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0]; // Cross-references the user input value against the correct answer (item 1: index 0 = [0]) to match

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`Awww... You answer ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`)
    }

    runGame(calculatedAnswer[1]); // Creates a new game when the alert message has been dismissed
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText); // Retrieves the value (innerText) from the element with the id of operand1
    let operand2 = parseInt(document.getElementById('operand2').innerText); // parseInt is used so the value is treated as an integer (whole number)
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; // Creates an array of 2 items - index 0: operand1 + operand 2, index 1: "addition"
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}, Aborting!`; // Throws an error if an operator cannot be identified
    }

}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator').textContent = "+";
    document.getElementById('operand2').textContent = operand2;
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
