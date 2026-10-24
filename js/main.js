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
        input.resetGame(hiddenWord);
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

createGrid(gameGrid);
createKeyboard(keyboard);

fetch("../data/words.json")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to load words.");
        }
        return response.json();
    })
    .then(function(data) {
        wordData = data.words;
        
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