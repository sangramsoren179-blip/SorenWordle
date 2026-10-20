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
setupInput(gameGrid, keyboard, gameMessage);