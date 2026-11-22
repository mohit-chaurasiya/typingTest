const r = require("raylib");
const { randomNumber } = require("./geometry");

// const wrapText = function (sentence, length) {
//     const words = sentence.split(" ");
//     const sentences = [];
//     let currentSentence = "";

//     for (const word of words) {
//         const wordLength = word.length;

//         if (wordLength + currentSentence.length > length) {
//             sentences.push(currentSentence.trim());
//             currentSentence = word;
//         } else {
//             currentSentence += word + " ";
//         }
//     }

//     return sentences;
// };

const generateRandomSentence = function (words) {
    let sentence = "";
    const space = " ";
    const pos = Math.floor(randomNumber(0, words.length));
    sentence += words[pos].concat(space);

    return sentence;
};

const getSentence = function (words) {
    const rawSentence = generateRandomSentence(words);
    // const wrappedText = wrapText(rawSentence, 100);
    return rawSentence;
};

const create = function ({ data, font, x, y, color }) {
    return {
        data,
        font,
        x,
        y,
        color,
    };
};

const draw = function (sentence) {
    const { data, x, font, color } = sentence;
    let y = 20;
    r.DrawText(data, x, y, font, color);
};

module.exports = {
    create,
    draw,
    getSentence,
};
