const home = document.getElementById("home");
const game = document.getElementById("game");
const playButton = document.getElementById("play-button");
const gameMessage = document.getElementById("game-message");

playButton.addEventListener("click", function () {
    home.hidden = true;
    game.hidden = false;
    gameMessage.textContent = "Start guessing!";
});

const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", function () {
    game.hidden = true;
    home.hidden = false;
});

const gameGrid = document.getElementById("game-grid");

for (let row = 0; row < 6; row++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let column = 0; column < 5; column++) {
        const tile = document.createElement("div");
        tile.classList.add("grid-tile");

        gridRow.appendChild(tile);
    }

    gameGrid.appendChild(gridRow);
}

const keyboard = document.getElementById("keyboard");

const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
];

keyboardRows.forEach(function (row) {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    row.forEach(function (letter) {
        const key = document.createElement("button");
        key.type = "button";
        key.textContent = letter === "BACKSPACE" ? "BACK" : letter;
        key.classList.add("key");

        if (letter === "ENTER" || letter === "BACKSPACE") {
            key.classList.add("key-wide");
        }

        keyboardRow.appendChild(key);
    });

    keyboard.appendChild(keyboardRow);
});