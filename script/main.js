//import { FIRST_LINE_SYMBOLS, SECOND_LINE_SYMBOLS } from './symbols.js';

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
}


// class Key {
//     constructor(en, ru,) {
//         this.name = name;
//     }
// }