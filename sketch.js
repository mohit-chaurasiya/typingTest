const r = require("raylib");

const running = function () {
    return !r.WindowShouldClose;
};

const setup = function () {};

const update = function () {};

const draw = function () {};

const tearDown = function () {};

module.exports = {
    running,
    setup,
    update,
    draw,
    tearDown,
};
