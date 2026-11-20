const sketch = require("./sketch");
const loop = function () {
    while (sketch.running) {
        sketch.update();
        sketch.draw();
    }
};

const main = function () {
    sketch.setup();
    loop();
    sketch.tearDown();
};
main();
