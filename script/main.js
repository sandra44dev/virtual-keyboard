import { FIRST_LINE_SYMBOLS } from './symbols.js';

document.body.onload = addMarkup;
function addMarkup() {
    const WRAPPER = document.createElement("div");
    document.body.appendChild(WRAPPER);
    WRAPPER.classList.add('wrapper');

    const TEXTAREA = document.createElement("textarea");
    WRAPPER.appendChild(TEXTAREA);
    TEXTAREA.setAttribute('placeholder', 'time to type something...')

    const KEYBOARD = document.createElement("div");
    WRAPPER.appendChild(KEYBOARD);
    KEYBOARD.classList.add('keyboard');

    let i;

    class Key {
        constructor(symbols) {
            this.symbol = symbols[`${i}`].default;
            this.HTML = '<div class = "key"></div>'
        }

    }

    for (i = 0; i < FIRST_LINE_SYMBOLS.length; i++) {

        let x = new Key(FIRST_LINE_SYMBOLS);

        let newKey = document.createElement('div');
        KEYBOARD.appendChild(newKey);
        newKey.classList.add('key');
        newKey.innerHTML = x.symbol;

        console.log(x.symbol);

        if (x.symbol == '`' || x.symbol == 'backspace') {
            newKey.classList.add('side-key');
        }

    }
}

