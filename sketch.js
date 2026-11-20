const r = require("raylib");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const HEIGHT = 400;
    const WIDTH = 800;
    const TITLE = "Typing Test";
    const FPS = 60;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        screen: {
            height: HEIGHT,
            width: WIDTH,
            fps: FPS,
        },
    };
};

const update = function () {
    // console.log("update workings");
};

const draw = function () {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(100, 100, 100, 100, r.WHITE);
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
