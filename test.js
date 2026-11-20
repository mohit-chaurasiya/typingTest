const r = require("raylib"); // Adjust this import if using a browser/WASM wrapper

const screenWidth = 800;
const screenHeight = 450;

r.InitWindow(screenWidth, screenHeight, "Alphanumeric Input Display");
r.SetTargetFPS(60);

let inputText = "";
const MAX_CHARS = 50;
let frameCounter = 0;

const textBox = { x: 220, y: 180, width: 500, height: 50 };

while (!r.WindowShouldClose()) {
    // 1. Capture alphanumeric input
    let key = r.GetCharPressed();
    while (key > 0) {
        const isAlphanumeric = key >= 48 && key <= 122;

        if (isAlphanumeric && inputText.length < MAX_CHARS) {
            inputText += String.fromCharCode(key);
        }
        key = r.GetCharPressed();
    }

    // 2. Handle Backspace
    if (r.IsKeyPressed(r.KEY_BACKSPACE) && inputText.length > 0) {
        inputText = inputText.slice(0, -1);
    }

    frameCounter++;

    // 3. Render the output on screen
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    r.DrawText("TYPE ALPHANUMERIC CHARACTERS:", 220, 150, 18, r.GRAY);

    // Draw input box background and border
    r.DrawRectangleRec(textBox, r.LIGHTGRAY);
    r.DrawRectangleLines(
        textBox.x,
        textBox.y,
        textBox.width,
        textBox.height,
        r.DARKGRAY,
    );

    // Draw the captured text
    const fontSize = 30;
    const textX = textBox.x + 12;
    const textY = textBox.y + 10;
    r.DrawText(inputText, textX, textY, fontSize, r.MAROON);

    // Draw a blinking underscore cursor at the end of the text
    if (
        inputText.length < MAX_CHARS &&
        Math.floor(frameCounter / 30) % 2 === 0
    ) {
        const textWidth = r.MeasureText(inputText, fontSize);
        r.DrawText("_", textX + textWidth + 4, textY, fontSize, r.MAROON);
    }

    r.DrawText(
        `Characters: ${inputText.length}/${MAX_CHARS}`,
        220,
        240,
        18,
        r.DARKGRAY,
    );

    r.EndDrawing();
}

r.CloseWindow();
