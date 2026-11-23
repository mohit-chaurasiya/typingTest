const r = require("raylib");
const s = require("./sentence");
const d = require("./data");
const input = require("./input");
const debug = require("./debug");
const { wpm } = require("./geometry");

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

    const sentenceLength = sentence.data.length - 1;

    const textBox = input.createTextBox({
        x: 20,
        y: 150,
        height: 100,
        width: WIDTH,
        color: r.WHITE,
    });
    const inputText = [];
    const inputWord = "";

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
        inputText,
        word: {
            inputWord,
        },
        sentenceProperty: {
            mismatch: 0,
            sentenceIndex: 0,
            charX: textBox.x + 5,
            sentenceLength,
        },
        result: {
            time: 0,
        },
        isTypingComplete: false,
    };
};

const update = function (world) {
    const { sentence, sentenceProperty, result, screen, isTypingComplete } =
        world;
    world.isTypingComplete =
        sentenceProperty.sentenceLength === world.inputText.length;

    if (isTypingComplete) {
        return false;
    }
    result.time += 1 / screen.fps;

    world.inputText = input.update(
        sentence.data,
        world.inputText,
        world.word,
        sentenceProperty,
    );
};

const drawWPMandAccuracy = function (time, length) {
    const wordPerMinute = wpm(Math.floor(time), length);
    r.DrawText(`WPM : ${wordPerMinute}`, 900, 30, 18, r.GRAY);
};

const draw = function (world) {
    const { sentence, textBox, inputText, result, isTypingComplete } = world;
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    s.draw(sentence);
    input.draw(textBox);
    input.drawCharacter(inputText);
    if (isTypingComplete) {
        drawWPMandAccuracy(result.time, sentence.data.length - 1);
    }
    debug.drawDebug(world);

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
