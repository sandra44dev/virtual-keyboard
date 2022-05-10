'use strict';

import { SYMBOLS } from './symbols.js';

function addMarkup() {
    const WRAPPER = document.createElement("div");
    document.body.appendChild(WRAPPER);
    WRAPPER.classList.add('wrapper');

    const TEXTAREA = document.createElement("textarea");
    WRAPPER.appendChild(TEXTAREA);
    TEXTAREA.setAttribute('placeholder', 'time to type something...');
    TEXTAREA.setAttribute('autofocus', 'true');
    TEXTAREA.classList.add('textarea');

    const KEYBOARD = document.createElement("div");
    WRAPPER.appendChild(KEYBOARD);
    KEYBOARD.classList.add('keyboard');

    const INFO = document.createElement("p");
    WRAPPER.appendChild(INFO);
    INFO.classList.add('info');
    INFO.innerHTML = 'left ctrl + alt to change the language<br><br>developed on Windows OS';

    let i;

    class Key {
        constructor(symbols) {
            if (symbols[`${i}`].default !== undefined) {
                this.symbol = symbols[`${i}`].default;
                this.shift = symbols[`${i}`].shift;
                if (symbols[`${i}`].ru !== undefined) {
                    this.symbol = symbols[`${i}`].default;
                    this.ru = symbols[`${i}`].ru;
                    this.code = symbols[`${i}`].code;
                    this.shift = symbols[`${i}`].shift;
                }
            } else {
                this.symbol = symbols[`${i}`].en;
                this.ru = symbols[`${i}`].ru;
                this.code = symbols[`${i}`].code;
                this.shift = symbols[`${i}`].shift;
            }
        }

    }

    for (i = 0; i < SYMBOLS.length; i++) {

        let newButton = new Key(SYMBOLS);

        let newKey = document.createElement('div');
        KEYBOARD.appendChild(newKey);
        newKey.innerHTML = newButton.symbol;

        if (newButton.symbol == 'Backspace' || newButton.symbol == 'Tab' || newButton.symbol == 'Del'
            || newButton.symbol == 'Enter' || newButton.symbol == 'CapsLock' || newButton.symbol == 'Ctrl' || newButton.symbol == 'Alt'
            || newButton.symbol == ' ') {
            newKey.classList.add('side-key');
        } else if (newButton.symbol == 'Shift') {
            newKey.classList.add('side-key');
            newKey.classList.add('shift');
        }
        else if (newButton.symbol == '`' || newButton.code == 'ArrowLeft' || newButton.code == 'ArrowUp'
            || newButton.code == 'ArrowDown' || newButton.code == 'ArrowRight') {
            newKey.classList.add('side-key');
            newKey.classList.add('key');
        }
        else {
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

    document.querySelector('.Backquote').addEventListener('mousedown', printSymbol);
    document.querySelector('.Backslash').addEventListener('mousedown', printSymbol);
    document.querySelector('.Space').addEventListener('mousedown', printSymbol);
}






document.addEventListener('keydown', function (event) {
    /* virtual keyboard animation when using real keyboard */
    document.querySelector('.textarea').focus();

    let keycode = event.code;
    if (keycode == 'CapsLock') {
        addCaps();
    }
    else if (keycode == 'ShiftLeft' || keycode == 'ShiftRight') {
        addShift();
        event.target.addEventListener('keyup', removeShift);
    } else {
        if (keycode == 'AltLeft' || keycode == 'AltRight') {
            event.preventDefault();
        }
        if (keycode == 'Tab') {
            addTab();
            event.preventDefault();
        }
        let keyClass = document.querySelector(`.${keycode}`).classList;
        if (keyClass.contains('side-key')) {
            keyClass.add('side-key-pressed');
        } else {
            keyClass.add('key-pressed');
        }

        document.addEventListener('keyup', function () {
            if (keyClass.contains('side-key')) {
                keyClass.remove('side-key-pressed');
            } else {
                keyClass.remove('key-pressed');
            }
        });
    }
});

function addBackspace() {
    const TEXTAREA = document.querySelector('.textarea');

    TEXTAREA.focus();

    let cursorStart = TEXTAREA.selectionStart;
    let cursorEnd = TEXTAREA.selectionEnd;
    let currentText = TEXTAREA.value;

    let stringStart = currentText.substring(0, cursorStart - 1);
    let stringEnd = currentText.substring(cursorEnd, currentText.length);

    TEXTAREA.value = stringStart + stringEnd;

    cursorStart--;
    cursorEnd = cursorStart;
    TEXTAREA.setSelectionRange(cursorStart, cursorEnd);
    TEXTAREA.focus();
}

function addDel() {
    const TEXTAREA = document.querySelector('.textarea');

    TEXTAREA.focus();

    let cursorStart = TEXTAREA.selectionStart;
    let cursorEnd = TEXTAREA.selectionEnd;
    let currentText = TEXTAREA.value;

    let stringStart = currentText.substring(0, cursorStart);
    let stringEnd = currentText.substring(cursorEnd + 1, currentText.length);

    TEXTAREA.value = stringStart + stringEnd;

    cursorEnd = cursorStart;
    TEXTAREA.setSelectionRange(cursorStart, cursorEnd);
    TEXTAREA.focus();
}

function addTab() {
    const TEXTAREA = document.querySelector('.textarea');

    TEXTAREA.focus();
    let letter = '\t';

    let cursorStart = TEXTAREA.selectionStart;
    let cursorEnd = TEXTAREA.selectionEnd;
    let currentText = TEXTAREA.value;

    let stringStart = currentText.substring(0, cursorStart);
    let stringEnd = currentText.substring(cursorEnd, currentText.length);

    TEXTAREA.value = stringStart + letter + stringEnd;

    cursorStart = cursorStart + 1;
    cursorEnd = cursorStart;
    TEXTAREA.setSelectionRange(cursorStart, cursorEnd);
    TEXTAREA.focus();
}

function addEnter() {
    const TEXTAREA = document.querySelector('.textarea');

    TEXTAREA.focus();
    let letter = '\n';

    let cursorStart = TEXTAREA.selectionStart;
    let cursorEnd = TEXTAREA.selectionEnd;
    let currentText = TEXTAREA.value;

    let stringStart = currentText.substring(0, cursorStart);
    let stringEnd = currentText.substring(cursorEnd, currentText.length);

    TEXTAREA.value = stringStart + letter + stringEnd;

    cursorStart = cursorStart + 1;
    cursorEnd = cursorStart;
    TEXTAREA.setSelectionRange(cursorStart, cursorEnd);
    TEXTAREA.focus();
}

function addCaps() {
    const TEXTAREA = document.querySelector('.textarea');
    const KEYS = document.querySelectorAll('.key');

    if (document.querySelector('.CapsLock').classList.contains('side-key-pressed')) {
        KEYS.forEach(item => {
            let lowerCase = item.innerHTML.toLocaleLowerCase();
            item.innerHTML = lowerCase;
            document.querySelector('.CapsLock').classList.remove('side-key-pressed');
        });
    } else {
        KEYS.forEach(item => {
            let upperCase = item.innerHTML.toLocaleUpperCase();
            item.innerHTML = upperCase;
            document.querySelector('.CapsLock').classList.add('side-key-pressed');
        });
    }

    TEXTAREA.focus();
}

function addShift() {
    const TEXTAREA = document.querySelector('.textarea');
    const KEYS = document.querySelectorAll('.key');
    document.querySelector('.shift').classList.add('side-key-pressed');

    KEYS.forEach(item => {
        let upperCase = item.innerHTML.toLocaleUpperCase();
        item.innerHTML = upperCase;
    });

    for (let i = 0; i < 13; i++) {
        KEYS[i].innerHTML = SYMBOLS[i]['shift'];
    }


    TEXTAREA.focus();
}

function removeShift() {
    const TEXTAREA = document.querySelector('.textarea');
    const KEYS = document.querySelectorAll('.key');
    document.querySelector('.shift').classList.remove('side-key-pressed');

    KEYS.forEach(item => {
        let lowerCase = item.innerHTML.toLocaleLowerCase();
        item.innerHTML = lowerCase;
    });
    for (let i = 0; i < 13; i++) {
        KEYS[i].innerHTML = SYMBOLS[i]['en'];
    }

    TEXTAREA.focus();
}

addMarkup();
addPrintFunc();
document.querySelector('.Backspace').addEventListener('click', addBackspace);
document.querySelector('.Delete').addEventListener('click', addDel);
document.querySelector('.Tab').addEventListener('click', addTab);
document.querySelector('.Enter').addEventListener('click', addEnter);
document.querySelector('.CapsLock').addEventListener('click', addCaps);
document.querySelector('.ShiftLeft').addEventListener('mousedown', addShift);
document.querySelector('.ShiftRight').addEventListener('mousedown', addShift);
document.querySelector('.ShiftLeft').addEventListener('mouseup', removeShift);
document.querySelector('.ShiftRight').addEventListener('mouseup', removeShift);

localStorage.setItem('lang', 'en');

function newLayout() {

    let currentLang = localStorage.getItem('lang');

    if (currentLang == 'ru') {
        currentLang = 'en';
        changeLanguage(currentLang);
        localStorage.setItem('lang', 'en');

    } else if (currentLang == 'en') {
        currentLang = 'ru';
        changeLanguage(currentLang);
        localStorage.setItem('lang', 'ru');
    }

    console.log(currentLang);
    changeLanguage(currentLang);
}



function changeLanguage(language) {
    const KEYS = document.querySelectorAll('.key');

    for (let i = 0; i < KEYS.length; i++) {

        let searchTerm = KEYS[i].innerHTML;

        if (language == 'en') {
            let currentObj = SYMBOLS.find(item => item.en === searchTerm);
            if (currentObj.ru !== undefined) {
                KEYS[i].innerHTML = currentObj.ru;
            }
        } else if (language == 'ru') {
            let currentObj = SYMBOLS.find(item => item.ru === searchTerm);
            if (currentObj !== undefined) {
                KEYS[i].innerHTML = currentObj.en;
            }
        }

    }
}



function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();

        newLayout();
    });

    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });

}

runOnKeys(
    newLayout(),
    "AltLeft",
    "ControlLeft"
);