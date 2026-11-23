const isEqual = function (userInput, stringInput) {
    return userInput === stringInput;
};

const randomNumber = function (min, max) {
    return Math.random() * (max - min) + min;
};

const wpm = function (time, length) {
    const word = length / 5;
    const min = time / 60;

    return word / min;
};

const accuracy = function (mismatch, total) {
    const misMatchAccuracy = (mismatch / total) * 100;
    const correctAccuracy = 100 - misMatchAccuracy;
    return correctAccuracy;
};

module.exports = {
    isEqual,
    randomNumber,
    wpm,
    accuracy,
};
