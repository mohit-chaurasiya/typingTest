const r = require("raylib");
const s = require("./sentence");
const d = require("./data");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const HEIGHT = 400;
    const WIDTH = 1500;
    const TITLE = "Typing Test";
    const FPS = 60;

    const data = s.getSentence(d.words);
    console.log(data.length);
    const sentence = s.create({
        data,
        font: 24,
        x: 10,
        y: 20,
        color: r.GRAY,
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
    };
};

const update = function () {
    // console.log("update workings");
};

const draw = function (world) {
    const { sentence } = world;
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    s.draw(sentence);
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
