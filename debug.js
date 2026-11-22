const r = require("raylib");

const drawDebug = function (world) {
    r.DrawText(`Mismatch : ${world.mismatch}`, 10, 300, 20, r.RED);
    r.DrawText(
        `Index of sentence : ${world.sentenceIndex}`,
        400,
        300,
        20,
        r.RED,
    );
};

module.exports = {
    drawDebug,
};
