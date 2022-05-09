const SYMBOLS = Array.from([
    {
        en: '`', code: 'Backquote', ru: 'ё', shift: '~',
    },
    {
        en: '1', code: 'Digit1', shift: '!',
    },
    {
        en: '2', code: 'Digit2', shift: '@',
    },
    {
        en: '3', code: 'Digit3', shift: '#',
    },
    {
        en: '4', code: 'Digit4', shift: '$',
    },
    {
        en: '5', code: 'Digit5', shift: '%',
    },
    {
        en: '6', code: 'Digit6', shift: '^',
    },
    {
        en: '7', code: 'Digit7', shift: '&',
    },
    {
        en: '8', code: 'Digit8', shift: '*',
    },
    {
        en: '9', code: 'Digit9', shift: '(',
    },
    {
        en: '0', code: 'Digit0', shift: ')',
    },
    {
        en: '-', code: 'Minus', shift: '_',
    },
    {
        en: '=', code: 'Equal', shift: '+',
    },
    {
        en: 'Backspace', code: 'Backspace',
    },
    {
        en: 'Tab', code: 'Tab',
    },
    {
        en: 'q', code: 'KeyQ', ru: 'й',
    },
    {
        en: 'w', code: 'KeyW', ru: 'ц',
    },
    {
        en: 'e', code: 'KeyE', ru: 'у',
    },
    {
        en: 'r', code: 'KeyR', ru: 'к',
    },
    {
        en: 't', code: 'KeyT', ru: 'е',
    },
    {
        en: 'y', code: 'KeyY', ru: 'н',
    },
    {
        en: 'u', code: 'KeyU', ru: 'г',
    },
    {
        en: 'i', code: 'KeyI', ru: 'ш',
    },
    {
        en: 'o', code: 'KeyO', ru: 'щ',
    },
    {
        en: 'p', code: 'KeyP', ru: 'з',
    },
    {
        en: '[', code: 'BracketLeft', ru: 'х',
    },
    {
        en: ']', code: 'BracketRight', ru: 'ъ',
    },
    {
        en: '\\', code: 'Backslash',
    },
    {
        en: 'Del', code: 'Delete',
    },
    {
        en: 'CapsLock', code: 'CapsLock',
    },
    {
        en: 'a', code: 'KeyA', ru: 'ф',
    },
    {
        en: 's', code: 'KeyS', ru: 'ы',
    },
    {
        en: 'd', code: 'KeyD', ru: 'в',
    },
    {
        en: 'f', code: 'KeyF', ru: 'а',
    },
    {
        en: 'g', code: 'KeyG', ru: 'п',
    },
    {
        en: 'h', code: 'KeyH', ru: 'р',
    },
    {
        en: 'j', code: 'KeyJ', ru: 'о',
    },
    {
        en: 'k', code: 'KeyK', ru: 'л',
    },
    {
        en: 'l', code: 'KeyL', ru: 'д',
    },
    {
        en: ';', code: 'Semicolon', ru: 'ж',
    },
    {
        en: "'", code: 'Quote', ru: 'э',
    },
    {
        en: 'Enter', code: 'Enter',
    },
    {
        en: 'Shift', code: 'ShiftLeft',
    },
    {
        en: 'z', code: 'KeyZ', ru: 'я',
    },
    {
        en: 'x', code: 'KeyX', ru: 'ч',
    },
    {
        en: 'c', code: 'KeyC', ru: 'с',
    },
    {
        en: 'v', code: 'KeyV', ru: 'м',
    },
    {
        en: 'b', code: 'KeyB', ru: 'и',
    },
    {
        en: 'n', code: 'KeyN', ru: 'т',
    },
    {
        en: 'm', code: 'KeyM', ru: 'ь',
    },
    {
        en: ',', code: 'Comma', ru: 'б',
    },
    {
        en: '.', code: 'Period', ru: 'ю',
    },
    {
        en: '/', code: 'Slash', ru: '.',
    },
    {
        en: '⮙', code: 'ArrowUp',
    },
    {
        en: 'Shift', code: 'ShiftRight',
    },
    {
        en: 'Ctrl', code: 'ControlLeft',
    },
    {
        en: 'Alt', code: 'AltLeft',
    },
    {
        en: ' ', code: 'Space',
    },
    {
        en: 'Alt', code: 'AltRight',
    },
    {
        en: '⮘', code: 'ArrowLeft',
    },
    {
        en: '⮛', code: 'ArrowDown',
    },
    {
        en: '⮚', code: 'ArrowRight',
    },
    {
        en: 'Ctrl', code: 'ControlRight',
    },

])

export { SYMBOLS };