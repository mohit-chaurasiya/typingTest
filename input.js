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

const createChar = function (char, x, y, fontSize, color) {
    return {
        char,
        x,
        y,
        fontSize,
        color,
    };
};

const drawCharacter = function (inputText) {
    for (const elem of inputText) {
        r.DrawText(elem.char, elem.x, elem.y, elem.fontSize, elem.color);
    }
};

const isCharSame = function (char, sentence, sentenceProp) {
    return isEqual(char, sentence.at(sentenceProp.sentenceIndex));
};

const updateInput = function (sentence, inputText, sentenceProp, word) {
    let key = r.GetCharPressed();
    const char = String.fromCharCode(key);

    while (key > 0) {
        const isAlphanumeric = key >= 32 && key <= 122;
        const isInputLengthLimit = inputText.length < sentence.length;
        let color = r.BLACK;

        if (!isCharSame(char, sentence, sentenceProp) && isInputLengthLimit) {
            sentenceProp.mismatch += 1;
            color = r.RED;
        }
        const textWidth = r.MeasureText(word.inputWord, 24);

        if (isAlphanumeric && isInputLengthLimit) {
            inputText.push(createChar(char, 20 + textWidth, 150, 24, color));
            word.inputWord += char;
            sentenceProp.sentenceIndex += 1;
        }

        key = r.GetCharPressed();
    }

    return inputText;
};

const handleBackspace = function (inputText) {
    inputText.pop();
    return inputText;
};

const update = function (sentence, inputText, word, sentenceProp) {
    inputText = updateInput(sentence, inputText, sentenceProp, word);

    if (r.IsKeyPressed(r.KEY_BACKSPACE) && inputText.length > 0) {
        inputText = handleBackspace(inputText);
        word.inputWord = word.inputWord.slice(0, -1);
        sentenceProp.sentenceIndex -= 1;
    }

    return inputText;
};

module.exports = {
    createTextBox,
    drawCharacter,
    draw,
    update,
};
