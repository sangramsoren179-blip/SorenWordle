export function setupInput(gameGrid, keyboard, gameMessage, hiddenWord, validWords, showPopup) {
    let currentRow = 0;
    let currentColumn = 0;
    let gameOver = false;
    
    function resetGame(newHiddenWord, newValidWords) {
        hiddenWord = newHiddenWord;
        validWords = newValidWords;
    
        currentRow = 0;
        currentColumn = 0;
        gameOver = false;
    
        gameGrid.querySelectorAll(".grid-tile").forEach(function (tile) {
            tile.textContent = "";
            tile.classList.remove("correct", "present", "absent");
        });
    
        keyboard.querySelectorAll(".key").forEach(function (key) {
            key.classList.remove("correct", "present", "absent");
        });
    
        gameMessage.textContent = "Start guessing!";
    }

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
            if (currentColumn === hiddenWord.length) {
                let guess = "";
        
                for (let column = 0; column < hiddenWord.length; column++) {
                    const tile = gameGrid.querySelector(
                        `.grid-tile[data-row="${currentRow}"][data-column="${column}"]`
                    );
        
                    guess += tile.textContent;
                }
                
                const normalizedGuess = guess.toLowerCase();
        
                if (!validWords.includes(normalizedGuess)) {
                    gameMessage.textContent = "Invalid word. Try again!";
                } else {
                    const feedback = Array(hiddenWord.length).fill("absent");
                    const remainingLetters = hiddenWord.split("");
                
                    for (let column = 0; column < hiddenWord.length; column++) {
                        if (normalizedGuess[column] === hiddenWord[column]) {
                            feedback[column] = "correct";
                            remainingLetters[column] = null;
                        }
                    }
                
                    for (let column = 0; column < hiddenWord.length; column++) {
                        if (feedback[column] === "correct") {
                            continue;
                        }
                
                        const letterIndex = remainingLetters.indexOf(normalizedGuess[column]);
                
                        if (letterIndex !== -1) {
                            feedback[column] = "present";
                            remainingLetters[letterIndex] = null;
                        }
                    }
                
                    for (let column = 0; column < hiddenWord.length; column++) {
                        const tile = gameGrid.querySelector(
                            `.grid-tile[data-row="${currentRow}"][data-column="${column}"]`
                        );
                
                        tile.classList.add(feedback[column]);
                    }
                    
                    for (let column = 0; column < hiddenWord.length; column++) {
                        const letter = guess[column];
                        const key = keyboard.querySelector(
                            `.key[data-key="${letter}"]`
                        );
                    
                        const currentFeedback = key.classList.contains("correct")
                            ? "correct"
                            : key.classList.contains("present")
                                ? "present"
                                : key.classList.contains("absent")
                                    ? "absent"
                                    : null;
                    
                        const priority = {
                            absent: 1,
                            present: 2,
                            correct: 3
                        };
                    
                        if (
                            !currentFeedback ||
                            priority[feedback[column]] > priority[currentFeedback]
                        ) {
                            key.classList.remove("absent", "present", "correct");
                            key.classList.add(feedback[column]);
                        }
                    }
                
                    if (normalizedGuess === hiddenWord) {
                        gameOver = true;
                        gameMessage.textContent = "Congratulations! You guessed the word!";
                        
                        showPopup(
                            "You Won!",
                            "Congratulations! You guessed the word!",
                            hiddenWord.toUpperCase()
                        );
                    } else if (currentRow < 5) {
                        currentRow++;
                        currentColumn = 0;
                        gameMessage.textContent = "Incorrect guess. Try again!";
                    } else {
                        gameOver = true;
                        gameMessage.textContent = `Game over! The word was ${hiddenWord.toUpperCase()}.`;
                    
                        showPopup(
                            "Game Over!",
                            "You used all six attempts.",
                            hiddenWord.toUpperCase()
                        );
                    }
                }
            } else {
                gameMessage.textContent = `Enter ${hiddenWord.length} letters first.`;
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
        } else if (value.length === 1 && currentColumn < hiddenWord.length) {
            const tile = gameGrid.querySelector(
                `.grid-tile[data-row="${currentRow}"][data-column="${currentColumn}"]`
            );
        
            tile.textContent = value;
            currentColumn++;
        }
    });

    return {
        resetGame
    };
}