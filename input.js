const r = require("raylib");
const { isEqual } = require("./geometry");

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

const isEqualWithChar = function (inputText, sentence) {
    for (let i = 0; i < inputText.length; i++) {
        if (!isEqual(inputText.at(i), sentence.at(i))) return false;
    }
    return true;
};

const update = function (sentence, inputText) {
    inputText = updateInput(sentence, inputText);

    const areSame = isEqualWithChar(inputText, sentence);
    console.log("Both are same: ", areSame);

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
