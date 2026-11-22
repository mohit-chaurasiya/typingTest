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

const isCharSame = function (char, sentence, sentenceProp) {
    return isEqual(char, sentence.at(sentenceProp.sentenceIndex));
};
const updateInput = function (sentence, inputText, sentenceProp) {
    let key = r.GetCharPressed();
    const char = String.fromCharCode(key);

    while (key > 0) {
        const isAlphanumeric = key >= 32 && key <= 122;
        const isInputLengthLimit = inputText.length < sentence.length;

        if (!isCharSame(char, sentence, sentenceProp) && isInputLengthLimit) {
            sentenceProp.mismatch += 1;
        }

        if (isAlphanumeric && isInputLengthLimit) {
            inputText += char;
            sentenceProp.sentenceIndex += 1;
        }

        key = r.GetCharPressed();
    }

    return inputText;
};

const handleBackspace = function (inputText) {
    return inputText.slice(0, -1);
};

const update = function (sentence, inputText, sentenceProp) {
    inputText = updateInput(sentence, inputText, sentenceProp);

    if (r.IsKeyPressed(r.KEY_BACKSPACE) && inputText.length > 0) {
        inputText = handleBackspace(inputText);
        sentenceProp.sentenceIndex -= 1;
    }

    return inputText;
};

module.exports = {
    createTextBox,
    draw,
    update,
};
