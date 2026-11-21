const sketch = require("./sketch");
const loop = function (world) {
    while (sketch.running()) {
        sketch.update();
        sketch.draw(world);
    }
};

const main = function () {
    const world = sketch.setup();
    loop(world);
    sketch.tearDown();
};
main();
