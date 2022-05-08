'use strict';

import { SYMBOLS } from './symbols.js';

function addMarkup() {
    const WRAPPER = document.createElement("div");
    document.body.appendChild(WRAPPER);
    WRAPPER.classList.add('wrapper');

    const TEXTAREA = document.createElement("textarea");
    WRAPPER.appendChild(TEXTAREA);
    TEXTAREA.setAttribute('placeholder', 'time to type something...')
    TEXTAREA.classList.add('textarea');

    const KEYBOARD = document.createElement("div");
    WRAPPER.appendChild(KEYBOARD);
    KEYBOARD.classList.add('keyboard');

    const INFO = document.createElement("p");
    WRAPPER.appendChild(INFO);
    INFO.classList.add('info');
    INFO.innerHTML = 'alt + space to change the language<br><br>developed on Windows OS';

    let i;

    class Key {
        constructor(symbols) {
            if (symbols[`${i}`].default !== undefined) {
                this.symbol = symbols[`${i}`].default;
            } else {
                this.symbol = symbols[`${i}`].en;
            }
        }

    }

    for (i = 0; i < SYMBOLS.length; i++) {

        let newButton = new Key(SYMBOLS);

        let newKey = document.createElement('div');
        KEYBOARD.appendChild(newKey);
        newKey.innerHTML = newButton.symbol;

        if (newButton.symbol == '`' || newButton.symbol == 'backspace' || newButton.symbol == 'tab' || newButton.symbol == '\\' || newButton.symbol == 'enter' || newButton.symbol == 'caps lock' || newButton.symbol == 'ctrl' || newButton.symbol == 'alt') {
            newKey.classList.add('side-key');
        } else if (newButton.symbol == 'shift') {
            newKey.classList.add('side-key');
            newKey.classList.add('shift');
        } else if (newButton.symbol == ' ') {
            newKey.classList.add('key');
            newKey.classList.add('side-key');
            newKey.classList.add('space');
        } else { newKey.classList.add('key'); }
    }
}

function addPrintFunc() {
    const KEYS = document.querySelectorAll('.key');
    console.log(KEYS)
    const TEXTAREA = document.querySelector('.textarea');

    function printSymbol(letterKey) {
        TEXTAREA.focus();
        let letter = letterKey.currentTarget.innerHTML;

        let cursorStart = TEXTAREA.selectionStart;
        let cursorEnd = TEXTAREA.selectionEnd;
        let currentText = TEXTAREA.value;

        let stringStart = currentText.substring(0, cursorStart);
        let stringEnd = currentText.substring(cursorEnd, currentText.length);

        TEXTAREA.value = stringStart + letter + stringEnd;

        cursorStart++;
        cursorEnd = cursorStart;
        TEXTAREA.setSelectionRange(cursorStart, cursorEnd)
        TEXTAREA.focus();
        console.log('hi')
    }

    KEYS.forEach(item => {
        item.addEventListener('click', printSymbol)
    });
}
addMarkup();
addPrintFunc();
//document.body.onload = addPrintFunc;