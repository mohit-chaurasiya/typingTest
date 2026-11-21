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
        const isAlphanumeric = key >= 48 && key <= 122;
        if (isAlphanumeric && inputText.length < sentence.length) {
            inputText += String.fromCharCode(key);
        }
        key = r.GetCharPressed();
    }

    return inputText;
};

module.exports = {
    createTextBox,
    draw,
    update,
};
