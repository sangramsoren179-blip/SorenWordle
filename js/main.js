import { getDOMElements } from "./dom.js";
import { setupNavigation } from "./navigation.js";
import { createGrid } from "./grid.js";
import { createKeyboard } from "./keyboard.js";
import { setupInput } from "./input.js";

const {
    home,
    game,
    playButton,
    homeButton,
    gameMessage,
    gameGrid,
    keyboard
} = getDOMElements();

setupNavigation({
    home,
    game,
    playButton,
    homeButton,
    gameMessage
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
    .then(function (wordData) {
        const randomIndex = Math.floor(Math.random() * wordData.words.length);
        const hiddenWord = wordData.words[randomIndex];
        
        setupInput(gameGrid, keyboard, gameMessage, hiddenWord, wordData.words);
        console.log("Hidden word:", hiddenWord);
    })
    .catch(function (error) {
        console.error("Failed to load words:", error);
    });