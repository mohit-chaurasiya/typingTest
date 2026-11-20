const r = require("raylib");

const running = function () {
    return !r.WindowShouldClose;
};

const setup = function () {
    console.log("setup workings");
};

const update = function () {
    // console.log("update workings");
};

const draw = function () {
    // console.log("draw workings");
};

const tearDown = function () {
    console.log("tearDown workings");
};

module.exports = {
    running,
    setup,
    update,
    draw,
    tearDown,
};
