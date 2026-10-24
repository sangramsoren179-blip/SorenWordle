export function getDOMElements() {
    return {
        home: document.getElementById("home"),
        game: document.getElementById("game"),
        playButton: document.getElementById("play-button"),
        wordLengthButtons: document.getElementById("word-length-buttons"),
        homeButton: document.getElementById("home-button"),
        gameMessage: document.getElementById("game-message"),
        gameGrid: document.getElementById("game-grid"),
        keyboard: document.getElementById("keyboard"),
        resultPopup: document.getElementById("result-popup"),
        resultTitle: document.getElementById("result-title"),
        resultMessage: document.getElementById("result-message"),
        resultWord: document.getElementById("result-word"),
        popupHomeButton: document.getElementById("popup-home-button"),
        popupCancelButton: document.getElementById("popup-cancel-button"),
        playAgainButton: document.getElementById("play-again-button")
    };
}