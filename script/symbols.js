const FIRST_LINE_SYMBOLS = Array.from([
    {
        'default': '`',
        'shift': '~',
        'ru': 'ё',
    },
    {
        'default': '2',
        'shift': '@',
    },
    {
        'default': '3',
        'shift': '#',
    },
    {
        'default': '4',
        'shift': '$',
    },
    {
        'default': '5',
        'shift': '%',
    },
    {
        'default': '6',
        'shift': '^',
    },
    {
        'default': '7',
        'shift': '&',
    },
    {
        'default': '8',
        'shift': '*',
    },
    {
        'default': '9',
        'shift': '(',
    },
    {
        'default': '0',
        'shift': ')',
    },
    {
        'default': '-',
        'shift': '_',
    },
    {
        'default': '=',
        'shift': '+',
    },
    {
        'default': 'backspace',
    },
])

const SECOND_LINE_SYMBOLS = Array.from([
    {
        'default': 'tab',
    },
    {
        'en': 'q',
        'ru': 'й',
    },
])

export { FIRST_LINE_SYMBOLS, SECOND_LINE_SYMBOLS }; // список экспортируемых переменных