export function setupNavigation(elements) {
    const {
        home,
        game,
        playButton,
        homeButton,
        gameMessage,
        startGame
    } = elements;

    playButton.addEventListener("click", function () {
        if (!startGame) {
            return;
        }
    
        startGame();
        home.hidden = true;
        game.hidden = false;
    });

    homeButton.addEventListener("click", function () {
        game.hidden = true;
        home.hidden = false;
    });
}