const r = require("raylib");
const s = require("./sentence");

const createTextBox = function ({ color, ...dimension }) {
    return {
        dim: { ...dimension },
        color,
    };
};

const draw = function ({ dim, color }) {
    r.DrawRectangleRec(dim, color);
};

module.exports = {
    createTextBox,
    draw,
};
