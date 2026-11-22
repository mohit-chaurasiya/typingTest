const { isEqual } = require("./geometry");

const test = function (message, expected, userInput, stringInput) {
    const actual = isEqual(userInput, stringInput);
    const isPass = actual === expected;
    const res = isPass ? "✅" : "❌";

    console.log(`${res} : ${message}`);
};

const main = function () {
    test("Both are String but not equal value.", false, "a", "b");
    test("Both are String with equal value.", true, "a", "a");
    test("Both are String with space value.", true, " ", " ");
    test("one is string and other is undefined value.", false, " ", undefined);
    test("one is string and other is null value.", false, " ", null);
    test("one is string and other is numeric value.", false, " ", 1);
    test("one is string and other is numeric value.", false, "1", 1);
};

main();
