const r = require("raylib");

const createTextBox = function ({ color, ...dimension }) {
    return {
        dim: { ...dimension },
        color,
    };
};

const draw = function ({ dim, color }) {
    r.DrawRectangleRec(dim, color);
};

const updateInput = function (sentence, inputText) {
    let key = r.GetCharPressed();
    while (key > 0) {
        const isAlphanumeric = key >= 32 && key <= 122;
        if (isAlphanumeric && inputText.length < sentence.length) {
            inputText += String.fromCharCode(key);
        }
        key = r.GetCharPressed();
    }

    return inputText;
};

const handleBackspace = function (inputText) {
    return inputText.slice(0, -1);
};

const update = function (sentence, inputText) {
    inputText = updateInput(sentence, inputText);

    if (r.IsKeyPressed(r.KEY_BACKSPACE) && inputText.length > 0) {
        inputText = handleBackspace(inputText);
    }

    return inputText;
};

module.exports = {
    createTextBox,
    draw,
    update,
};
