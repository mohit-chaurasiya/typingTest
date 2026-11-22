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

const updateInput = function (sentence, inputText, key, world) {
    while (key > 0) {
        if (
            !isEqual(
                String.fromCharCode(key),
                world.sentence.data.at(world.sentenceIndex),
            ) &&
            inputText.length < sentence.length
        ) {
            world.mismatch += 1;
        }

        const isAlphanumeric = key >= 32 && key <= 122;
        if (isAlphanumeric && inputText.length < sentence.length) {
            inputText += String.fromCharCode(key);
            world.sentenceIndex += 1;
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

const update = function (world) {
    const key = r.GetCharPressed();
    world.inputText = updateInput(
        world.sentence.data,
        world.inputText,
        key,
        world,
    );

    if (r.IsKeyPressed(r.KEY_BACKSPACE) && world.inputText.length > 0) {
        world.inputText = handleBackspace(world.inputText);
        world.sentenceIndex -= 1;
    }

    return world.inputText;
};

module.exports = {
    createTextBox,
    draw,
    update,
};
