export function setupInput(gameGrid, keyboard, gameMessage) {
    let currentRow = 0;
    let currentColumn = 0;
    let gameOver = false;

    keyboard.addEventListener("click", function (event) {
        const key = event.target.closest("button");

        if (!key) {
            return;
        }

        const value = key.dataset.key;
        
        if (gameOver) {
            return;
        }
        
        if (value === "ENTER") {
            if (currentColumn === 5) {
                if (currentRow < 5) {
                    currentRow++;
                    currentColumn = 0;
                    gameMessage.textContent = "Guess submitted!";
                } else {
                    gameOver = true;
                    gameMessage.textContent = "No more attempts left.";
                }
            } else {
                gameMessage.textContent = "Enter five letters first.";
            }
        
            return;
        }

        if (value === "BACKSPACE") {
            if (currentColumn > 0) {
                currentColumn--;
        
                const tile = gameGrid.querySelector(
                    `.grid-tile[data-row="${currentRow}"][data-column="${currentColumn}"]`
                );
        
                tile.textContent = "";
            }
        } else if (value.length === 1 && currentColumn < 5) {
            const tile = gameGrid.querySelector(
                `.grid-tile[data-row="${currentRow}"][data-column="${currentColumn}"]`
            );
        
            tile.textContent = value;
            currentColumn++;
        }
    });
}