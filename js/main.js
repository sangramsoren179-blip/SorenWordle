const home = document.getElementById("home");
const game = document.getElementById("game");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
    home.hidden = true;
    game.hidden = false;
});

const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", function () {
    game.hidden = true;
    home.hidden = false;
});