import { getDOMElements } from "./dom.js";
import { setupNavigation } from "./navigation.js";
import { createGrid } from "./grid.js";
import { createKeyboard } from "./keyboard.js";
import { setupInput } from "./input.js";
import { setupPopup } from "./popup.js";

const elements = getDOMElements();

let wordData;
let input;
let hiddenWord;
let wordLength = 5;

const {
    home,
    game,
    playButton,
    homeButton,
    gameMessage,
    gameGrid,
    keyboard
} = elements;

const popup = setupPopup(elements);

function startGame() {
    
    if (!wordData || wordData.length === 0) {
        gameMessage.textContent = "Words are still loading. Please try again.";
        return;
    }
    const possibleWords = wordData.filter(function (word) {
        return word !== hiddenWord;
    });

    hiddenWord = possibleWords.length > 0
        ? possibleWords[Math.floor(Math.random() * possibleWords.length)]
        : wordData[Math.floor(Math.random() * wordData.length)];
    
    createGrid(gameGrid, wordLength);
    gameGrid.style.setProperty("--word-length", wordLength);

    if (!input) {
        input = setupInput(
            gameGrid,
            keyboard,
            gameMessage,
            hiddenWord,
            wordData,
            popup.showPopup
        );
    } else {
        input.resetGame(hiddenWord, wordData);
    }

    popup.hidePopup();
    console.log("Hidden word:", hiddenWord);
}

setupNavigation({
    home,
    game,
    playButton,
    homeButton,
    gameMessage,
    startGame
});

createGrid(gameGrid, wordLength);
gameGrid.style.setProperty("--word-length", wordLength);
createKeyboard(keyboard);

fetch("../data/words.json")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to load words.");
        }
        return response.json();
    })
    .then(function(data) {
        wordData = data.wordsByLength[String(wordLength)];
        
        const availableLengths = Object.keys(data.wordsByLength);

        availableLengths.forEach(function (length) {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = length;
            button.dataset.length = length;
            
            const isSelected = Number(length) === wordLength;

            button.classList.toggle("selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));

            elements.wordLengthButtons.appendChild(button);
        });
        
        elements.wordLengthButtons.addEventListener("click", function (event) {
            const button = event.target.closest("button");
        
            if (!button) {
                return;
            }
        
            wordLength = Number(button.dataset.length);
            wordData = data.wordsByLength[String(wordLength)];
            
            elements.wordLengthButtons.querySelectorAll("button").forEach(function (item) {
            const isSelected = item === button;
        
            item.classList.toggle("selected", isSelected);
            item.setAttribute("aria-pressed", String(isSelected));
        });
        });
        
        elements.popupHomeButton.addEventListener("click", function () {
            popup.hidePopup();
            game.hidden = true;
            home.hidden = false;
        });
        
        elements.popupCancelButton.addEventListener("click", function () {
            popup.hidePopup();
        });
        
        elements.playAgainButton.addEventListener("click", function () {
            startGame();
        
            home.hidden = true;
            game.hidden = false;
        });
    })
    .catch(function (error) {
        console.error("Failed to load words:", error);
    });