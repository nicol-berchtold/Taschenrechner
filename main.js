"use strict";





function listenToKeys() {
    keys.addEventListener('click', (e) => {
        let key = e.target;
        let action = key.dataset.action;

        if (!action) {
            console.log("eine Ziffer wurde geklickt")
        }

        if ((action === '+') ||
            (action === '-') ||
            (action === '/') ||
            (action === '=')) {
            console.log('ein Rechenoperator wurde geklickt');
        }

        if (action == '.') {
            console.log('der Dezimalpunkt wurde geklickt');
        }
        if (action == 'clear') {
            console.log('Die Taste AC wurde geklickt');
        }

    })
}

listenToKeys();




function init() {
    updateDisplay();
    listenToKeys();
    //listenToKeyboard(); = optional
}