const r = require("raylib");
const s = require("./sentence");
const d = require("./data");
const input = require("./input");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const HEIGHT = 400;
    const WIDTH = 1500;
    const TITLE = "Typing Test";
    const FPS = 60;

    const data = s.getSentence(d.words);
    const sentence = s.create({
        data,
        font: 24,
        x: 10,
        y: 20,
        color: r.GRAY,
    });

    const textBox = input.createTextBox({
        x: 20,
        y: 150,
        height: 100,
        width: WIDTH,
        color: r.WHITE,
    });

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        screen: {
            height: HEIGHT,
            width: WIDTH,
            fps: FPS,
        },

        sentence,
        textBox,
    };
};

const update = function () {
    // console.log("update workings");
};

const draw = function (world) {
    const { sentence, textBox } = world;
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    s.draw(sentence);
    input.draw(textBox);

    r.EndDrawing();
};

const tearDown = function () {
    return r.CloseWindow();
};

module.exports = {
    running,
    setup,
    update,
    draw,
    tearDown,
};
