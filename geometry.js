const isEqual = function (userInput, stringInput) {
    return userInput === stringInput;
};

const randomNumber = function (min, max) {
    return Math.random() * (max - min) + min;
};

module.exports = {
    isEqual,
    randomNumber,
};
