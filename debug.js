const r = require("raylib");

const drawDebug = function (world) {
    r.DrawText(
        `Mismatch : ${world.sentenceProperty.mismatch}`,
        10,
        300,
        20,
        r.RED,
    );
    r.DrawText(
        `Index of sentence : ${world.sentenceProperty.sentenceIndex}`,
        400,
        300,
        20,
        r.RED,
    );
};

module.exports = {
    drawDebug,
};
