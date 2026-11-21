const r = require("raylib");
const s = require("./sentence");

const createTextBox = function ({ color, ...dimension }) {
    return {
        dim: { ...dimension },
        color,
    };
};

const draw = function ({ dim, color }) {
    r.DrawRectangleRec(dim, color);
};

const update = function (sentence, inputText) {
    let key = r.GetCharPressed();
    while (key > 0) {
        const isAlphanumeric = (key >= 48 && key <= 122) || key === 32;
        if (isAlphanumeric && inputText.length < sentence.length) {
            inputText += String.fromCharCode(key);
        }
        key = r.GetCharPressed();
    }

    if (r.IsKeyPressed(r.KEY_BACKSPACE) && inputText.length > 0) {
        inputText = inputText.slice(0, -1);
    }

    return inputText;
};

module.exports = {
    createTextBox,
    draw,
    update,
};
