export function setupNavigation(elements) {
    const {
        home,
        game,
        playButton,
        homeButton,
        gameMessage
    } = elements;

    playButton.addEventListener("click", function () {
        home.hidden = true;
        game.hidden = false;
        gameMessage.textContent = "Start guessing!";
    });

    homeButton.addEventListener("click", function () {
        game.hidden = true;
        home.hidden = false;
    });
}