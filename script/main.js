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
    INFO.innerHTML = 'left shift + alt to change the language<br><br>developed on Windows OS';

    let i;

    class Key {
        constructor(symbols) {
            if (symbols[`${i}`].default !== undefined) {
                this.symbol = symbols[`${i}`].default;
                if (symbols[`${i}`].ru !== undefined) {
                    this.symbol = symbols[`${i}`].default;
                    this.ru = symbols[`${i}`].ru;
                    this.code = symbols[`${i}`].code;
                }
            } else {
                this.symbol = symbols[`${i}`].en;
                this.ru = symbols[`${i}`].ru;
                this.code = symbols[`${i}`].code;
            }
        }

    }

    for (i = 0; i < SYMBOLS.length; i++) {

        let newButton = new Key(SYMBOLS);

        let newKey = document.createElement('div');
        KEYBOARD.appendChild(newKey);
        newKey.innerHTML = newButton.symbol;

        if (newButton.symbol == '`' || newButton.symbol == 'Backspace' || newButton.symbol == 'Tab' || newButton.symbol == '\\' || newButton.symbol == 'Enter'
            || newButton.symbol == 'CapsLock' || newButton.symbol == 'Ctrl' || newButton.symbol == 'Alt' || newButton.symbol == 'Shift'
            || newButton.symbol == ' ' || newButton.symbol == 'Shift') {
            newKey.classList.add('side-key');
        } else {
            newKey.classList.add('key');
        }
        newKey.classList.add(`${newButton.code}`);
    }
}

function addPrintFunc() {
    const KEYS = document.querySelectorAll('.key');
    const TEXTAREA = document.querySelector('.textarea');

    function printSymbol(item) {
        TEXTAREA.focus();
        let letter = item.currentTarget.innerHTML;

        let cursorStart = TEXTAREA.selectionStart;
        let cursorEnd = TEXTAREA.selectionEnd;
        let currentText = TEXTAREA.value;

        let stringStart = currentText.substring(0, cursorStart);
        let stringEnd = currentText.substring(cursorEnd, currentText.length);

        TEXTAREA.value = stringStart + letter + stringEnd;

        cursorStart++;
        cursorEnd = cursorStart;
        TEXTAREA.setSelectionRange(cursorStart, cursorEnd);
        TEXTAREA.focus();
    }

    KEYS.forEach(item => {
        item.addEventListener('mousedown', printSymbol);
    });

    document.querySelector('.Backquote');
    document.querySelector('.Backslash');
}

document.addEventListener('keydown', function (event) {
    /* virtual keyboard animation when using real keyboard */
    document.querySelector('.textarea').focus();

    let keycode = event.code;
    if (keycode == 'Tab' || keycode == 'AltLeft' || keycode == 'AltRight') {
        event.preventDefault();
    }
    let keyClass = document.querySelector(`.${keycode}`).classList;
    if (keyClass.contains('key')) {
        keyClass.add('key-pressed');
    } else {
        keyClass.add('side-key-pressed');
    }

    document.addEventListener('keyup', function () {
        if (keyClass.contains('key')) {
            keyClass.remove('key-pressed');
        } else {
            keyClass.remove('side-key-pressed');
        }
    });
});

addMarkup();
addPrintFunc();