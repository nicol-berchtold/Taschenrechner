"use strict";

const keys = document.querySelector("#digits");
const display = document.querySelector("#display");
let displayNumber = null;
let firstNumber = null;
let waitingNumber = false;
let operator = null;

function calculate(zahl1, zahl2, operator) {
  if (operator === "+") {
    return zahl1 + zahl2;
  } else if (operator === "-") {
    return zahl1 - zahl2;
  } else if (operator === "/") {
    return zahl1 / zahl2;
  } else if (operator === "*") {
    return zahl1 * zahl2;
  }
  return zahl2;
}

function listenToKeys() {
  keys.addEventListener("click", (e) => {
    let key = e.target;
    let action = key.dataset.action;
    let num = key.dataset.value;

    if (!action) {
      console.log("eine Ziffer wurde geklickt");
      console.log(inputNum(num));
      displayUpdate();
    }

    if (
      action === "+" ||
      action === "-" ||
      action === "/" ||
      action === "=" ||
      action === "*"
    ) {
      console.log("ein Rechenoperator wurde geklickt");
      waitingOperator(action);
      displayUpdate();
    }

    if (action == ".") {
      console.log("der Dezimalpunkt wurde geklickt");
      komma();
      displayUpdate();
    }
    if (action == "clear") {
      console.log("Die Taste AC wurde geklickt");
      reset();
      displayUpdate();
    }
  });
}

listenToKeys();

function inputNum(x) {
  if (waitingNumber) {
    displayNumber = x;
    waitingNumber = false;
  } else {
    displayNumber =
      displayNumber == null ? (displayNumber = x) : (displayNumber += x);
  }

  return displayNumber;
}

function displayUpdate() {
  display.textContent = displayNumber;
}

function waitingOperator(x) {
  if (firstNumber == null) {
    firstNumber = parseFloat(displayNumber);
  } else if (operator) {
    const ergebnis = calculate(+firstNumber, +displayNumber, operator);
    console.log(firstNumber, displayNumber);
    firstNumber = ergebnis;
    displayNumber = parseFloat(ergebnis);
  }

  waitingNumber = true;
  operator = x;
}

function komma() {
  if (!displayNumber.includes(".")) {
    displayNumber += ".";
  }
}

function reset() {
  displayNumber = null;
  (firstNumber = null), (waitingNumber = false);
  operator = null;
}
