export function createKeyboard(keyboard) {
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
}